import { Request, Response } from "express";
import asyncHandler from "../util/asyncHandler.js";
import ApiError from "../util/ApiError.js";
import ApiResponse from "../util/ApiResponse.js";
import prisma from "../util/prisma.js";
import ip from "ip";

// Same rehosting convention as attendance.controller.ts getAttendance/toPhotoUrl:
// multer stores a relative disk path, we never save a full URL, so at read
// time we strip everything up to and including "uploads" and re-host it
// behind this server's own address.
const toPhotoUrl = (relativePath: string | null | undefined): string | null => {
  if (!relativePath) return null;
  let ipAdd = ip.address();
  if (process.env.PRODUCTION_MODE === "prod") ipAdd = "122.160.12.232";
  const parts = relativePath.split("uploads");
  if (parts.length < 2) return null;
  return `http://${ipAdd}:${process.env.PORT}${parts[1]}`;
};

export const createNewPartyOrder = asyncHandler(
  async (req: Request, res: Response) => {
    const { partyName, partyMobile, address, pincode, gstNumber, empId, totalAmount, paymentMode, creditDays, consumerRate, bulkRate, source, parentLedcd } = req.body;

    // multipart/form-data means orderItems arrives as a JSON string, not a
    // parsed array — unlike the JSON-body createOrder in order.controller.ts.
    let orderItems: any[];
    try {
      orderItems = typeof req.body.orderItems === "string"
        ? JSON.parse(req.body.orderItems)
        : req.body.orderItems;
    } catch {
      return res.status(400).json(new ApiError("orderItems must be valid JSON", 400));
    }

    if (!partyName || !partyMobile || !address || !pincode) {
      return res.status(400).json(new ApiError("Party name, mobile number, address, and pincode are required", 400));
    }

    // Same style as the mobile number: no format library, just a direct
    // check, since pincodes are always exactly 6 digits.
    if (!/^\d{6}$/.test(pincode)) {
      return res.status(400).json(new ApiError("Pincode must be exactly 6 digits", 400));
    }

    // source distinguishes a new-party entry made while browsing primary
    // parties from one made while browsing a primary party's secondary
    // (mstvendor) children. Validated here rather than trusted as-is, since
    // this endpoint could be hit directly and a bad value would silently
    // corrupt downstream reporting that splits on source.
    if (source !== "primary" && source !== "secondary") {
      return res.status(400).json(new ApiError("source must be 'primary' or 'secondary'", 400));
    }

    // parentLedcd only makes sense for secondary-sourced rows — a primary
    // new party has no parent by definition. Required (not just accepted)
    // when source is secondary, since a parent-less secondary row would be
    // meaningless data with no way to trace it back to the primary party
    // it was entered under.
    if (source === "secondary" && !parentLedcd) {
      return res.status(400).json(new ApiError("parentLedcd is required when source is 'secondary'", 400));
    }

    if (!Array.isArray(orderItems) || orderItems.length === 0) {
      return res.status(400).json(new ApiError("At least one order item is required", 400));
    }

    // Photo is mandatory for new-party orders — enforced here, not just on
    // the client, since this endpoint could be hit directly.
    if (!req.file) {
      return res.status(400).json(new ApiError("A shop photo is required", 400));
    }

    try {
      const order = await prisma.newPartyOrder.create({
        data: {
          partyName,
          partyMobile,
          address,
          pincode,
          gstNumber: gstNumber || undefined,
          source,
          parentLedcd: source === "secondary" ? parentLedcd : null,
          empId,
          photoUrl: req.file.path,
          totalAmount: Number(totalAmount) || 0,
          consumerRate: consumerRate !== undefined ? Number(consumerRate) : undefined,
          bulkRate: bulkRate !== undefined ? Number(bulkRate) : undefined,
          paymentMode: paymentMode || "",
          creditDays: paymentMode === "credit" ? parseInt(creditDays) || 0 : null,
          orderItems: {
            create: orderItems.map((item: any) => ({
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

      return res.status(200).json(
        new ApiResponse(200, "New party order created successfully", {
          ...order,
          photoUrl: toPhotoUrl(order.photoUrl),
        }),
      );
    } catch (error) {
      console.error("Error creating new party order:", error);
      return res.status(500).json(new ApiError("Failed to create new party order", 500, error));
    }
  },
);

export const getNewPartyOrders = asyncHandler(async (req: Request, res: Response) => {
  const { empId, source } = req.query;

  if (!empId) {
    return res.status(400).json(new ApiError("Employee ID is required", 400, {}));
  }

  // source is optional — omit it to get both primary and secondary rows
  // (unchanged default behavior); pass it to narrow to one or the other.
  const orders = await prisma.newPartyOrder.findMany({
    where: {
      empId: empId as string,
      ...(source ? { source: source as string } : {}),
    },
    include: { orderItems: true },
    orderBy: { createdAt: "desc" },
  });

  const withPhotoUrls = orders.map((o) => ({ ...o, photoUrl: toPhotoUrl(o.photoUrl) }));

  return res.status(200).json(new ApiResponse(200, "New party orders fetched successfully", withPhotoUrls));
});