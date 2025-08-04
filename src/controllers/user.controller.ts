import asyncHandler from "../util/asyncHandler.js";
import ApiError from "../util/ApiError.js";
import prisma from "../util/prisma.js";
import ApiResponse from "../util/ApiResponse.js";
import { Request, Response } from "express";
import fs from 'fs'
import path from 'path'

export const loginHandler = asyncHandler(async (req: Request, res: Response) => {
    console.log("we are here")
    const { username, password } = req.body; 
    console.log(username, password)

    if (!username || !password) {
        return res.status(400).json(new ApiError("Data is corrupt", 400, {})); 
    }

    const user = await prisma.user.findUnique({
        where: {
            username
        }
    })

    if (!user) {
        return res.status(403).json(new ApiError("User not found", 403, {}))
    }

    if (user?.password !== password) {
        return res.status(403).json(new ApiError("Password not matched", 403, {}))
    }

    

    return res.status(200).json(new ApiResponse(200, "User found succesfully", {user})); 
})

export const fetchParties = asyncHandler(async (req: Request, res: Response) => {
    console.log("we reached here")
    const { username, day } = req.body; 

    if (!username) {
        return res.status(400).json(new ApiError("Username is required", 400, {}))
    }

    const parties = await prisma.mstparty.findMany({
        where: {
            empcd: username,
            areanm: day
        },
        orderBy: {
            lednm: 'asc' // Sort alphabetically by name
        }
    })

    if (!parties || parties.length === 0) {
        return res.status(400).json(new ApiError("No parties found for this day", 400, {}))
    }

    return res.status(200).json(new ApiResponse(200, "Parties fetched successfully", parties))
})

export const fetchParty = asyncHandler(async (req: Request, res: Response) => {

  try {
    console.log("we reached here")
    const { partyId } = req.body; 


    const partyDetails = await prisma.mstparty.findFirst({
        where: {
            ledcd: partyId[0]
        }
    })

    const outstanding = await prisma.outstandingAmt.findUnique({
      where: {
        ledcd: partyId[0]
      }
    })
    let party;
    if (outstanding) {
      party = {...partyDetails, outstanding: outstanding}
    } else {
      party = {...partyDetails}
    }

    if (!party) {
      return res.status(400).json(new ApiError("This party doesn't exist", 400, {}))
    }

    return res.status(200).json(new ApiResponse(200, "Party fetched successfully", party))
  } catch (err) {
    return res.status(500).json(new ApiError('Internal server error', 500))
  } finally {
    await prisma.$disconnect(); 
  }
    
})

export const fetchUsersByLocation = asyncHandler(async (req: Request, res: Response) => {
  try {
     const users = await prisma.user.findMany({
        where: {
            NOT: {
                stnm: "",
                untnm: ""
            }
        },
        select: {
            user_id: true,
            username: true,
            stnm: true,
            stcd: true,
            untnm: true,
            untcd: true,
            usrnm: true
        },
        orderBy: [
            { stnm: 'asc' },
            { untnm: 'asc' }
        ]
    });

    if (!users || users.length === 0) {
        return res.status(404).json(new ApiError("No users found", 404, {}));
    }

    return res.status(200).json(new ApiResponse(200, "Users fetched successfully", users));
  } catch (err) {
    return res.status(500).json(new ApiError('Internal server error', 500))
  } finally {
    await prisma.$disconnect(); 
  }
   
});

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

export const uploadPartyImagesWithMulter = asyncHandler(async (req: Request, res: Response) => {
  const file = req.file; 
  const {partyId, userId} = req.body;

  console.log(file?.destination)


  await prisma.partyImages.create({
    data: {
      partyId: partyId, profileImageUrl: `/${file?.destination.toString()}` || "", userId: userId
    }
  })

  return res.status(200).json(new ApiResponse(200, "Photo uploaded successfully", {})); 
})

export const getItems = asyncHandler(async (req: Request, res: Response) => {
  try {
    const items = await prisma.mstitm.findMany({
        select: {
            itmcd: true, itmrate: true, itmnm: true
        }
    }); 

    return res.status(200).json(new ApiResponse(200, "Items fetched", items))
  } catch (err) {
    return res.status(500).json(new ApiError('Internal server error', 500, {}))
  } finally {
    await prisma.$disconnect()
  }
    
})

export const markAttendance = async (req: Request, res: Response) => {

  console.log(req.body)

  try {
    const { userId, status, time, absentReason, markedBy } = req.body;

    // Validate required fields
    if (!userId || !status || !time) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: userId, status, and time"
      });
    }

    // Validate status
    if (!['present', 'absent'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Status must be either 'present' or 'absent'"
      });
    }

    // Parse the time and extract date
    const markedAtTime = new Date(time);
    const attendanceDate = new Date(markedAtTime.toDateString()); // Get date without time

    // Validate that the date is not in the future
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (attendanceDate > today) {
      return res.status(400).json({
        success: false,
        message: "Cannot mark attendance for future dates"
      });
    }

    // Check if attendance already exists for this user on this date
    const existingAttendance = await prisma.attendance.findUnique({
      where: {
        userId_date: {
          userId: userId,
          date: attendanceDate
        }
      }
    });

    if (existingAttendance && existingAttendance.status !== 'not_marked') {
      return res.status(409).json({
        success: false,
        message: `Attendance already marked as '${existingAttendance.status}' for this date`,
        data: {
          existingStatus: existingAttendance.status,
          markedAt: existingAttendance.markedAt,
          date: attendanceDate
        }
      });
    }

    // Create or update attendance record
    const attendanceData = {
      status: status,
      markedAt: markedAtTime,
      markedBy: markedBy || null,
      absentReason: status === 'absent' ? absentReason : null
    };

    const attendance = await prisma.attendance.upsert({
      where: {
        userId_date: {
          userId: userId,
          date: attendanceDate
        }
      },
      update: attendanceData,
      create: {
        userId: userId,
        date: attendanceDate,
        ...attendanceData
      }
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
          absentReason: attendance.absentReason
        }
      }
    });

  } catch (error) {
    console.error('Error marking attendance:', error);
    
    return res.status(500).json({
      success: false,
      message: "Internal server error while marking attendance"
    });
  } finally {
    await prisma.$disconnect(); 
  }
};

export const fetchRates = asyncHandler(async (req: Request, res: Response) => {
  const { date } = req.body; 

  const depots = await prisma.user.findMany({
    select: {
      untcd: true, untnm: true
    }
  }); 

  console.log(depots); 

  const targetDate = new Date(date)
  const nextDate = new Date(targetDate); 
  nextDate.setDate(targetDate.getDate() + 1)

  const rates = await prisma.dailyRateList.findMany({
    where: {
      date: {
        gte: targetDate, 
        lt: nextDate
      }
    }
  })

  return res.status(200).json(new ApiResponse(200, "Rates fetched successfully", {depots, rates}))
})

export const submitRates = asyncHandler(async (req: Request, res: Response) => {
  const { submittedValues, date } = req.body; 

  if (!date || !submittedValues) {
    return res.status(400).json(new ApiError("Empty data sent", 400))
  }

  const targetDate = new Date(date)
  console.log(targetDate)
  
  const arr = Object.entries(submittedValues)
  console.log(arr)

  try {
     const rates = await Promise.all(
    arr.map(async (item: any) => {
      const untcd = item[0]; 
      console.log(untcd)
      
      const values: any = item[1]
      console.log(arr[1])

      let insertData: any = { untcd, date: targetDate }; 

      if (values.consumerRate !== undefined) insertData.consumerRate = values.consumerRate; 
      if (values.bulkRate !== undefined) insertData.bulkRate = values.bulkRate; 

      await prisma.dailyRateList.create({
        data: insertData
      })
    })
)

  return res.status(200).json(new ApiResponse(200, "Done", rates))
  } catch (err: any) {
    console.log("inserting rate error: ", err)
    res.status(500).json(new ApiError("Internal server error", 500))
  }
})

export const getSummary = asyncHandler(async (req: Request, res: Response) => {
  const { username, date } = req.body; 

  try {

    if (!username || !date) {
      return res.status(400).json(new ApiError("Username or date is invalid", 400)); 
    }

    console.log(date, username); 
    let startDate = new Date(date); 
    startDate.setHours(0, 0, 0, 0); 
    let endDate = new Date(date); 
    endDate.setHours(23, 59, 59, 999); 
    console.log(startDate.toLocaleString(), endDate)
    

    const data = await prisma.$transaction([
      prisma.order.findMany({
      where: {
        empId: username, AND: [
          { createdAt: { gte: startDate }}, 
          { createdAt: { lte: endDate }}
        ]
      }, 
      select: {
        totalAmount: true, partyId: true,   
      }
    }), 
    prisma.collection.findMany({
      where: {
        empId: username, AND: [
          {createdAt: {gte: startDate}}, 
          {createdAt: {lte: endDate}}
        ]     
     }, select: {
      amount: true
     }
    })
    ])
   
    console.log(data)

    const order = await prisma.order.findMany({
      where: {
        empId: username, AND: [
          { createdAt: { gte: startDate }}, 
          { createdAt: { lte: endDate }}
        ]
      }, 
      select: {
        totalAmount: true, partyId: true,   
      }
    })

    const sendOrder = await Promise.all(
      order.map(async (item) => {
        const partyName = await prisma.mstparty.findUnique({
          where: {
            ledcd: item.partyId
          }, select: {
            lednm: true
          }
        }); 

        return {...item, partyName: partyName?.lednm}
      })
    )

    const collection = await prisma.collection.findMany({
      where: {
        empId: username, AND: [
          {createdAt: {gte: startDate}}, 
          {createdAt: {lte: endDate}}
        ]     
     }, select: {
      amount: true, partyId: true
     }
    })

    const stock = await prisma.stock.findMany({
      where: {
        empId: username, AND: [
          { createdAt: {gte: startDate} }, 
          { createdAt: { lte: endDate } }
        ]
      }, include: {
        stockItems: {
          select: {
            quantity: true
          }
        }
      }
    })

  

    console.log(collection)



    return res.status(200).json(new ApiResponse(200, "Fetched successfully", {order: sendOrder, collection, stock}))

  } catch (err: any) {
    console.log("Summary error: ", err)
    return res.status(500).json(new ApiError("Internal server error", 500))
  }
})

export const getPreSummary = asyncHandler(async (req: Request, res: Response) => {
  const { date, username } = req.body; 
  console.log(date)

  if (!username || !date) {
      return res.status(400).json(new ApiError("Username or date is invalid", 400)); 
  }

  try {
    const startDate = new Date(date); 
    startDate.setHours(0, 0, 0, 0); 
    const endDate = new Date(date); 
    endDate.setHours(23, 59, 59, 999)
   

    const attendance = await prisma.attendance.findFirst({
      where: {
        userId: username, markedAt: {gte: startDate, lte: endDate}
      }, 
      select: {
        markedAt: true
      }
    })

    const orders = await prisma.order.findMany({
      where: {
        empId: username, createdAt: {
          gte: startDate, lte: endDate
        }
    }, include: {
      orderItems: true
    }
  })

    const collection = await prisma.collection.findMany({
      where: {
        empId: username, createdAt: {
          gte: startDate, lte: endDate
        }
      }
    })

    console.log("Order: ", orders); 
    console.log("Attendance: ", attendance); 
    console.log("Collection: ", collection); 

    let totalQuantity = 0; 
    let attendanceTime; 

    if (attendance && attendance.markedAt !== null && attendance.markedAt !== undefined) {
      attendanceTime = new Date(attendance.markedAt).toLocaleTimeString('en-IN', {
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true
      });
    }

   

    const dataToSend = {
      collectionCash: collection.filter((item) => {return item.paymentMethod === "cash"}).map((item) => item.amount).reduce((acc: any, curr: any) => {return Number(acc) + Number(curr)}, 0),
      collectionOnline: collection.filter((item) => item.paymentMethod === "online").map((item) => item.amount).reduce((acc: any, curr: any) => {return Number(acc) + Number(curr)}, 0), 
      collectionCheque: collection.filter((item) => item.paymentMethod === "cheque").map((item) => item.amount).reduce((acc: any, curr: any) => {return Number(acc) + Number(curr)}, 0), 
      beatsOrdered: orders.length, 
      totalQuantity: orders.map((item) => item.orderItems.map(item2 => {return totalQuantity += item2.quantity})) && totalQuantity,
      attendanceTime: attendance === null ? 'absent' : attendanceTime
    }
    console.log(dataToSend)

    return res.status(200).json(new ApiResponse(200, "Summary fetched successfully", dataToSend)); 

  } catch (err: any) {
    console.warn("Pre summary error: ", err); 
    res.status(500).json(new ApiError("Internal server error", 500))
  }
})


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