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

    console.log(orderData)
    
    try {
        // // Get consumer and bulk rates from mstitm
        // const rateItems = await prisma.mstitm.findMany({
        //     where: {
        //         itmcd: {
        //             in: ['Itma01562', 'Itma01754']
        //         }
        //     }
        // });

        // const consumerRate = rateItems.find(item => item.itmcd === 'ITMA01562')?.itmrate || 0;
        // const bulkRate = rateItems.find(item => item.itmcd === 'ITMA01754')?.itmrate || 0;


        // Get today's date at midnight for comparison
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const order = await prisma.$transaction(async (tx) => {
            // Check if an order exists for today
            const existingOrder = await tx.order.findFirst({
                where: {
                    partyId: orderData.partyId,
                    createdAt: {
                        gte: today
                    }
                },
                include: {
                    orderItems: true
                }
            });

            if (existingOrder) {
                // Update existing order
                // First delete all existing order items
                await tx.orderItem.deleteMany({
                    where: {
                        orderId: existingOrder.order_id
                    }
                });

                // Update the order and create new items
                const updatedOrder = await tx.order.update({
                    where: {
                        order_id: existingOrder.order_id
                    },
                    data: {
                        totalAmount: orderData.totalAmount,
                        discountAmount: orderData.discountAmount,
                        paymentMode: orderData.paymentMode,
                        creditDays: orderData.creditDays,
                        orderItems: {
                            create: orderData.orderItems.map((item: any) => ({
                                itemCode: item.itmcd,
                                itemName: item.itmnm,
                                quantity: item.qty,
                                rate: item.rate,
                                amount: item.amount
                            }))
                        }
                    },
                    include: {
                        orderItems: true
                    }
                });

                return updatedOrder;
            } else {
                const itemsWithPackType = await Promise.all(
                    orderData.orderItems.map(async (item: any) => {
                        const itemDetails = await tx.mstitm.findUnique({
                            where: { itmcd: item.itmcd }
                        });
                        
                        return {
                            ...item,
                            packType: itemDetails?.itmsubcat || 'Unknown'
                        };
                    })
                );

                // Create new order if none exists
                const newOrder = await tx.order.create({
                    data: {
                        partyId: orderData.partyId,
                        partyName: orderData.partyName,
                        empId: orderData.empId,
                        totalAmount: orderData.totalAmount,
                        discountAmount: orderData.discountAmount,
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
                                packType: item.packType
                            }))
                        }
                    },
                    include: {
                        orderItems: true
                    }
                });

                return newOrder;
            }
        });

        const message = order.createdAt.getTime() >= today.getTime() 
            ? "Order updated successfully"
            : "Order created successfully";

        return res.status(200).json(
            new ApiResponse(200, message, order)
        );

    } catch (error) {
        console.error("Error creating/updating order:", error);
        return res.status(500).json(
            new ApiError("Failed to process order", 500, error)
        );
    }
});

export const getOrders = asyncHandler(async (req: Request, res: Response) => {
    const { empId } = req.query;

    if (!empId) {
        return res.status(400).json(
            new ApiError("Employee ID is required", 400, {})
        );
    }

    const orders = await prisma.order.findMany({
        where: {
            empId: empId as string
        },
        include: {
            orderItems: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return res.status(200).json(
        new ApiResponse(200, "Orders fetched successfully", orders)
    );
});

export const getOrdersByLocation = asyncHandler(async (req: Request, res: Response) => {
    const { states, depots, employees, from, to, user } = req.query;
    let { filter } = req.query; 

    filter = (filter as string).toUpperCase(); 

    const stateList = states ? (states as string).split(',') : [];
    const depotList = depots ? (depots as string).split(',') : [];
    const employeeList = employees ? (employees as string).split(',') : [];

    let users = await prisma.user.findMany({
        where: {
            OR: [
                { stnm: { in: stateList.length > 0 ? stateList : undefined } },
                { untnm: { in: depotList.length > 0 ? depotList : undefined } },
                { user_id: { in: employeeList.length > 0 ? employeeList.map(Number) : undefined } }
            ]
        }
    });

    const admin = await prisma.admin.findFirst({
        where: {
            username: user as string 
        }
    })
    // console.log(admin)
    if (admin?.userType !== "ADMIN") {
        users = users.filter((item) => {
        return JSON.parse(admin?.allowedLocations || "").includes(item.untnm.toUpperCase().slice(0, 3)); 
    })
    }
    

    console.log(users)

    // Create date filters
    let createdAtFilter: any = {};

    if (from) {
    const [y, m, d] = (from as string).split("-").map(Number);
    createdAtFilter.gte = new Date(Date.UTC(y, m - 1, d, 0, 0, 0, 0));
    }

    if (to) {
    const [y, m, d] = (to as string).split("-").map(Number);
    createdAtFilter.lte = new Date(Date.UTC(y, m - 1, d, 23, 59, 59, 999));
    }

    let acceptRejectFilter: {accept: any, reject: any} = {
        accept: null, 
        reject: null
    }; 

    console.log(admin)

    if (admin?.userType === "DEPOT-INCHARGE") {
        acceptRejectFilter = {
            accept: filter === "PARK" ? {status: "PARK"} : null, 
            reject: filter === "REJECT" ? {isNot: null} : null
        }
    } else if (admin?.userType === "HEAD-OFFICE"){
        acceptRejectFilter = {
            accept: filter === "ALL" ? {status: "PARK"} : (filter === "ACCEPT" ? {status: "ACCEPT"}: null), 
            reject: filter === "REJECT" ? {isNot: null} : null
        }
    } else if (admin?.userType === "ADMIN") {
        console.log("came here ->", filter)
        acceptRejectFilter = {
            accept: filter === "ALL" ? {isNot: null} : (filter === "ACCEPT" ? {status: "ACCEPT"}: (filter === "PARK" ? {status: 'PARK'} : null)), 
            reject: filter === "REJECT" ? {isNot: null} : null
        }
    }

    console.log(acceptRejectFilter)

    const orders = await prisma.order.findMany({
        where: {
            empId: { in: users.map(u => u.username) },
            accept: acceptRejectFilter.accept,
            reject: acceptRejectFilter.reject, 
            createdAt: Object.keys(createdAtFilter).length ? createdAtFilter : undefined
        },
        include: {
            orderItems: true, 
            accept: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });


  const updatedOrders = (await Promise.all(
        orders.map(async (item) => {
            let updatedPartyName = item.partyName;
            let empName = "Unknown";

            
            if (item.partyName === "Loading...") {
            const fixedParty = await prisma.mstparty.findUnique({
                where: { ledcd: item.partyId },
                select: { lednm: true }
            });

            updatedPartyName = fixedParty?.lednm || "Unknown";
            }

            const outStanding = await prisma.outstandingAmt.findUnique({
                where: {
                    ledcd: item.partyId
                }
            })
            
            const fixedOrderItems = await Promise.all(
                item.orderItems.map(async (item) => {

                    if (item.packType === "" || !item.packType){
                        const item1 = await prisma.mstitm.findFirst({
                            where: {
                                itmcd: item.itemCode
                            }, 
                            select: {
                                itmsubcat: true
                            }
                        })

                        return {...item, packType: item1?.itmsubcat}
                    } 

                    return {...item}; 
                })
            )

            const employee = await prisma.user.findFirst({
            where: { username: item.empId },
            select: { usrnm: true }
            });

            const startDate = new Date(item.createdAt)
            startDate.setUTCHours(0,0 ,0,0)
            const endDate = new Date(startDate); 
            endDate.setUTCHours(23, 59, 59, 999); 

            const collection = await prisma.collection.findFirst({
                where: {
                    partyId: item.partyId, 
                    AND: [
                        {createdAt: {gte: startDate}}, 
                        {createdAt: {lte: endDate}}
                    ]
                }, 
                select: {
                    paymentMethod: true, amount: true
                }
            })

            empName = employee?.usrnm || "Unknown";

            const admin2 = await prisma.admin.findFirst({
                where: {
                    username: item.accept?.adminName
                }, 
                select: {
                    userType: true 
                }
            })

             const shouldInclude = filter === "ALL" || admin?.userType === "ADMIN" || admin?.userType === admin2?.userType;
        
            if (!shouldInclude) {
                return null;
            }


            return {
            ...item,
            partyName: updatedPartyName,
            empName, 
            orderItems: fixedOrderItems, 
            outstanding: outStanding?.outamt, 
            collection: {...collection, amount: collection?.amount || 0}, 
            status: item.accept?.status
            };
        })
    )).filter((order): order is NonNullable<typeof order> => order !== null);

    return res.status(200).json(
        new ApiResponse(200, "Orders fetched successfully", updatedOrders)
    );
});

export const getTodayOrdersByPartyId = asyncHandler(async (req: Request, res: Response) => {
  const { partyId } = req.params;

  if (!partyId) {
    return res.status(400).json(
      new ApiError("Party ID is required", 400, {})
    );
  }

  // Get today's date at midnight for comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const orders = await prisma.order.findMany({
    where: {
      partyId,
      createdAt: {
        gte: today
      }
    },
    include: {
      orderItems: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  return res.status(200).json(
    new ApiResponse(200, "Today's orders fetched successfully", orders)
  );
});


export const handleAcceptOrders = asyncHandler(async (req: Request, res: Response) => {
    const { orders, adminName, status } = req.body; 

    try {

        if (!orders || !adminName || !status) {
            return res.status(400).json(new ApiError("Bad Data", 400)); 
        }

        const admin = await prisma.admin.findFirst({
            where: {
                username: adminName
            }
        }); 

        if (!admin) {
            return res.status(409).json(new ApiError("No valid admin found", 409)); 
        }

        const createAccepts = await Promise.all(
            orders.map(async (item: any) => {
                const createOrder = await prisma.acceptedOrders.create({
                    data: {
                        order_id: item.id, adminName: admin.username, bulkRate: Number(item.bulkRate), consumerRate: Number(item.consumerRate), status, AcceptedAt: status === "ACCEPT" ? new Date().toISOString() : null, remarks: item.remarks 
                    }
                }); 
                return createOrder; 
            })
        )

        console.log("CREATED ACCEPTS:", createAccepts)

        return res.status(200).json(new ApiResponse(200, "Orders accepted gracefully", createAccepts))

    } catch (err: any) {
        console.log("Error in accepting orders =>", err); 
        return res.status(500).json(new ApiError("Internal Server error", 500)); 
    }
})

export const handleRejectOrders = asyncHandler(async (req: Request, res: Response) => {
    const { orders, adminName, remarks } = req.body; 

    try {

        if (!orders || !adminName) {
            return res.status(400).json(new ApiError("Invalid request", 400));
        }

        const admin = await prisma.admin.findFirst({
            where: {
                username: adminName
            }
        }); 

        if (!admin) {
            return res.status(409).json(new ApiError("No valid admin found", 409)); 
        }

        const rejectedOrders = await Promise.all(
            orders.map(async (item: any) => {
                await prisma.rejectedOrders.create({
                    data: {
                        order_id: item.id, adminName: admin.username, bulkRate: Number(item.bulkRate), consumerRate: Number(item.consumerRate), remarks: item.remarks 
                    }
                })
            })
        )

        return res.status(200).json(new ApiResponse(200, "Successfully rejected orders", rejectedOrders))
    
    } catch (err: any) {
        console.log("Error rejecting orders: ", err)
        return res.status(500).json(new ApiError("Error rejecting orders", 500)); 
    }
})