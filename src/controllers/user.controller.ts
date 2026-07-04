import asyncHandler from "../util/asyncHandler.js";
import ApiError from "../util/ApiError.js";
import prisma from "../util/prisma.js";
import ApiResponse from "../util/ApiResponse.js";
import { Request, Response } from "express";
import fs from "fs";
import path from "path";

export const loginHandler = asyncHandler(
  async (req: Request, res: Response) => {
    console.log("we are here");
    const { username, password } = req.body;
    console.log(username, password);

    if (!username || !password) {
      return res.status(400).json(new ApiError("Data is corrupt", 400, {}));
    }

    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    console.log(user);

    if (!user) {
      return res.status(403).json(new ApiError("User not found", 403, {}));
    }

    if (user?.password !== password) {
      return res
        .status(403)
        .json(new ApiError("Password not matched", 403, {}));
    }

    return res
      .status(200)
      .json(new ApiResponse(200, "User found succesfully", { user }));
  },
);

export const fetchParties = asyncHandler(
  async (req: Request, res: Response) => {
    console.log("we reached here");
    const { username, day } = req.body;

    if (!username) {
      return res
        .status(400)
        .json(new ApiError("Username is required", 400, {}));
    }

    let parties = await prisma.mstparty.findMany({
      where: {
        empcd: username,
        areanm: day,
      },
      orderBy: {
        lednm: "asc", // Sort alphabetically by name
      },
    });

    if (!parties || parties.length === 0) {
      return res
        .status(400)
        .json(new ApiError("No parties found for this day", 400, {}));
    }

    return res
      .status(200)
      .json(new ApiResponse(200, "Parties fetched successfully", parties));
  },
);

export const fetchParty = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { partyId } = req.body;
    console.log(partyId);

    const partyDetails = await prisma.mstparty.findFirst({
      where: {
        ledcd: partyId,
      },
    });

    const outstanding = await prisma.outstandingAmt.findUnique({
      where: {
        ledcd: partyId,
      },
    });
    let party;
    if (outstanding) {
      party = { ...partyDetails, outstanding: outstanding };
    } else {
      party = { ...partyDetails };
    }

    if (!party) {
      return res
        .status(400)
        .json(new ApiError("This party doesn't exist", 400, {}));
    }

    return res
      .status(200)
      .json(new ApiResponse(200, "Party fetched successfully", party));
  } catch (err) {
    return res.status(500).json(new ApiError("Internal server error", 500));
  } finally {
    await prisma.$disconnect();
  }
});

export const fetchUsersByLocation = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const users = await prisma.user.findMany({
        where: {
          NOT: {
            stnm: "",
            untnm: "",
          },
        },
        select: {
          user_id: true,
          username: true,
          stnm: true,
          stcd: true,
          untnm: true,
          untcd: true,
          usrnm: true,
        },
        orderBy: [{ stnm: "asc" }, { untnm: "asc" }],
      });

      if (!users || users.length === 0) {
        return res.status(404).json(new ApiError("No users found", 404, {}));
      }

      return res
        .status(200)
        .json(new ApiResponse(200, "Users fetched successfully", users));
    } catch (err) {
      return res.status(500).json(new ApiError("Internal server error", 500));
    } finally {
      await prisma.$disconnect();
    }
  },
);

export const uploadPartyImage = asyncHandler(
  async (req: Request, res: Response) => {
    const { image_data, partyId, userId } = req.body;

    if (!image_data || !partyId || !userId) {
      return res
        .status(400)
        .json(new ApiError("Missing required data", 400, {}));
    }

    // Decode base64 string
    const matches = image_data.match(/^data:image\/([a-zA-Z]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      return res
        .status(400)
        .json(new ApiError("Invalid base64 image", 400, {}));
    }

    const extension = matches[1];
    const base64Data = matches[2];

    // Generate human readable date format DD-MM-YYYY
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");
    const dateString = `${day}-${month}-${year}`;

    // Generate random ID for image
    const randomId = Math.random().toString(36).substring(2, 15);

    // Create directory structure
    const baseDir = path.join("uploads", "party_images_by_employees");
    const employeeDir = path.join(baseDir, userId);
    const partyDateDir = path.join(employeeDir, `${partyId}_${dateString}`);
    const filename = `${randomId}-${hours}_${minutes}_${seconds}.${extension}`;
    const filePath = path.join(partyDateDir, filename);

    try {
      // Create base directory if it doesn't exist
      if (!fs.existsSync(baseDir)) {
        fs.mkdirSync(baseDir, { recursive: true });
      }

      // Create employee directory if it doesn't exist
      if (!fs.existsSync(employeeDir)) {
        fs.mkdirSync(employeeDir, { recursive: true });
      }

      // Check if party folder exists for today
      if (!fs.existsSync(partyDateDir)) {
        fs.mkdirSync(partyDateDir, { recursive: true });
      }

      // Save the image file
      fs.writeFileSync(filePath, base64Data, { encoding: "base64" });

      const imageUrl = `/uploads/party_images_by_employees/${userId}/${partyId}_${dateString}/${filename}`;

      // Store image path in DB
      await prisma.partyImages.create({
        data: {
          partyId,
          profileImageUrl: imageUrl,
          userId,
        },
      });

      return res
        .status(200)
        .json(new ApiResponse(200, "Image uploaded", { imageUrl }));
    } catch (error) {
      console.error("Error saving image:", error);
      return res
        .status(500)
        .json(new ApiError("Failed to save image", 500, error));
    } finally {
      await prisma.$disconnect();
    }
  },
);

export const uploadPartyImagesWithMulter = asyncHandler(
  async (req: Request, res: Response) => {
    const file = req.file;
    const { partyId, userId, latValue, longValue } = req.body;

    console.log(file?.destination.toString());
    console.log(file?.filename);

    await prisma.partyImages.create({
      data: {
        partyId: partyId,
        profileImageUrl:
          `${file?.destination.toString()}/${file?.filename}` || "",
        userId: userId,
        latValue,
        longValue,
      },
    });

    return res
      .status(200)
      .json(new ApiResponse(200, "Photo uploaded successfully", {}));
  },
);

export const getItems = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = req.body;

  try {
    let items = await prisma.mstitm.findMany({
      select: {
        itmcd: true,
        itmrate: true,
        itmnm: true,
        itmsubcat: true,
        wgtconv: true,
        curcstamt: true,
      },
    });

    const user = await prisma.user.findFirst({
      where: {
        username: userId,
      },
      select: {
        untcd: true,
      },
    });

    const latestRate = await prisma.dailyRateList.findMany({
      where: {
        untcd: user?.untcd,
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        consumerRate: true,
        bulkRate: true,
      },
      take: 1,
    });

    items = items.map((item, idx) => {
      const rateFromList =
        item.itmsubcat === "Consumer Pack"
          ? latestRate[0].consumerRate
          : latestRate[0].bulkRate;
      console.log(item.itmnm, "-->", rateFromList);

      const finalRate =
        item.itmsubcat === "Consumer Pack"
          ? Math.floor(
              (rateFromList / 0.91) * Number(item.wgtconv) +
                Number(item.curcstamt),
            )
          : Math.floor(rateFromList - Number(item.curcstamt));
      return { ...item, itmrate: finalRate };
    });

    return res.status(200).json(
      new ApiResponse(200, "Items fetched", {
        items,
        consumerRate: latestRate[0].consumerRate,
        bulkRate: latestRate[0].bulkRate,
      }),
    );
  } catch (err) {
    return res.status(500).json(new ApiError("Internal server error", 500, {}));
  } finally {
    await prisma.$disconnect();
  }
});

export const markAttendance = async (req: Request, res: Response) => {
  console.log(req.body);

  try {
    const { userId, status, absentReason, markedBy } = req.body;
    let { time } = req.body;

    // time = time.split(',')[0];

    console.log("this is time:", time);

    // Validate required fields
    if (!userId || !status || !time) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: userId, status, and time",
      });
    }

    // Validate status
    if (!["present", "absent"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Status must be either 'present' or 'absent'",
      });
    }

    let imageUrl = "";

    if (req.file) {
      imageUrl = `${req.file?.destination.toString()}/${req.file?.filename}`;
    }

    // Parse the time and extract date
    const istOffset = 5.5 * 60 * 60 * 1000;
    const date1 = new Date();
    const markedAtTime = new Date(date1.getTime() + istOffset);
    console.log(markedAtTime);
    console.log(new Date(time).toLocaleString());
    const attendanceDate = time;

    const existingAttendance = await prisma.attendance.findUnique({
      where: {
        userId_date: {
          userId: userId,
          date: attendanceDate,
        },
      },
    });

    if (existingAttendance && existingAttendance.status !== "not_marked") {
      return res.status(409).json({
        success: false,
        message: `Attendance already marked as '${existingAttendance.status}' for this date`,
        data: {
          existingStatus: existingAttendance.status,
          markedAt: existingAttendance.markedAt,
          date: attendanceDate,
        },
      });
    }

    const attendanceData = {
      status: status,
      markedAt: markedAtTime,
      markedBy: markedBy || null,
      absentReason: status === "absent" ? absentReason : null,
      attendancePhoto: imageUrl,
    };

    const attendance = await prisma.attendance.upsert({
      where: {
        userId_date: {
          userId: userId,
          date: attendanceDate,
        },
      },
      update: attendanceData,
      create: {
        userId: userId,
        date: attendanceDate,
        ...attendanceData,
      },
    });

    return res.status(200).json({
      success: true,
      message: `Attendance marked as ${status} successfully`,
      data: {
        attendance: {
          attendance_id: attendance.attendance_id,
          userId: attendance.userId,
          date: attendance.date,
          status: attendance.status,
          markedAt: attendance.markedAt,
          markedBy: attendance.markedBy,
          absentReason: attendance.absentReason,
        },
      },
    });
  } catch (error) {
    console.error("Error marking attendance:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error while marking attendance",
    });
  } finally {
    await prisma.$disconnect();
  }
};

export const fetchRates = asyncHandler(async (req: Request, res: Response) => {
  const { date } = req.body;

  const depots = await prisma.user.findMany({
    select: {
      untcd: true,
      untnm: true,
    },
  });

  console.log(depots);

  const uniqueDepots = Array.from(
    new Map(depots.map((item) => [item.untcd, item])).values(),
  );

  const targetDate = new Date(date);
  const nextDate = new Date(targetDate);
  nextDate.setDate(targetDate.getDate() + 1);

  const rates = await prisma.dailyRateList.findMany({
    where: {
      date: {
        gte: targetDate,
        lt: nextDate,
      },
    },
  });

  return res.status(200).json(
    new ApiResponse(200, "Rates fetched successfully", {
      depots: uniqueDepots,
      rates,
    }),
  );
});

export const submitRates = asyncHandler(async (req: Request, res: Response) => {
  const { submittedValues, date } = req.body;

  if (!date || !submittedValues) {
    return res.status(400).json(new ApiError("Empty data sent", 400));
  }

  const targetDate = new Date(date);

  try {
    const arr = Object.entries(submittedValues);

    const rates = await Promise.all(
      arr.map(async ([untcd, values]: any) => {
        const insertData: any = {};

        if (values.consumerRate !== undefined) {
          insertData.consumerRate = values.consumerRate;
        }

        if (values.bulkRate !== undefined) {
          insertData.bulkRate = values.bulkRate;
        }

        return await prisma.dailyRateList.upsert({
          where: {
            untcd_date: {
              untcd,
              date: targetDate,
            },
          },

          update: {
            ...insertData,
          },

          create: {
            untcd,
            date: targetDate,
            ...insertData,
          },
        });
      }),
    );

    return res.status(200).json(new ApiResponse(200, "Done", rates));
  } catch (err: any) {
    console.log("inserting rate error:", err);

    return res.status(500).json(new ApiError("Internal server error", 500));
  }
});

export const getSummary = asyncHandler(async (req: Request, res: Response) => {
  const { username, date } = req.body;
  console.log("here");
  console.log(username, date);

  try {
    if (!username || !date) {
      return res
        .status(400)
        .json(new ApiError("Username or date is invalid", 400));
    }

    console.log(date, username);
    let startDate = new Date(date);
    const day = startDate.getDay();
    startDate.setHours(0, 0, 0, 0);
    let endDate = new Date(date);
    endDate.setHours(23, 59, 59, 999);
    console.log(startDate.toLocaleString(), endDate);

    const days = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
    ];
    const currentDay = days[day];

    let total = {
      outstanding: 0,
      totalQty: 0,
      totalAmount: 0,
    };

    const parties = await prisma.mstparty.findMany({
      where: {
        areanm: currentDay,
        empcd: username,
      },
      select: {
        lednm: true,
        outs: true,
        ledcd: true,
        mobile: true,
      },
    });

    parties.map((item) => (total.outstanding += Number(item.outs)));

    // Fetch bill dates for these parties from OutstandingAmt
    const outstandingAmts = await prisma.outstandingAmt.findMany({
      where: {
        ledcd: { in: parties.map((p) => p.ledcd) },
      },
      select: {
        ledcd: true,
        billdt: true,
      },
    });

    const billDateMap: Record<string, string> = {};
    outstandingAmts.forEach((item) => {
      billDateMap[item.ledcd] = item.billdt || "N/A";
    });

    const partiesWithBillDate = parties.map((item) => ({
      ...item,
      billdt: billDateMap[item.ledcd] || "N/A",
    }));

    const order = await prisma.order.findMany({
      where: {
        empId: username,
        AND: [
          { createdAt: { gte: startDate } },
          { createdAt: { lte: endDate } },
        ],
      },
      select: {
        partyId: true,
        orderItems: true,
        consumerRate: true,
        bulkRate: true,
        discountAmount: true,
        discountAmountBulk: true,
      },
    });

    const sendOrder = await Promise.all(
      order.map(async (item, index) => {
        const quan = item.orderItems
          .map((item) => item.quantity)
          .reduce((acc: number, curr: number) => acc + curr, 0);
        const consumerRateAfterDisc =
          Number(item.consumerRate) - Number(item.discountAmount) || 0;
        const bulkRateAfterDisc =
          Number(item.bulkRate) - Number(item.discountAmountBulk) || 0;
        const partyName = await prisma.mstparty.findUnique({
          where: {
            ledcd: item.partyId,
          },
          select: {
            lednm: true,
          },
        });

        return {
          ...item,
          partyName: partyName?.lednm,
          totalAmount: quan,
          consumerRate: consumerRateAfterDisc,
          bulkRate: bulkRateAfterDisc,
        };
      }),
    );

    console.log("orders", sendOrder);

    sendOrder.map((item) => (total.totalQty += item.totalAmount));

    const collection = await prisma.collection.findMany({
      where: {
        empId: username,
        AND: [
          { createdAt: { gte: startDate } },
          { createdAt: { lte: endDate } },
        ],
      },
      select: {
        amount: true,
        partyId: true,
        paymentMethod: true,
      },
    });

    collection.map((item) => (total.totalAmount += Number(item.amount)));

    const stock = await prisma.stock.findMany({
      where: {
        empId: username,
        AND: [
          { createdAt: { gte: startDate } },
          { createdAt: { lte: endDate } },
        ],
      },
      include: {
        stockItems: {
          select: {
            quantity: true,
          },
        },
      },
    });

    const partyImagesTimes = await prisma.partyImages.findMany({
      where: {
        userId: username,
        AND: [
          { createdAt: { gte: startDate } },
          { createdAt: { lte: endDate } },
        ],
      },
      select: {
        createdAt: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    const startTime =
      partyImagesTimes.length > 0
        ? partyImagesTimes[0].createdAt.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })
        : "N/A";

    const endTime =
      partyImagesTimes.length > 0
        ? partyImagesTimes[
            partyImagesTimes.length - 1
          ].createdAt.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })
        : "N/A";

    const partyImagesPerParty = await prisma.partyImages.findMany({
      where: {
        userId: username,
        AND: [
          { createdAt: { gte: startDate } },
          { createdAt: { lte: endDate } },
        ],
      },
      select: {
        partyId: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    // Build a map of partyId -> first visit time
    const partyVisitTimeMap: Record<string, string> = {};
    partyImagesPerParty.forEach((item) => {
      // Since ordered by asc, first occurrence = first visit time
      if (!partyVisitTimeMap[item.partyId]) {
        partyVisitTimeMap[item.partyId] = item.createdAt.toLocaleTimeString(
          "en-IN",
          {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          },
        );
      }
    });

    const sendCollection = await Promise.all(
      collection.map(async (item) => {
        const partyName = await prisma.mstparty.findUnique({
          where: {
            ledcd: item.partyId,
          },
          select: {
            lednm: true,
          },
        });

        return { ...item, partyName: partyName?.lednm };
      }),
    );

    console.log(sendCollection);

    return res.status(200).json(
      new ApiResponse(200, "Fetched successfully", {
        order: sendOrder,
        collection: sendCollection,
        stock,
        parties: partiesWithBillDate,
        total,
        startTime,
        endTime,
      }),
    );
  } catch (err: any) {
    console.log("Summary error: ", err);
    return res.status(500).json(new ApiError("Internal server error", 500));
  }
});

export const getPreSummary = asyncHandler(
  async (req: Request, res: Response) => {
    const { date, username } = req.body;
    console.log(date);

    if (!username || !date) {
      return res
        .status(400)
        .json(new ApiError("Username or date is invalid", 400));
    }

    try {
      const startDate = new Date(date);
      startDate.setHours(0, 0, 0, 0);
      const day = startDate.getDay();
      const endDate = new Date(date);
      endDate.setHours(23, 59, 59, 999);

      const days = [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
      ];
      const currentDay = days[day];
      const attendance = await prisma.attendance.findFirst({
        where: {
          userId: username,
          markedAt: { gte: startDate, lte: endDate },
        },
        select: {
          markedAt: true,
        },
      });

      const orders = await prisma.order.findMany({
        where: {
          empId: username,
          createdAt: {
            gte: startDate,
            lte: endDate,
          },
        },
        include: {
          orderItems: true,
        },
      });

      const collection = await prisma.collection.findMany({
        where: {
          empId: username,
          createdAt: {
            gte: startDate,
            lte: endDate,
          },
        },
      });

      const totalParties = await prisma.mstparty.findMany({
        where: {
          empcd: username,
          areanm: currentDay,
        },
      });

      const beatsVisited = await prisma.partyImages.findMany({
        where: {
          userId: username,
          AND: [
            { createdAt: { gte: startDate } },
            { createdAt: { lte: endDate } },
          ],
        },
      });

      console.log("Order: ", orders);
      console.log("Attendance: ", attendance);
      console.log("Collection: ", collection);
      console.log("Total Beats: ", totalParties.length);
      console.log("Beats Visited: ", beatsVisited.length);

      let totalQuantity = 0;
      let attendanceTime;

      if (
        attendance &&
        attendance.markedAt !== null &&
        attendance.markedAt !== undefined
      ) {
        attendanceTime = new Date(attendance.markedAt).toLocaleTimeString(
          "en-IN",
          {
            timeZone: "Asia/Kolkata",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          },
        );
      }

      console.log(attendance?.markedAt, attendanceTime);

      const dataToSend = {
        collectionCash: collection
          .filter((item) => {
            return item.paymentMethod === "cash";
          })
          .map((item) => item.amount)
          .reduce((acc: any, curr: any) => {
            return Number(acc) + Number(curr);
          }, 0),
        collectionOnline: collection
          .filter((item) => item.paymentMethod === "online")
          .map((item) => item.amount)
          .reduce((acc: any, curr: any) => {
            return Number(acc) + Number(curr);
          }, 0),
        collectionCheque: collection
          .filter((item) => item.paymentMethod === "cheque")
          .map((item) => item.amount)
          .reduce((acc: any, curr: any) => {
            return Number(acc) + Number(curr);
          }, 0),
        beatsOrdered: orders.length,
        totalQuantity:
          orders.map((item) =>
            item.orderItems.map((item2) => {
              return (totalQuantity += item2.quantity);
            }),
          ) && totalQuantity,
        attendanceTime: attendance === null ? "absent" : attendanceTime,
        totalBeats: totalParties.length.toString(),
        beatsVisited: beatsVisited.length.toString(),
      };
      console.log(dataToSend);

      return res
        .status(200)
        .json(new ApiResponse(200, "Summary fetched successfully", dataToSend));
    } catch (err: any) {
      console.warn("Pre summary error: ", err);
      res.status(500).json(new ApiError("Internal server error", 500));
    }
  },
);

// ---------------------- DELETED FUNCTIONALITIES --------------------------

// export const uploadPartyImage = asyncHandler(async (req: Request, res: Response) => {
//     const { image_data, partyId, userId } = req.body;

//     if (!image_data || !partyId || !userId) {
//         return res.status(400).json(new ApiError("Missing required data", 400, {}));
//     }

//     // Decode base64 string
//     const matches = image_data.match(/^data:image\/([a-zA-Z]+);base64,(.+)$/);
//     if (!matches || matches.length !== 3) {
//         return res.status(400).json(new ApiError("Invalid base64 image", 400, {}));
//     }

//     const extension = matches[1];
//     const base64Data = matches[2];

//     // Generate human readable date format DD-MM-YYYY
//     const today = new Date();
//     const day = String(today.getDate()).padStart(2, '0');
//     const month = String(today.getMonth() + 1).padStart(2, '0');
//     const year = today.getFullYear();
//     const hours = String(today.getHours()).padStart(2, '0');
//     const minutes = String(today.getMinutes()).padStart(2, '0');
//     const seconds = String(today.getSeconds()).padStart(2, '0');
//     const dateString = `${day}-${month}-${year}`;

//     // Generate random ID for image
//     const randomId = Math.random().toString(36).substring(2, 15);

//     // Create directory structure
//     const baseDir = path.join("uploads", "party_images_by_employees");
//     const employeeDir = path.join(baseDir, userId);
//     const partyDateDir = path.join(employeeDir, `${partyId}_${dateString}`);
//     const filename = `${randomId}-${hours}_${minutes}_${seconds}.${extension}`;
//     const filePath = path.join(partyDateDir, filename);

//     try {
//         // Create base directory if it doesn't exist
//         if (!fs.existsSync(baseDir)) {
//             fs.mkdirSync(baseDir, { recursive: true });
//         }

//         // Create employee directory if it doesn't exist
//         if (!fs.existsSync(employeeDir)) {
//             fs.mkdirSync(employeeDir, { recursive: true });
//         }

//         // Check if party folder exists for today
//         if (!fs.existsSync(partyDateDir)) {
//             fs.mkdirSync(partyDateDir, { recursive: true });
//         }

//         // Save the image file
//         fs.writeFileSync(filePath, base64Data, { encoding: "base64" });

//         const imageUrl = `/uploads/party_images_by_employees/${userId}/${partyId}_${dateString}/${filename}`;

//         // Store image path in DB
//         await prisma.partyImages.create({
//             data: {
//                 partyId,
//                 profileImageUrl: imageUrl,
//                 userId
//             }
//         });

//         return res.status(200).json(new ApiResponse(200, "Image uploaded", { imageUrl }));
//     } catch (error) {
//         console.error("Error saving image:", error);
//         return res.status(500).json(new ApiError("Failed to save image", 500, error));
//     } finally {
//       await prisma.$disconnect();
//     }
// });
