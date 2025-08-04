import { Request, Response } from "express";
import asyncHandler from "../util/asyncHandler.js";
import ApiError from "../util/ApiError.js";
import ApiResponse from "../util/ApiResponse.js";
import prisma from '../util/prisma.js'

interface StockItemInput {
    itmcd: string;
    itmnm: string;
    qty: number;
}

interface StockInput {
    partyId: string;
    partyName: string;
    empId: string;
    stockItems: StockItemInput[];
}

export const updateStock = asyncHandler(async (req: Request, res: Response) => {
    const stockData: StockInput = req.body;
    console.log("Received stock data:", stockData);

    // Validate required fields
    if (!stockData.partyId || !stockData.empId || !stockData.stockItems || stockData.stockItems.length === 0) {
        return res.status(400).json(
            new ApiError("Missing required fields", 400, {})
        );
    }

    try {
        // Get today's date at midnight for comparison
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Create or update stock with items in a transaction
        const stock = await prisma.$transaction(async (tx: any) => {
            // Check if a stock entry exists for today
            const existingStock = await tx.stock.findFirst({
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
                await tx.stockItem.deleteMany({
                    where: {
                        stockId: existingStock.stock_id
                    }
                });

                // Update the stock and create new items
                const updatedStock = await tx.stock.update({
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
            } else {
                // Create new stock if none exists
                const newStock = await tx.stock.create({
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
        });

        const message = stock.createdAt.getTime() >= today.getTime() 
            ? "Stock updated successfully"
            : "Stock created successfully";

        return res.status(200).json(
            new ApiResponse(200, message, stock)
        );

    } catch (error) {
        console.error("Error creating/updating stock:", error);
        return res.status(500).json(
            new ApiError("Failed to process stock update", 500, error)
        );
    }
});