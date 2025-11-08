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
    const orderData = req.body;
    console.log(orderData);
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
                        consumerRate: orderData.consumerRate,
                        bulkRate: orderData.bulkRate,
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
    const { states, depots, employees, from, to, user } = req.query;
    let { filter } = req.query;
    filter = filter.toUpperCase();
    const stateList = states ? states.split(',') : [];
    const depotList = depots ? depots.split(',') : [];
    const employeeList = employees ? employees.split(',') : [];
    let users = yield prisma.user.findMany({
        where: {
            OR: [
                { stnm: { in: stateList.length > 0 ? stateList : undefined } },
                { untnm: { in: depotList.length > 0 ? depotList : undefined } },
                { user_id: { in: employeeList.length > 0 ? employeeList.map(Number) : undefined } }
            ]
        }
    });
    const admin = yield prisma.admin.findFirst({
        where: {
            username: user
        }
    });
    // console.log(admin)
    if ((admin === null || admin === void 0 ? void 0 : admin.userType) !== "ADMIN") {
        users = users.filter((item) => {
            return JSON.parse((admin === null || admin === void 0 ? void 0 : admin.allowedLocations) || "").includes(item.untnm.toUpperCase().slice(0, 3));
        });
    }
    console.log(users);
    // Create date filters
    let createdAtFilter = {};
    if (from) {
        const [y, m, d] = from.split("-").map(Number);
        createdAtFilter.gte = new Date(Date.UTC(y, m - 1, d, 0, 0, 0, 0));
    }
    if (to) {
        const [y, m, d] = to.split("-").map(Number);
        createdAtFilter.lte = new Date(Date.UTC(y, m - 1, d, 23, 59, 59, 999));
    }
    let acceptRejectFilter = {
        accept: null,
        reject: null
    };
    console.log(admin);
    if ((admin === null || admin === void 0 ? void 0 : admin.userType) === "DEPOT-INCHARGE") {
        acceptRejectFilter = {
            accept: filter === "PARK" ? { status: "PARK" } : null,
            reject: filter === "REJECT" ? { isNot: null } : null
        };
    }
    else if ((admin === null || admin === void 0 ? void 0 : admin.userType) === "HEAD-OFFICE") {
        acceptRejectFilter = {
            accept: filter === "ALL" ? { status: "PARK" } : (filter === "ACCEPT" ? { status: "ACCEPT" } : null),
            reject: filter === "REJECT" ? { isNot: null } : null
        };
    }
    else if ((admin === null || admin === void 0 ? void 0 : admin.userType) === "ADMIN") {
        console.log("came here ->", filter);
        acceptRejectFilter = {
            accept: filter === "ALL" ? { isNot: null } : (filter === "ACCEPT" ? { status: "ACCEPT" } : (filter === "PARK" ? { status: 'PARK' } : null)),
            reject: filter === "REJECT" ? { isNot: null } : null
        };
    }
    console.log(acceptRejectFilter);
    const orders = yield prisma.order.findMany({
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
    const updatedOrders = (yield Promise.all(orders.map((item) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        let updatedPartyName = item.partyName;
        let empName = "Unknown";
        if (item.partyName === "Loading...") {
            const fixedParty = yield prisma.mstparty.findUnique({
                where: { ledcd: item.partyId },
                select: { lednm: true }
            });
            updatedPartyName = (fixedParty === null || fixedParty === void 0 ? void 0 : fixedParty.lednm) || "Unknown";
        }
        const outStanding = yield prisma.outstandingAmt.findUnique({
            where: {
                ledcd: item.partyId
            }
        });
        const fixedOrderItems = yield Promise.all(item.orderItems.map((item) => __awaiter(void 0, void 0, void 0, function* () {
            if (item.packType === "" || !item.packType) {
                const item1 = yield prisma.mstitm.findFirst({
                    where: {
                        itmcd: item.itemCode
                    },
                    select: {
                        itmsubcat: true
                    }
                });
                return Object.assign(Object.assign({}, item), { packType: item1 === null || item1 === void 0 ? void 0 : item1.itmsubcat });
            }
            return Object.assign({}, item);
        })));
        const employee = yield prisma.user.findFirst({
            where: { username: item.empId },
            select: { usrnm: true }
        });
        const startDate = new Date(item.createdAt);
        startDate.setUTCHours(0, 0, 0, 0);
        const endDate = new Date(startDate);
        endDate.setUTCHours(23, 59, 59, 999);
        const collection = yield prisma.collection.findFirst({
            where: {
                partyId: item.partyId,
                AND: [
                    { createdAt: { gte: startDate } },
                    { createdAt: { lte: endDate } }
                ]
            },
            select: {
                paymentMethod: true, amount: true
            }
        });
        empName = (employee === null || employee === void 0 ? void 0 : employee.usrnm) || "Unknown";
        const admin2 = yield prisma.admin.findFirst({
            where: {
                username: (_a = item.accept) === null || _a === void 0 ? void 0 : _a.adminName
            },
            select: {
                userType: true
            }
        });
        const shouldInclude = filter === "ALL" || (admin === null || admin === void 0 ? void 0 : admin.userType) === "ADMIN" || (admin === null || admin === void 0 ? void 0 : admin.userType) === (admin2 === null || admin2 === void 0 ? void 0 : admin2.userType);
        if (!shouldInclude) {
            return null;
        }
        return Object.assign(Object.assign({}, item), { partyName: updatedPartyName, empName, orderItems: fixedOrderItems, outstanding: outStanding === null || outStanding === void 0 ? void 0 : outStanding.outamt, collection: Object.assign(Object.assign({}, collection), { amount: (collection === null || collection === void 0 ? void 0 : collection.amount) || 0 }), status: (_b = item.accept) === null || _b === void 0 ? void 0 : _b.status });
    })))).filter((order) => order !== null);
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
export const handleAcceptOrders = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { orders, adminName, status } = req.body;
    try {
        if (!orders || !adminName || !status) {
            return res.status(400).json(new ApiError("Bad Data", 400));
        }
        const admin = yield prisma.admin.findFirst({
            where: {
                username: adminName
            }
        });
        if (!admin) {
            return res.status(409).json(new ApiError("No valid admin found", 409));
        }
        const createAccepts = yield Promise.all(orders.map((item) => __awaiter(void 0, void 0, void 0, function* () {
            const createOrder = yield prisma.acceptedOrders.create({
                data: {
                    order_id: item.id, adminName: admin.username, bulkRate: Number(item.bulkRate), consumerRate: Number(item.consumerRate), status, AcceptedAt: status === "ACCEPT" ? new Date().toISOString() : null, remarks: item.remarks
                }
            });
            return createOrder;
        })));
        console.log("CREATED ACCEPTS:", createAccepts);
        return res.status(200).json(new ApiResponse(200, "Orders accepted gracefully", createAccepts));
    }
    catch (err) {
        console.log("Error in accepting orders =>", err);
        return res.status(500).json(new ApiError("Internal Server error", 500));
    }
}));
export const handleRejectOrders = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { orders, adminName, remarks } = req.body;
    try {
        if (!orders || !adminName) {
            return res.status(400).json(new ApiError("Invalid request", 400));
        }
        const admin = yield prisma.admin.findFirst({
            where: {
                username: adminName
            }
        });
        if (!admin) {
            return res.status(409).json(new ApiError("No valid admin found", 409));
        }
        const rejectedOrders = yield Promise.all(orders.map((item) => __awaiter(void 0, void 0, void 0, function* () {
            yield prisma.rejectedOrders.create({
                data: {
                    order_id: item.id, adminName: admin.username, bulkRate: Number(item.bulkRate), consumerRate: Number(item.consumerRate), remarks: item.remarks
                }
            });
        })));
        return res.status(200).json(new ApiResponse(200, "Successfully rejected orders", rejectedOrders));
    }
    catch (err) {
        console.log("Error rejecting orders: ", err);
        return res.status(500).json(new ApiError("Error rejecting orders", 500));
    }
}));
