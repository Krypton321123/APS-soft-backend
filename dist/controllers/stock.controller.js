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
import prisma from '../util/prisma.js';
export const updateStock = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const stockData = req.body;
    console.log("Received stock data:", stockData);
    // Validate required fields
    if (!stockData.partyId || !stockData.empId || !stockData.stockItems || stockData.stockItems.length === 0) {
        return res.status(400).json(new ApiError("Missing required fields", 400, {}));
    }
    try {
        // Get today's date at midnight for comparison
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        // Create or update stock with items in a transaction
        const stock = yield prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            // Check if a stock entry exists for today
            const existingStock = yield tx.stock.findFirst({
                where: {
                    partyId: stockData.partyId,
                    createdAt: {
                        gte: today
                    }
                },
                include: {
                    stockItems: true
                }
            });
            if (existingStock) {
                // Update existing stock
                // First delete all existing stock items
                yield tx.stockItem.deleteMany({
                    where: {
                        stockId: existingStock.stock_id
                    }
                });
                // Update the stock and create new items
                const updatedStock = yield tx.stock.update({
                    where: {
                        stock_id: existingStock.stock_id
                    },
                    data: {
                        stockItems: {
                            create: stockData.stockItems.map(item => ({
                                itemCode: item.itmcd,
                                itemName: item.itmnm,
                                quantity: item.qty
                            }))
                        }
                    },
                    include: {
                        stockItems: true
                    }
                });
                return updatedStock;
            }
            else {
                // Create new stock if none exists
                const newStock = yield tx.stock.create({
                    data: {
                        partyId: stockData.partyId,
                        partyName: stockData.partyName,
                        empId: stockData.empId,
                        stockItems: {
                            create: stockData.stockItems.map(item => ({
                                itemCode: item.itmcd,
                                itemName: item.itmnm,
                                quantity: item.qty
                            }))
                        }
                    },
                    include: {
                        stockItems: true
                    }
                });
                return newStock;
            }
        }));
        const message = stock.createdAt.getTime() >= today.getTime()
            ? "Stock updated successfully"
            : "Stock created successfully";
        return res.status(200).json(new ApiResponse(200, message, stock));
    }
    catch (error) {
        console.error("Error creating/updating stock:", error);
        return res.status(500).json(new ApiError("Failed to process stock update", 500, error));
    }
}));
