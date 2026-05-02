import { Request, Response } from "express";
import asyncHandler from "../util/asyncHandler.js";
import ApiError from "../util/ApiError.js";
import ApiResponse from "../util/ApiResponse.js";
import prisma from "../util/prisma.js";

interface OrderItemInput {
  itmcd: string;
  itmnm: string;
  qty: number;
  rate: number;
  amount: number;
}

export const createOrder = asyncHandler(async (req: Request, res: Response) => {
  const orderData: any = req.body;

  console.log(orderData);

  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const order = await prisma.$transaction(async (tx) => {
      const existingOrder = await tx.order.findFirst({
        where: {
          partyId: orderData.partyId,
          createdAt: { gte: today },
        },
        include: { orderItems: true },
      });

      if (existingOrder) {
        await tx.orderItem.deleteMany({
          where: { orderId: existingOrder.order_id },
        });

        const updatedOrder = await tx.order.update({
          where: { order_id: existingOrder.order_id },
          data: {
            totalAmount: orderData.totalAmount,
            discountAmount: orderData.discountAmount,
            discountAmountBulk: orderData.discountAmountBulk,
            paymentMode: orderData.paymentMode,
            creditDays: orderData.creditDays,
            orderItems: {
              create: orderData.orderItems.map((item: any) => ({
                itemCode: item.itmcd,
                itemName: item.itmnm,
                quantity: item.qty,
                rate: item.rate,
                amount: item.amount,
              })),
            },
          },
          include: { orderItems: true },
        });

        return updatedOrder;
      } else {
        const itemsWithPackType = await Promise.all(
          orderData.orderItems.map(async (item: any) => {
            const itemDetails = await tx.mstitm.findUnique({
              where: { itmcd: item.itmcd },
            });
            return {
              ...item,
              packType: itemDetails?.itmsubcat || "Unknown",
            };
          }),
        );

        const newOrder = await tx.order.create({
          data: {
            partyId: orderData.partyId,
            partyName: orderData.partyName,
            empId: orderData.empId,
            totalAmount: orderData.totalAmount,
            discountAmount: orderData.discountAmount,
            discountAmountBulk: orderData.discountAmountBulk,
            paymentMode: orderData.paymentMode,
            creditDays: orderData.creditDays,
            consumerRate: orderData.consumerRate,
            bulkRate: orderData.bulkRate,
            orderItems: {
              create: itemsWithPackType.map((item: any) => ({
                itemCode: item.itmcd,
                itemName: item.itmnm,
                quantity: item.qty,
                rate: item.rate,
                amount: item.amount,
                packType: item.packType,
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
        ? "Order updated successfully"
        : "Order created successfully";

    return res.status(200).json(new ApiResponse(200, message, order));
  } catch (error) {
    console.error("Error creating/updating order:", error);
    return res
      .status(500)
      .json(new ApiError("Failed to process order", 500, error));
  }
});

export const getOrders = asyncHandler(async (req: Request, res: Response) => {
  const { empId } = req.query;

  if (!empId) {
    return res
      .status(400)
      .json(new ApiError("Employee ID is required", 400, {}));
  }

  const orders = await prisma.order.findMany({
    where: { empId: empId as string },
    include: { orderItems: true },
    orderBy: { createdAt: "desc" },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, "Orders fetched successfully", orders));
});

export const getOrdersByLocation = asyncHandler(
  async (req: Request, res: Response) => {
    const { states, depots, employees, from, to, user } = req.query;
    let { filter } = req.query;

    filter = (filter as string).toUpperCase();

    const stateList = states ? (states as string).split(",") : [];
    const depotList = depots ? (depots as string).split(",") : [];
    const employeeList = employees ? (employees as string).split(",") : [];

    let users = await prisma.user.findMany({
      where: {
        OR: [
          { stnm: { in: stateList.length > 0 ? stateList : undefined } },
          { untnm: { in: depotList.length > 0 ? depotList : undefined } },
          {
            user_id: {
              in:
                employeeList.length > 0 ? employeeList.map(Number) : undefined,
            },
          },
        ],
      },
    });

    const admin = await prisma.admin.findFirst({
      where: { username: user as string },
    });

    if (admin?.userType !== "ADMIN") {
      users = users.filter((item) => {
        return JSON.parse(admin?.allowedLocations || "[]").includes(
          item.untnm.toUpperCase().slice(0, 3),
        );
      });
    }

    console.log("Users found:", users.length);

    let createdAtFilter: any = {};

    if (from) {
      const [y, m, d] = (from as string).split("-").map(Number);
      createdAtFilter.gte = new Date(Date.UTC(y, m - 1, d, 0, 0, 0, 0));
    }

    if (to) {
      const [y, m, d] = (to as string).split("-").map(Number);
      createdAtFilter.lte = new Date(Date.UTC(y, m - 1, d, 23, 59, 59, 999));
    }

    // ── Filter logic per user type ─────────────────────────────────────────────
    //
    // DEPOT-INCHARGE:
    //   ALL    → unverified orders (no accept, no reject)
    //   PARK   → orders with a PARK accept entry
    //   REJECT → orders with a reject entry
    //
    // HEAD-OFFICE:
    //   ALL    → orders that have at least one PARK accept (ready for HO review)
    //   ACCEPT → orders with an ACCEPT accept entry
    //   REJECT → orders with a reject entry
    //
    // ADMIN:
    //   ALL    → everything
    //   PARK   → orders with a PARK accept entry
    //   ACCEPT → orders with an ACCEPT accept entry
    //   REJECT → orders with a reject entry
    //
    let whereAccept: any = undefined;
    let whereReject: any = undefined;

    if (admin?.userType === "DEPOT-INCHARGE") {
      if (filter === "PARK") {
        whereAccept = { some: { status: "PARK" } };
      } else if (filter === "REJECT") {
        whereReject = { isNot: null };
      } else {
        whereAccept = { none: {} };
        whereReject = null;
      }
    } else if (admin?.userType === "HEAD-OFFICE") {
      if (filter === "ALL") {
        whereAccept = { some: { status: "PARK" } };
      } else if (filter === "ACCEPT") {
        whereAccept = { some: { status: "ACCEPT" } };
      } else if (filter === "REJECT") {
        whereReject = { isNot: null };
      } else {
        whereAccept = { some: { status: "PARK" } };
      }
    } else if (admin?.userType === "ADMIN") {
      if (filter === "ALL") {
        whereAccept = undefined;
        whereReject = undefined;
      } else if (filter === "PARK") {
        whereAccept = { some: { status: "PARK" } };
      } else if (filter === "ACCEPT") {
        whereAccept = { some: { status: "ACCEPT" } };
      } else if (filter === "REJECT") {
        whereReject = { isNot: null };
      }
    }

    const orders = await prisma.order.findMany({
      where: {
        empId: { in: users.map((u) => u.username) },
        ...(whereAccept !== undefined ? { accept: whereAccept } : {}),
        ...(whereReject !== undefined ? { reject: whereReject } : {}),
        createdAt: Object.keys(createdAtFilter).length
          ? createdAtFilter
          : undefined,
      },
      include: {
        orderItems: true,
        accept: { orderBy: { createdAt: "desc" } },
        reject: true,
      },
      orderBy: { createdAt: "desc" },
    });

    const updatedOrders = await Promise.all(
      orders.map(async (item) => {
        let updatedPartyName = item.partyName;
        let empName = "Unknown";

        if (item.partyName === "Loading...") {
          const fixedParty = await prisma.mstparty.findUnique({
            where: { ledcd: item.partyId },
            select: { lednm: true },
          });
          updatedPartyName = fixedParty?.lednm || "Unknown";
        }

        const outStanding = await prisma.outstandingAmt.findUnique({
          where: { ledcd: item.partyId },
        });

        const fixedOrderItems = await Promise.all(
          item.orderItems.map(async (oi) => {
            if (oi.packType === "" || !oi.packType) {
              const itemMeta = await prisma.mstitm.findFirst({
                where: { itmcd: oi.itemCode },
                select: { itmsubcat: true },
              });
              return { ...oi, packType: itemMeta?.itmsubcat ?? "" };
            }
            return { ...oi };
          }),
        );

        const employee = await prisma.user.findFirst({
          where: { username: item.empId },
          select: { usrnm: true },
        });

        const startDate = new Date(item.createdAt);
        startDate.setUTCHours(0, 0, 0, 0);
        const endDate = new Date(startDate);
        endDate.setUTCHours(23, 59, 59, 999);

        const collection = await prisma.collection.findFirst({
          where: {
            partyId: item.partyId,
            AND: [
              { createdAt: { gte: startDate } },
              { createdAt: { lte: endDate } },
            ],
          },
          select: { paymentMethod: true, amount: true },
        });

        empName = employee?.usrnm || "Unknown";

        // Derive effective status
        let derivedStatus = "UNVERIFIED";
        if (item.accept && item.accept.length > 0) {
          const hasAccept = item.accept.some((a) => a.status === "ACCEPT");
          const hasPark = item.accept.some((a) => a.status === "PARK");
          if (hasAccept) derivedStatus = "ACCEPT";
          else if (hasPark) derivedStatus = "PARK";
        } else if (item.reject) {
          derivedStatus = "REJECT";
        }

        // Prefer ACCEPT entry for sicd/vehno/secFreight/remarks, fall back to latest
        const acceptEntry =
          item.accept?.find((a) => a.status === "ACCEPT") ?? item.accept?.[0];
        const parkEntry = item.accept?.find((a) => a.status === "PARK");

        const sicd = acceptEntry?.sicd ?? "";
        const vehno = acceptEntry?.vehno;
        const secFreight = acceptEntry?.secfreight;
        const remarks = acceptEntry?.remarks;

        // ── Rate resolution ──────────────────────────────────────────────────
        // Order.consumerRate / bulkRate always hold the ORIGINAL base rate
        // (set by the salesman's app and never mutated after that).
        //
        // Order.discountAmount / discountAmountBulk are updated by the backend
        // whenever an admin parks or accepts, so they always reflect the last
        // applied discount.
        //
        // AcceptedOrders.consumerRate / bulkRate hold the post-discount rate
        // that was actually pushed to the ERP.
        //
        // The frontend needs:
        //   • consumerRate / bulkRate   → original base rate (for the "Rate" columns)
        //   • discountAmount / discountAmountBulk → applied discount (pre-fills inputs)
        //   • (after-discount is computed client-side: base − discount)
        //
        // For PARK orders the discount inputs should show what the depot incharge
        // entered, which is now stored back on Order.discountAmount. So we just
        // return those fields as-is from the Order row — no extra derivation needed.

        return {
          ...item,
          partyName: updatedPartyName,
          empName,
          orderItems: fixedOrderItems,
          outstanding: outStanding?.outamt,
          collection: { ...collection, amount: collection?.amount || 0 },
          // Original base rates — never overwrite these
          consumerRate: item.consumerRate,
          bulkRate: item.bulkRate,
          // Applied discounts — updated on every park/accept so they round-trip correctly
          discountAmount: item.discountAmount,
          discountAmountBulk: item.discountAmountBulk,
          derivedStatus,
          sicd,
          vehno,
          secFreight,
          remarks,
        };
      }),
    );

    return res
      .status(200)
      .json(new ApiResponse(200, "Orders fetched successfully", updatedOrders));
  },
);

export const getTodayOrdersByPartyId = asyncHandler(
  async (req: Request, res: Response) => {
    const { partyId } = req.params;

    if (!partyId) {
      return res
        .status(400)
        .json(new ApiError("Party ID is required", 400, {}));
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const orders = await prisma.order.findMany({
      where: {
        partyId,
        createdAt: { gte: today },
      },
      include: { orderItems: true },
      orderBy: { createdAt: "desc" },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(200, "Today's orders fetched successfully", orders),
      );
  },
);

export const handleAcceptOrders = asyncHandler(
  async (req: Request, res: Response) => {
    const { orders, adminName, status } = req.body;

    try {
      if (!orders || !adminName || !status) {
        return res.status(400).json(new ApiError("Bad Data", 400));
      }

      const admin = await prisma.admin.findFirst({
        where: { username: adminName },
      });

      if (!admin) {
        return res.status(409).json(new ApiError("No valid admin found", 409));
      }

      const createAccepts = await Promise.all(
        orders.map(async (item: any) => {
          // Guard: skip orders already fully ACCEPTED
          const existingAccept = await prisma.acceptedOrders.findFirst({
            where: { order_id: item.id, status: "ACCEPT" },
          });

          if (existingAccept) {
            console.log(`Order ${item.id} is already ACCEPTED — skipping.`);
            return existingAccept;
          }

          // ── Step 1: persist the applied discounts back onto the Order row ──
          // This means when the order is fetched again (e.g. by HEAD-OFFICE
          // after a DEPOT-INCHARGE parks it) the discount inputs will correctly
          // show what the previous admin entered.
          await prisma.order.update({
            where: { order_id: item.id },
            data: {
              discountAmount: Number(item.discountConsumer ?? 0),
              discountAmountBulk: Number(item.discountBulk ?? 0),
            },
          });

          // ── Step 2: create the AcceptedOrders row ────────────────────────
          // consumerRate / bulkRate stored here are the POST-discount rates
          // that get pushed to the ERP via CREATEINVOICES.
          const createdAccept = await prisma.acceptedOrders.create({
            data: {
              order_id: item.id,
              adminName: admin.username,
              // Post-discount rates sent to ERP
              consumerRate: Number(item.consumerRate),
              bulkRate: Number(item.bulkRate),
              status,
              AcceptedAt: status === "ACCEPT" ? new Date().toISOString() : null,
              remarks: item.remarks ?? "",
              vehno: item.vehno ?? "",
              secfreight: Number(item.secfreight ?? 0),
            },
          });

          return createdAccept;
        }),
      );

      console.log("CREATED ACCEPTS:", createAccepts);

      await prisma.$executeRaw`EXEC CREATEINVOICES`;

      return res
        .status(200)
        .json(
          new ApiResponse(200, "Orders accepted gracefully", createAccepts),
        );
    } catch (err: any) {
      console.log("Error in accepting orders =>", err);
      return res.status(500).json(new ApiError("Internal Server error", 500));
    }
  },
);

export const handleRejectOrders = asyncHandler(
  async (req: Request, res: Response) => {
    const { orders, adminName } = req.body;

    try {
      if (!orders || !adminName) {
        return res.status(400).json(new ApiError("Invalid request", 400));
      }

      const admin = await prisma.admin.findFirst({
        where: { username: adminName },
      });

      if (!admin) {
        return res.status(409).json(new ApiError("No valid admin found", 409));
      }

      const rejectedOrders = await Promise.all(
        orders.map(async (item: any) => {
          // ── Persist applied discounts back onto the Order row ────────────
          await prisma.order.update({
            where: { order_id: item.id },
            data: {
              discountAmount: Number(item.discountConsumer ?? 0),
              discountAmountBulk: Number(item.discountBulk ?? 0),
            },
          });

          const existing = await prisma.rejectedOrders.findUnique({
            where: { order_id: item.id },
          });

          if (existing) {
            return prisma.rejectedOrders.update({
              where: { order_id: item.id },
              data: {
                adminName: admin.username,
                bulkRate: Number(item.bulkRate),
                consumerRate: Number(item.consumerRate),
                remarks: item.remarks ?? "",
              },
            });
          }

          return prisma.rejectedOrders.create({
            data: {
              order_id: item.id,
              adminName: admin.username,
              bulkRate: Number(item.bulkRate),
              consumerRate: Number(item.consumerRate),
              remarks: item.remarks ?? "",
            },
          });
        }),
      );

      return res
        .status(200)
        .json(
          new ApiResponse(200, "Successfully rejected orders", rejectedOrders),
        );
    } catch (err: any) {
      console.log("Error rejecting orders: ", err);
      return res.status(500).json(new ApiError("Error rejecting orders", 500));
    }
  },
);