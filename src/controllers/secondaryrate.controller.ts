import { Request, Response } from "express";
import asyncHandler from "../util/asyncHandler.js";
import ApiError from "../util/ApiError.js";
import ApiResponse from "../util/ApiResponse.js";
import prisma from "../util/prisma.js";

const SMS_API_URL =
  "https://msg.msgclub.net/rest/services/sendSMS/v2/sendtemplate";
const SMS_AUTH_KEY = "8a751c5dbe8f181cf459fa88852191f";
const SMS_SENDER_ID = "919520996610";

// ── Distinct party types (RETAILOR / WHOLE SALLER / DISTRIBUTOR) ─────────────
export const getPartyTypes = asyncHandler(
  async (req: Request, res: Response) => {
    const rows = await prisma.mstparty.findMany({
      distinct: ["pcatnm"],
      select: { pcatnm: true },
      where: { pcatnm: { not: null } },
    });
    const types = rows
      .map((r: { pcatnm: string | null }) => r.pcatnm)
      .filter((v: string | null): v is string => !!v && v.trim() !== "");
    return res
      .status(200)
      .json(new ApiResponse(200, "Success", types));
  },
);

// ── Distinct depots (same pattern as attendance.getDepots) ──────────────────
export const getDepots = asyncHandler(async (req: Request, res: Response) => {
  const depots = await prisma.user.findMany({
    distinct: ["untnm"],
    select: { untnm: true, untcd: true },
    where: { untnm: { not: "" } },
  });
  return res.status(200).json(new ApiResponse(200, "Success", depots));
});

// ── Employees within a depot, for the optional employee filter ──────────────
export const getEmployeesByDepot = asyncHandler(
  async (req: Request, res: Response) => {
    const { depot } = req.query;
    if (!depot) {
      return res
        .status(400)
        .json(new ApiError("depot is required", 400, {}));
    }
    const employees = await prisma.user.findMany({
      where: { untnm: depot as string },
      select: { username: true, usrnm: true },
    });
    return res.status(200).json(new ApiResponse(200, "Success", employees));
  },
);

// ── Parties for the table, filtered by depot + party type + optional emp ───
// NOTE: mstparty has no direct depot column visible in the schema you shared.
// Depot association goes through the employee (empcd on mstparty maps to a
// user, and that user belongs to a depot via untnm/untcd). So filtering by
// depot alone (no employee picked) means: find all employees in that depot,
// then find all parties whose empcd is one of those employees' username.
export const getPartiesForRates = asyncHandler(
  async (req: Request, res: Response) => {
    const { depot, partyType, empId } = req.query;

    if (!depot || !partyType) {
      return res
        .status(400)
        .json(new ApiError("depot and partyType are required", 400, {}));
    }

    let empcdFilter: string[] | undefined;

    if (empId) {
      // Specific employee selected — only their parties
      empcdFilter = [empId as string];
    } else {
      // No employee selected — all employees in this depot
      const usersInDepot = await prisma.user.findMany({
        where: { untnm: depot as string },
        select: { username: true },
      });
      empcdFilter = usersInDepot.map((u: { username: string }) => u.username);
      if (empcdFilter.length === 0) {
        return res.status(200).json(new ApiResponse(200, "Success", []));
      }
    }

    const parties = await prisma.mstparty.findMany({
      where: {
        pcatnm: partyType as string,
        empcd: { in: empcdFilter },
      },
      select: {
        ledcd: true,
        lednm: true,
        empcd: true,
        mobile: true,
        pcatnm: true,
      },
    });

    return res.status(200).json(new ApiResponse(200, "Success", parties));
  },
);

// ── Format date as DD-Month-YYYY, matching the SMS template's sample ────────
function formatDateForTemplate(date: Date): string {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const dd = String(date.getDate()).padStart(2, "0");
  const mmm = months[date.getMonth()];
  const yyyy = date.getFullYear();
  return `${dd}-${mmm}-${yyyy}`;
}

interface SendRatePartyInput {
  partyId: string;
  partyName: string;
  mobile: string;
  consumerRate: number;
  bulkRate: number;
}

// ── Send secondary rates via SMS, streaming progress over SSE ──────────────
// Body: { depotCd, depotNm, partyType, empId?, empName?, rateDate, sentBy, parties: SendRatePartyInput[] }
export const sendSecondaryRates = async (req: Request, res: Response) => {
  const {
    depotCd,
    depotNm,
    partyType,
    empId,
    empName,
    rateDate,
    sentBy,
    parties,
    displayNumber,
  }: {
    depotCd: string;
    depotNm: string;
    partyType: string;
    empId?: string;
    empName?: string;
    rateDate: string;
    sentBy: string;
    parties: SendRatePartyInput[];
    displayNumber?: string;
  } = req.body;

  if (!parties || !Array.isArray(parties) || parties.length === 0) {
    return res.status(400).json(new ApiError("No parties provided", 400, {}));
  }
  if (!sentBy) {
    return res.status(400).json(new ApiError("sentBy is required", 400, {}));
  }

  // ── Set up SSE ─────────────────────────────────────────────────────────
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  const sendEvent = (data: object) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  const total = parties.length;
  let completed = 0;
  let succeeded = 0;
  let failed = 0;

  sendEvent({ type: "start", total });

  const dateStr = formatDateForTemplate(new Date(rateDate));

  for (const party of parties) {
    try {
      const smsBody = {
        mobileNumbers: party.mobile,
        senderId: SMS_SENDER_ID,
        component: {
          messaging_product: "whatsapp",
          recipient_type: "individual",
          type: "template",
          template: {
            name: "dailyrates_1",
            language: { code: "en" },
            components: [
              {
                type: "body",
                index: 0,
                parameters: [
                  { type: "text", text: party.partyName },
                  { type: "text", text: dateStr },
                  { type: "text", text: party.consumerRate.toFixed(2) },
                  { type: "text", text: party.bulkRate.toFixed(2) },
                  // Last param only: shows the override number if the user set
                  // one in the "Display Number" box; falls back to the party's
                  // own mobile. mobileNumbers/to below are untouched — the
                  // message still delivers to the party's real number either way.
                  { type: "text", text: displayNumber?.trim() || party.mobile },
                ],
              },
            ],
          },
          qrImageUrl: false,
          qrLinkUrl: false,
          to: party.mobile,
        },
      };

      const smsResponse = await fetch(
        `${SMS_API_URL}?AUTH_KEY=${SMS_AUTH_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(smsBody),
        },
      );

      const smsResult: any = await smsResponse.json();
      const isSuccess = smsResult?.responseCode === "3001";

      await prisma.secondaryRate.create({
        data: {
          depotCd,
          depotNm,
          partyType,
          empId: empId ?? null,
          empName: empName ?? null,
          partyId: party.partyId,
          partyName: party.partyName,
          mobile: party.mobile,
          consumerRate: party.consumerRate,
          bulkRate: party.bulkRate,
          rateDate: new Date(rateDate),
          sentBy,
          status: isSuccess ? "sent" : "failed",
          responseId: isSuccess ? smsResult.response : null,
          errorMsg: isSuccess ? null : JSON.stringify(smsResult),
        },
      });

      if (isSuccess) succeeded++;
      else failed++;
    } catch (err: any) {
      await prisma.secondaryRate.create({
        data: {
          depotCd,
          depotNm,
          partyType,
          empId: empId ?? null,
          empName: empName ?? null,
          partyId: party.partyId,
          partyName: party.partyName,
          mobile: party.mobile,
          consumerRate: party.consumerRate,
          bulkRate: party.bulkRate,
          rateDate: new Date(rateDate),
          sentBy,
          status: "failed",
          errorMsg: err?.message ?? "Unknown error",
        },
      });
      failed++;
    }

    completed++;
    sendEvent({
      type: "progress",
      completed,
      total,
      succeeded,
      failed,
      lastParty: party.partyName,
    });
  }

  sendEvent({ type: "done", total, succeeded, failed });
  res.end();
};

// ── History: view past sends for a depot/date ────────────────────────────────
export const getSecondaryRateHistory = asyncHandler(
  async (req: Request, res: Response) => {
    const { depotCd, rateDate } = req.query;

    const where: any = {};
    if (depotCd) where.depotCd = depotCd as string;
    if (rateDate) {
      const d = new Date(rateDate as string);
      const start = new Date(d.setHours(0, 0, 0, 0));
      const end = new Date(d.setHours(23, 59, 59, 999));
      where.rateDate = { gte: start, lte: end };
    }

    const history = await prisma.secondaryRate.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json(new ApiResponse(200, "Success", history));
  },
);