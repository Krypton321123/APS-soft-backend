var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import asyncHandler from "../util/asyncHandler.js";
import ApiError from "../util/ApiError.js";
import ApiResponse from "../util/ApiResponse.js";
import prisma from "../util/prisma.js";
export const createOrder = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const orderData = req.body;
    try {
        // Get consumer and bulk rates from mstitm
        const rateItems = yield prisma.mstitm.findMany({
            where: {
                itmcd: {
                    in: ['Itma01562', 'Itma01754']
                }
            }
        });
        const consumerRate = ((_a = rateItems.find(item => item.itmcd === 'ITMA01562')) === null || _a === void 0 ? void 0 : _a.itmrate) || 0;
        const bulkRate = ((_b = rateItems.find(item => item.itmcd === 'ITMA01754')) === null || _b === void 0 ? void 0 : _b.itmrate) || 0;
        // Get today's date at midnight for comparison
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const order = yield prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            // Check if an order exists for today
            const existingOrder = yield tx.order.findFirst({
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
                yield tx.orderItem.deleteMany({
                    where: {
                        orderId: existingOrder.order_id
                    }
                });
                // Update the order and create new items
                const updatedOrder = yield tx.order.update({
                    where: {
                        order_id: existingOrder.order_id
                    },
                    data: {
                        totalAmount: orderData.totalAmount,
                        discountAmount: orderData.discountAmount,
                        paymentMode: orderData.paymentMode,
                        creditDays: orderData.creditDays,
                        orderItems: {
                            create: orderData.orderItems.map((item) => ({
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
            }
            else {
                const itemsWithPackType = yield Promise.all(orderData.orderItems.map((item) => __awaiter(void 0, void 0, void 0, function* () {
                    const itemDetails = yield tx.mstitm.findUnique({
                        where: { itmcd: item.itmcd }
                    });
                    return Object.assign(Object.assign({}, item), { packType: (itemDetails === null || itemDetails === void 0 ? void 0 : itemDetails.itmsubcat) || 'Unknown' });
                })));
                // Create new order if none exists
                const newOrder = yield tx.order.create({
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
                            create: itemsWithPackType.map((item) => ({
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
        }));
        const message = order.createdAt.getTime() >= today.getTime()
            ? "Order updated successfully"
            : "Order created successfully";
        return res.status(200).json(new ApiResponse(200, message, order));
    }
    catch (error) {
        console.error("Error creating/updating order:", error);
        return res.status(500).json(new ApiError("Failed to process order", 500, error));
    }
}));
export const getOrders = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { empId } = req.query;
    if (!empId) {
        return res.status(400).json(new ApiError("Employee ID is required", 400, {}));
    }
    const orders = yield prisma.order.findMany({
        where: {
            empId: empId
        },
        include: {
            orderItems: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    return res.status(200).json(new ApiResponse(200, "Orders fetched successfully", orders));
}));
export const getOrdersByLocation = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { states, depots, employees, from, to } = req.query;
    // Parse the query parameters
    const stateList = states ? states.split(',') : [];
    const depotList = depots ? depots.split(',') : [];
    const employeeList = employees ? employees.split(',') : [];
    // Get all users that match the criteria
    const users = yield prisma.user.findMany({
        where: {
            OR: [
                { stnm: { in: stateList.length > 0 ? stateList : undefined } },
                { untnm: { in: depotList.length > 0 ? depotList : undefined } },
                { user_id: { in: employeeList.length > 0 ? employeeList.map(Number) : undefined } }
            ]
        }
    });
    // Create date filters
    let createdAtFilter = {};
    if (from) {
        const fromDate = new Date(from);
        fromDate.setHours(0, 0, 0, 0);
        createdAtFilter.gte = fromDate;
    }
    if (to) {
        const toDate = new Date(to);
        toDate.setHours(23, 59, 59, 999);
        createdAtFilter.lte = toDate;
    }
    // Get orders for these users with date filtering
    const orders = yield prisma.order.findMany({
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
    const updatedOrders = yield Promise.all(orders.map((item) => __awaiter(void 0, void 0, void 0, function* () {
        let updatedPartyName = item.partyName;
        let empName = "Unknown";
        if (item.partyName === "Loading...") {
            const fixedParty = yield prisma.mstparty.findUnique({
                where: { ledcd: item.partyId },
                select: { lednm: true }
            });
            updatedPartyName = (fixedParty === null || fixedParty === void 0 ? void 0 : fixedParty.lednm) || "Unknown";
        }
        const employee = yield prisma.user.findFirst({
            where: { username: item.empId },
            select: { usrnm: true }
        });
        empName = (employee === null || employee === void 0 ? void 0 : employee.usrnm) || "Unknown";
        return Object.assign(Object.assign({}, item), { partyName: updatedPartyName, empName });
    })));
    return res.status(200).json(new ApiResponse(200, "Orders fetched successfully", updatedOrders));
}));
export const getTodayOrdersByPartyId = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { partyId } = req.params;
    if (!partyId) {
        return res.status(400).json(new ApiError("Party ID is required", 400, {}));
    }
    // Get today's date at midnight for comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const orders = yield prisma.order.findMany({
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
    return res.status(200).json(new ApiResponse(200, "Today's orders fetched successfully", orders));
}));
export const acceptRejectOrders = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { orders, status } = req.body;
    console.log(orders);
    try {
        switch (status) {
            case 'ACCEPT': {
                const acceptOrder = yield Promise.all(orders.map((order) => __awaiter(void 0, void 0, void 0, function* () {
                    const { orderId, consumerQuantity, bulkQuantity, consumerRate, bulkRate } = order;
                    if (consumerRate || bulkRate) {
                        const updateData = {};
                        if (bulkRate)
                            updateData.bulkRate = bulkRate;
                        if (consumerRate)
                            updateData.consumerRate = consumerRate;
                        yield prisma.order.update({
                            where: { order_id: orderId },
                            data: updateData
                        });
                    }
                    // Create accepted order record with quantities
                    yield prisma.acceptedOrders.create({
                        data: {
                            order_id: orderId,
                        },
                    });
                })));
                console.log('orders accepted with edits: ', acceptOrder);
                return res.status(200).json(new ApiResponse(200, "Orders accepted successfully with edits", acceptOrder));
            }
            case 'REJECT': {
                const rejectOrder = yield Promise.all(orders.map((order) => __awaiter(void 0, void 0, void 0, function* () {
                    yield prisma.rejectedOrders.create({
                        data: {
                            order_id: order.orderId
                        }
                    });
                })));
                console.log(`orders rejected: ${rejectOrder}`);
                return res.status(200).json(new ApiResponse(200, "Orders rejected successfully", rejectOrder));
            }
            default: {
                return res.status(400).json(new ApiError('Order status not sent', 400));
            }
        }
    }
    catch (err) {
        console.log("Accept reject error: ", err);
        return res.status(500).json(new ApiError('Internal server error', 500, {}));
    }
}));
