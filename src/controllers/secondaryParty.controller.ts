import { Request, Response } from "express";
import asyncHandler from "../util/asyncHandler.js";
import ApiError from "../util/ApiError.js";
import ApiResponse from "../util/ApiResponse.js";
import prisma from "../util/prisma.js";

// ── Vendor (secondary party) lookups ─────────────────────────────────────

// Used by PartyDetails to decide whether to render the "Secondary Parties"
// button at all (per decision: only show when children exist).
export const checkVendorsExist = asyncHandler(
  async (req: Request, res: Response) => {
    const { ledcd } = req.query;

    if (!ledcd) {
      return res.status(400).json(new ApiError("ledcd is required", 400, {}));
    }

    const count = await prisma.mstvendor.count({
      where: { ledcd: ledcd as string },
    });

    return res
      .status(200)
      .json(new ApiResponse(200, "Success", { hasVendors: count > 0 }));
  },
);

// Used by the secondary party list screen.
export const getVendorsByParent = asyncHandler(
  async (req: Request, res: Response) => {
    const { ledcd } = req.query;

    if (!ledcd) {
      return res.status(400).json(new ApiError("ledcd is required", 400, {}));
    }

    const vendors = await prisma.mstvendor.findMany({
      where: { ledcd: ledcd as string },
      select: {
        vendcd: true,
        name: true,
        adrs: true,
        contper: true,
        contno: true,
      },
      orderBy: { name: "asc" },
    });

    return res
      .status(200)
      .json(new ApiResponse(200, "Vendors fetched successfully", vendors));
  },
);

// Used by SecondaryPartyDetails.
export const getVendorDetails = asyncHandler(
  async (req: Request, res: Response) => {
    const { vendcd } = req.params;

    if (!vendcd) {
      return res
        .status(400)
        .json(new ApiError("vendcd is required", 400, {}));
    }

    // Explicit select — same reason as getVendorsByParent above: mstvendor.rowid
    // is a BigInt (view's autoincrement id), and JSON.stringify/res.json()
    // cannot serialize BigInt at all, so returning the raw row crashes the
    // request. Scoping to just what SecondaryPartyDetails renders avoids the
    // crash and also avoids leaking fields (tin, pan, tsale, ssale, entusrnm)
    // the client has no use for.
    const vendor = await prisma.mstvendor.findFirst({
      where: { vendcd },
      select: {
        vendcd: true,
        ledcd: true,
        name: true,
        adrs: true,
        contper: true,
        contno: true,
      },
    });

    if (!vendor) {
      return res
        .status(404)
        .json(new ApiError("Vendor not found", 404, {}));
    }

    return res
      .status(200)
      .json(new ApiResponse(200, "Vendor fetched successfully", vendor));
  },
);

// ── Secondary Orders ──────────────────────────────────────────────────────
// Mirrors createOrder in order.controller.ts: same-day upsert keyed on
// vendId instead of partyId, per explicit decision to match existing
// dedup behavior.

export const createSecondaryOrder = asyncHandler(
  async (req: Request, res: Response) => {
    const orderData: any = req.body;

    if (!orderData.vendId || !orderData.parentLedcd) {
      return res
        .status(400)
        .json(new ApiError("vendId and parentLedcd are required", 400, {}));
    }

    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const order = await prisma.$transaction(async (tx) => {
        const existingOrder = await tx.secondaryOrder.findFirst({
          where: {
            vendId: orderData.vendId,
            createdAt: { gte: today },
          },
          include: { orderItems: true },
        });

        if (existingOrder) {
          await tx.secondaryOrderItem.deleteMany({
            where: { secondaryOrderId: existingOrder.secondary_order_id },
          });

          const updatedOrder = await tx.secondaryOrder.update({
            where: { secondary_order_id: existingOrder.secondary_order_id },
            data: {
              totalAmount: orderData.totalAmount,
              discountAmount: orderData.discountAmount || 0,
              discountAmountBulk: orderData.discountAmountBulk || 0,
              paymentMode: orderData.paymentMode,
              creditDays: orderData.creditDays,
              orderItems: {
                create: orderData.orderItems.map((item: any) => ({
                  itemCode: item.itmcd,
                  itemName: item.itmnm,
                  quantity: item.qty,
                  rate: item.rate,
                  amount: item.amount,
                  packType: item.packType || "",
                })),
              },
            },
            include: { orderItems: true },
          });

          return updatedOrder;
        } else {
          const newOrder = await tx.secondaryOrder.create({
            data: {
              vendId: orderData.vendId,
              parentLedcd: orderData.parentLedcd,
              vendName: orderData.vendName,
              empId: orderData.empId,
              totalAmount: orderData.totalAmount,
              discountAmount: orderData.discountAmount || 0,
              discountAmountBulk: orderData.discountAmountBulk || 0,
              paymentMode: orderData.paymentMode,
              creditDays: orderData.creditDays,
              consumerRate: orderData.consumerRate,
              bulkRate: orderData.bulkRate,
              orderItems: {
                create: orderData.orderItems.map((item: any) => ({
                  itemCode: item.itmcd,
                  itemName: item.itmnm,
                  quantity: item.qty,
                  rate: item.rate,
                  amount: item.amount,
                  packType: item.packType || "",
                })),
              },
            },
            include: { orderItems: true },
          });

          return newOrder;
        }
      });

      const message =
        order.createdAt.getTime() >= today.getTime()
          ? "Secondary order updated successfully"
          : "Secondary order created successfully";

      return res.status(200).json(new ApiResponse(200, message, order));
    } catch (error) {
      console.error("Error creating/updating secondary order:", error);
      return res
        .status(500)
        .json(new ApiError("Failed to process secondary order", 500, error));
    }
  },
);

export const getTodaySecondaryOrderByVendId = asyncHandler(
  async (req: Request, res: Response) => {
    const { vendId } = req.params;

    if (!vendId) {
      return res
        .status(400)
        .json(new ApiError("vendId is required", 400, {}));
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const orders = await prisma.secondaryOrder.findMany({
      where: {
        vendId,
        createdAt: { gte: today },
      },
      include: { orderItems: true },
      orderBy: { createdAt: "desc" },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          "Today's secondary orders fetched successfully",
          orders,
        ),
      );
  },
);

// ── Secondary Stock ────────────────────────────────────────────────────────
// Mirrors the stock.controller.ts /stock/update handler shape (from Stock.tsx's
// payload: vendId/parentLedcd/vendName/empId/stockItems).

export const updateSecondaryStock = asyncHandler(
  async (req: Request, res: Response) => {
    const { vendId, parentLedcd, vendName, empId, stockItems } = req.body;

    if (!vendId || !parentLedcd || !stockItems || stockItems.length === 0) {
      return res
        .status(400)
        .json(new ApiError("Missing required stock data", 400, {}));
    }

    try {
      const stock = await prisma.secondaryStock.create({
        data: {
          vendId,
          parentLedcd,
          vendName,
          empId,
          stockItems: {
            create: stockItems.map((item: any) => ({
              itemCode: item.itmcd,
              itemName: item.itmnm,
              quantity: item.qty,
            })),
          },
        },
        include: { stockItems: true },
      });

      return res
        .status(200)
        .json(
          new ApiResponse(200, "Secondary stock updated successfully", stock),
        );
    } catch (error) {
      console.error("Error updating secondary stock:", error);
      return res
        .status(500)
        .json(new ApiError("Failed to update secondary stock", 500, error));
    }
  },
);

// ── Secondary Party Summary ────────────────────────────────────────────────
// Daily summary for one parent party's secondary parties, scoped the same
// way SecondaryPartyList is scoped (one parentLedcd at a time). Mirrors
// user.controller.ts's getSummary in shape, minus collection/outstanding
// per explicit decision — this covers order + visit-time only.

export const getSecondaryPartySummary = asyncHandler(
  async (req: Request, res: Response) => {
    const { empId, date, parentLedcd } = req.body;

    if (!empId || !date || !parentLedcd) {
      return res
        .status(400)
        .json(new ApiError("empId, date and parentLedcd are required", 400));
    }

    try {
      const startDate = new Date(date);
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(date);
      endDate.setHours(23, 59, 59, 999);

      // ── Orders for this parent's secondary parties today ──────────────
      const orders = await prisma.secondaryOrder.findMany({
        where: {
          empId,
          parentLedcd,
          AND: [
            { createdAt: { gte: startDate } },
            { createdAt: { lte: endDate } },
          ],
        },
        select: {
          vendId: true,
          vendName: true,
          orderItems: { select: { quantity: true } },
          consumerRate: true,
          bulkRate: true,
          discountAmount: true,
          discountAmountBulk: true,
          paymentMode: true,
        },
      });

      // ── Visit times ─────────────────────────────────────────────────
      // partyImages.partyId is an untyped string column with no FK — for
      // primary parties it holds mstparty.ledcd (see getSummary in
      // user.controller.ts); for secondary parties the upload flow is
      // expected to store mstvendor.vendcd there instead, per the same
      // table being reused for both photo-capture flows. If that
      // assumption doesn't match your upload call site, this map will
      // come back empty rather than error, and every row below will show
      // "N/A" for visit time — that's the symptom to check for if visit
      // times look missing across the board.
      const partyImagesForEmp = await prisma.partyImages.findMany({
        where: {
          userId: empId,
          AND: [
            { createdAt: { gte: startDate } },
            { createdAt: { lte: endDate } },
          ],
        },
        select: {
          partyId: true,
          createdAt: true,
        },
        orderBy: { createdAt: "asc" },
      });

      const visitTimeMap: Record<string, string> = {};
      partyImagesForEmp.forEach((item) => {
        if (!visitTimeMap[item.partyId]) {
          visitTimeMap[item.partyId] = item.createdAt.toLocaleTimeString(
            "en-IN",
            { hour: "2-digit", minute: "2-digit", hour12: true },
          );
        }
      });

      // ── Build vendId -> row map, seeded from orders ────────────────────
      const vendorMap: Record<string, any> = {};

      orders.forEach((item) => {
        const qty = item.orderItems.reduce(
          (acc: number, curr: { quantity: number }) => acc + curr.quantity,
          0,
        );
        const consumerRateAfterDisc =
          Number(item.consumerRate) - Number(item.discountAmount) || 0;
        const bulkRateAfterDisc =
          Number(item.bulkRate) - Number(item.discountAmountBulk) || 0;

        vendorMap[item.vendId] = {
          vendId: item.vendId,
          vendName: item.vendName,
          orderQty: qty,
          orderType: item.paymentMode || "",
          consumerRate: consumerRateAfterDisc,
          bulkRate: bulkRateAfterDisc,
          visitTime: visitTimeMap[item.vendId] ?? "N/A",
        };
      });

      // ── Add vendors who were visited (have a photo) but placed no order ──
      // Without this, a vendor visited-but-not-ordered silently vanishes
      // from the report instead of showing as a zero-order visit, which
      // matters for the same "did they actually go" reason the primary
      // summary cares about beat coverage.
      //
      // Note: this scopes the mstvendor lookup to `ledcd: parentLedcd` to
      // avoid pulling in a same-vendcd vendor under a different parent —
      // but mstvendor.vendcd is not marked @unique in the schema (only
      // rowid is the real PK), so if two vendors under different parents
      // ever legitimately share a vendcd, this filter is the only thing
      // preventing misattribution. Worth a spot-check against real data
      // if that's possible in your dataset.
      const visitedVendIds = Object.keys(visitTimeMap);
      const missingVendIds = visitedVendIds.filter((id) => !vendorMap[id]);

      if (missingVendIds.length > 0) {
        const missingVendors = await prisma.mstvendor.findMany({
          where: { vendcd: { in: missingVendIds }, ledcd: parentLedcd },
          select: { vendcd: true, name: true },
        });

        missingVendors.forEach((v) => {
          if (!v.vendcd) return;
          vendorMap[v.vendcd] = {
            vendId: v.vendcd,
            vendName: v.name || "Unknown",
            orderQty: 0,
            orderType: "",
            consumerRate: 0,
            bulkRate: 0,
            visitTime: visitTimeMap[v.vendcd] ?? "N/A",
          };
        });
      }

      const total = Object.values(vendorMap).reduce(
        (sum: number, v: any) => sum + (v.orderQty || 0),
        0,
      );

      return res.status(200).json(
        new ApiResponse(200, "Secondary party summary fetched successfully", {
          vendors: Object.values(vendorMap),
          totalQty: total,
        }),
      );
    } catch (err: any) {
      console.log("Secondary party summary error: ", err);
      return res.status(500).json(new ApiError("Internal server error", 500));
    }
  },
);