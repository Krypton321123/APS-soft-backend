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
    
    try {
        // Get consumer and bulk rates from mstitm
        const rateItems = await prisma.mstitm.findMany({
            where: {
                itmcd: {
                    in: ['Itma01562', 'Itma01754']
                }
            }
        });

        const consumerRate = rateItems.find(item => item.itmcd === 'ITMA01562')?.itmrate || 0;
        const bulkRate = rateItems.find(item => item.itmcd === 'ITMA01754')?.itmrate || 0;


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
                        consumerRate,
                        bulkRate,
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
    const { states, depots, employees, from, to } = req.query;

    // Parse the query parameters
    const stateList = states ? (states as string).split(',') : [];
    const depotList = depots ? (depots as string).split(',') : [];
    const employeeList = employees ? (employees as string).split(',') : [];

    // Get all users that match the criteria
    const users = await prisma.user.findMany({
        where: {
            OR: [
                { stnm: { in: stateList.length > 0 ? stateList : undefined } },
                { untnm: { in: depotList.length > 0 ? depotList : undefined } },
                { user_id: { in: employeeList.length > 0 ? employeeList.map(Number) : undefined } }
            ]
        }
    });

    // Create date filters
    let createdAtFilter: any = {};
    if (from) {
        const fromDate = new Date(from as string);
        fromDate.setHours(0, 0, 0, 0);
        createdAtFilter.gte = fromDate;
    }
    if (to) {
        const toDate = new Date(to as string);
        toDate.setHours(23, 59, 59, 999);
        createdAtFilter.lte = toDate;
    }

    // Get orders for these users with date filtering
    const orders = await prisma.order.findMany({
        where: {
            empId: { in: users.map(u => u.username) },
            accept: null,
            reject: null,
            createdAt: Object.keys(createdAtFilter).length ? createdAtFilter : undefined
        },
        include: {
            orderItems: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

  const updatedOrders = await Promise.all(
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

  
            const employee = await prisma.user.findFirst({
            where: { username: item.empId },
            select: { usrnm: true }
            });

            empName = employee?.usrnm || "Unknown";

            return {
            ...item,
            partyName: updatedPartyName,
            empName
            };
        })
    );



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
export const acceptRejectOrders = asyncHandler(async (req: Request, res: Response) => {
    const { orders, status } = req.body;

    console.log(orders)

    try {
        switch(status) {
            case 'ACCEPT': {
                const acceptOrder = await Promise.all(
                    orders.map(async (order: any) => {
                        const { orderId, consumerQuantity, bulkQuantity, consumerRate, bulkRate } = order;

                        if (consumerRate || bulkRate) { 

                            const updateData: any = {}
                            if (bulkRate) updateData.bulkRate = bulkRate
                            if (consumerRate) updateData.consumerRate = consumerRate

                            await prisma.order.update({
                            where: { order_id: orderId },
                            data: updateData
                        });
                        }
                        
                        
                        // Create accepted order record with quantities
                        await prisma.acceptedOrders.create({
                            data: {
                                order_id: orderId,
                              
                            },
                        });
                    })
                );

                console.log('orders accepted with edits: ', acceptOrder)
                return res.status(200).json(new ApiResponse(200, "Orders accepted successfully with edits", acceptOrder))
            }
            case 'REJECT': {
                const rejectOrder = await Promise.all(
                    orders.map(async (order: any) => {
                        await prisma.rejectedOrders.create({
                            data: {
                                order_id: order.orderId
                            }
                        })
                    })
                )

                console.log(`orders rejected: ${rejectOrder}`)
                return res.status(200).json(new ApiResponse(200, "Orders rejected successfully", rejectOrder))
            }
            default: {
                return res.status(400).json(new ApiError('Order status not sent', 400))
            }
        }

    } catch (err) {
        console.log("Accept reject error: ", err)
        return res.status(500).json(new ApiError('Internal server error', 500, {}))
    }
})