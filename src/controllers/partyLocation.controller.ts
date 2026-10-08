import asyncHandler from "../util/asyncHandler.js";
import ApiError from "../util/ApiError.js";
import ApiResponse from "../util/ApiResponse.js";
import prisma from "../util/prisma.js";
import { Request, Response } from "express";

// A salesman submits a shop's location from the app and it waits as "pending"
// until someone approves or rejects it on the web panel.
//   pending / approved → the pin is in effect (the app checks distance against it)
//   rejected           → counts as "no location", so the next visit can submit again

// ── Mobile app ───────────────────────────────────────────────────────────

// Merge each party's location state into the list. mstparty is a read-only ERP
// view, so locations live in our own PartyLocation table.
//   latitude / longitude → the pin in effect, or null (never saved, or rejected)
//   locationStatus       → pending | approved | rejected | null
//   locationNote         → the reviewer's reason when the last pin was rejected
export const attachPartyLocations = async <T extends { ledcd: string }>(
  parties: T[],
) => {
  const locations = await prisma.partyLocation.findMany({
    where: { partyId: { in: parties.map((p) => p.ledcd) } },
    select: {
      partyId: true,
      latitude: true,
      longitude: true,
      status: true,
      reviewNote: true,
    },
  });
  const byParty = new Map(locations.map((l) => [l.partyId, l]));

  return parties.map((p) => {
    const loc = byParty.get(p.ledcd);
    const inEffect = loc && loc.status !== "rejected" ? loc : null;
    return {
      ...p,
      latitude: inEffect?.latitude ?? null,
      longitude: inEffect?.longitude ?? null,
      locationStatus: loc?.status ?? null,
      locationNote: loc?.status === "rejected" ? loc.reviewNote : null,
    };
  });
};

// POST /user/setPartyLocation
// Creates a pending location. A shop that already has a pending or approved one
// can't be overwritten from the app; only a rejected one can be submitted again.
export const setPartyLocation = asyncHandler(
  async (req: Request, res: Response) => {
    const { partyId, empId, latitude, longitude, accuracy } = req.body;

    if (!partyId || !empId) {
      return res
        .status(400)
        .json(new ApiError("partyId and empId are required", 400, {}));
    }

    if (
      typeof latitude !== "number" ||
      typeof longitude !== "number" ||
      Math.abs(latitude) > 90 ||
      Math.abs(longitude) > 180
    ) {
      return res.status(400).json(new ApiError("Invalid coordinates", 400, {}));
    }

    const party = await prisma.mstparty.findFirst({
      where: { ledcd: partyId },
    });
    if (!party) {
      return res
        .status(404)
        .json(new ApiError("This party doesn't exist", 404, {}));
    }

    const submission = {
      latitude,
      longitude,
      accuracy: typeof accuracy === "number" ? accuracy : null,
      setBy: empId,
    };

    try {
      const location = await prisma.partyLocation.create({
        data: { partyId, ...submission },
      });
      return res
        .status(200)
        .json(new ApiResponse(200, "Location submitted for approval", location));
    } catch (err: any) {
      // P2002 = unique constraint on partyId, i.e. the shop already has a row
      if (err?.code !== "P2002") throw err;
    }

    // Only a rejected row can be submitted again. The status condition makes
    // this atomic, so if two people race, exactly one of them wins.
    const revived = await prisma.partyLocation.updateMany({
      where: { partyId, status: "rejected" },
      data: {
        ...submission,
        status: "pending",
        submittedAt: new Date(),
        reviewedBy: null,
        reviewedAt: null,
        reviewNote: null,
      },
    });

    if (revived.count === 0) {
      return res
        .status(409)
        .json(new ApiError("This party already has a location", 409, {}));
    }

    const location = await prisma.partyLocation.findUnique({
      where: { partyId },
    });
    return res
      .status(200)
      .json(new ApiResponse(200, "Location submitted for approval", location));
  },
);

// ── Web panel ────────────────────────────────────────────────────────────

const STATUSES = ["pending", "approved", "rejected"] as const;

// GET /admin/party-locations?status=pending|approved|rejected   (default: pending)
// Returns { items, counts }. Items carry the party's name and address from mstparty.
export const listPartyLocations = asyncHandler(
  async (req: Request, res: Response) => {
    const requested = String(req.query.status ?? "pending");
    const status = STATUSES.find((s) => s === requested) ?? "pending";

    const [rows, grouped] = await Promise.all([
      prisma.partyLocation.findMany({
        where: { status },
        // Pending is a queue, so oldest first. The other tabs are history, newest first.
        orderBy: { submittedAt: status === "pending" ? "asc" : "desc" },
        take: 300,
      }),
      prisma.partyLocation.groupBy({ by: ["status"], _count: { _all: true } }),
    ]);

    const counts = { pending: 0, approved: 0, rejected: 0 };
    for (const g of grouped) {
      if (g.status in counts) {
        counts[g.status as keyof typeof counts] = g._count._all;
      }
    }

    const parties = await prisma.mstparty.findMany({
      where: { ledcd: { in: rows.map((r) => r.partyId) } },
      select: { ledcd: true, lednm: true, ledadr1: true },
    });
    const partyById = new Map(parties.map((p) => [p.ledcd, p]));

    const items = rows.map((r) => ({
      ...r,
      partyName: partyById.get(r.partyId)?.lednm ?? null,
      partyAddress: partyById.get(r.partyId)?.ledadr1 ?? null,
    }));

    return res
      .status(200)
      .json(new ApiResponse(200, "Party locations fetched", { items, counts }));
  },
);

// POST /admin/party-locations/:id/approve   body: { reviewedBy }
export const approvePartyLocation = asyncHandler(
  async (req: Request, res: Response) => {
    const id = String(req.params.id);
    const { reviewedBy } = req.body;

    if (!reviewedBy) {
      return res
        .status(400)
        .json(new ApiError("reviewedBy is required", 400, {}));
    }

    // Only a pending location can be approved; the status condition keeps two
    // admins from clashing on the same row.
    const result = await prisma.partyLocation.updateMany({
      where: { location_id: id, status: "pending" },
      data: {
        status: "approved",
        reviewedBy,
        reviewedAt: new Date(),
        reviewNote: null,
      },
    });

    if (result.count === 0) {
      return res
        .status(409)
        .json(
          new ApiError("This location was already reviewed, or no longer exists", 409, {}),
        );
    }

    return res.status(200).json(new ApiResponse(200, "Location approved", {}));
  },
);

// POST /admin/party-locations/:id/reject   body: { reviewedBy, note? }
// Works on pending and approved locations (rejecting an approved one fixes a
// bad pin). Either way the shop goes back to "no location", so the next visit
// can submit it again.
export const rejectPartyLocation = asyncHandler(
  async (req: Request, res: Response) => {
    const id = String(req.params.id);
    const { reviewedBy, note } = req.body;

    if (!reviewedBy) {
      return res
        .status(400)
        .json(new ApiError("reviewedBy is required", 400, {}));
    }

    const result = await prisma.partyLocation.updateMany({
      where: { location_id: id, status: { in: ["pending", "approved"] } },
      data: {
        status: "rejected",
        reviewedBy,
        reviewedAt: new Date(),
        reviewNote: typeof note === "string" && note.trim() ? note.trim() : null,
      },
    });

    if (result.count === 0) {
      return res
        .status(409)
        .json(
          new ApiError("This location was already rejected, or no longer exists", 409, {}),
        );
    }

    return res.status(200).json(new ApiResponse(200, "Location rejected", {}));
  },
);