import asyncHandler from "../util/asyncHandler.js";
import ApiError from "../util/ApiError.js";
import prisma from "../util/prisma.js";
import ApiResponse from "../util/ApiResponse.js";
import { Request, Response } from "express";
import fs from 'fs';
import path from 'path';

export const createCollection = asyncHandler(async (req: Request, res: Response) => {
    const { 
        partyId, 
        partyName, 
        empId, 
        amount, 
        paymentMethod,
        chequeNumber,
        chequeDate,
        bankName,
        upiId,
        transactionId,
        chequeImage,
        onlinePaymentImage
    } = req.body;

    // Validate required fields
    if (!partyId || !partyName || !empId || !amount || !paymentMethod) {
        return res.status(400).json(
            new ApiError("Missing required fields", 400, {})
        );
    }

    // Validate payment method specific fields
    if (paymentMethod === 'cheque' && (!chequeNumber || !chequeDate || !bankName || !chequeImage)) {
        return res.status(400).json(
            new ApiError("Missing cheque details or image", 400, {})
        );
    }

    if (paymentMethod === 'online' && (!upiId || !transactionId || !onlinePaymentImage)) {
        return res.status(400).json(
            new ApiError("Missing online payment details or image", 400, {})
        );
    }

    try {
        // Handle image upload
        let imageUrl = '';
        if (paymentMethod === 'cheque' || paymentMethod === 'online') {
            const image = paymentMethod === 'cheque' ? chequeImage : onlinePaymentImage;
            const folderType = paymentMethod === 'cheque' ? 'cheque' : 'onlinePay';
            const dateString = new Date().toISOString().split('T')[0];
            const folderPath = path.join('uploads', 'collections', folderType, empId, `${partyId}_${dateString}`);

            // Create directory if it doesn't exist
            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath, { recursive: true });
            } else {
                // If directory exists, clean it up
                const files = fs.readdirSync(folderPath);
                files.forEach(file => {
                    fs.unlinkSync(path.join(folderPath, file));
                });
            }

            // Save the image
            const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
            const imageBuffer = Buffer.from(base64Data, 'base64');
            const imagePath = path.join(folderPath, 'photo.jpg');
            fs.writeFileSync(imagePath, imageBuffer);
            imageUrl = imagePath;
        }

        // Create collection in database
        const collection = await prisma.collection.create({
            data: {
                partyId,
                partyName,
                empId,
                amount: parseFloat(amount.toString()),
                paymentMethod,
                ...(paymentMethod === 'cheque' && {
                    chequeNumber,
                    chequeDate,
                    bankName,
                    imageUrl
                }),
                ...(paymentMethod === 'online' && {
                    upiId,
                    transactionId,
                    imageUrl
                }),
            }
        });

        return res.status(201).json(
            new ApiResponse(201, "Collection created successfully", collection)
        );
    } catch (error) {
        console.error("Error creating collection:", error);
        return res.status(500).json(
            new ApiError("Failed to create collection", 500, error)
        );
    }
});

export const createCollectionWithMult = asyncHandler(async (req: Request, res: Response) => {

        const { 
            partyId, 
            partyName, 
            empId, 
            amount, 
            paymentMethod,
            chequeNumber,
            chequeDate,
            bankName,
            upiId,
            transactionId,
        } = req.body;   

        console.log(req.body); 

        const file = req.file; 
    if (!partyId || !partyName || !empId || !amount || !paymentMethod) {
        return res.status(400).json(
            new ApiError("Missing required fields", 400, {})
        );
    }
    if (paymentMethod === 'cheque' && (!chequeNumber || !chequeDate || !bankName)) {
        return res.status(400).json(
            new ApiError("Missing cheque details or image", 400, {})
        );
    }

    if (paymentMethod === 'online' && (!upiId || !transactionId)) {
        return res.status(400).json(
            new ApiError("Missing online payment details or image", 400, {})
        );
    }

    const imageUrl = `/${file?.destination}`

    try {


        const collection = await prisma.collection.create({
            data: {
                partyId,
                partyName,
                empId,
                amount: parseFloat(amount.toString()),
                paymentMethod,
                ...(paymentMethod === 'cheque' && {
                    chequeNumber,
                    chequeDate,
                    bankName,
                    imageUrl
                }),
                ...(paymentMethod === 'online' && {
                    upiId,
                    transactionId,
                    imageUrl
                }),
            }
        });

        return res.status(201).json(
            new ApiResponse(201, "Collection created successfully", collection)
        );

    } catch (err) {
        console.error("Error creating collection:", err);
        return res.status(500).json(
            new ApiError("Failed to create collection", 500, err)
        );
    }
})

// fix - collection name should be pulled by party id
export const getCollectionsByEmpId = asyncHandler(async (req: Request, res: Response) => {
    const { empId } = req.params;

    if (!empId) {
        return res.status(400).json(
            new ApiError("Employee ID is required", 400, {})
        );
    }

    let collections = await prisma.collection.findMany({
        where: {
            empId
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return res.status(200).json(
        new ApiResponse(200, "Collections fetched successfully", collections)
    );
});

export const getCollectionsByLocation = asyncHandler(async (req: Request, res: Response) => {
    const { states, depots, employees, paymentMethod, fromDate, toDate } = req.query;

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

    let createdAtFilter: any = {};
    if (fromDate) {
        const from = new Date(fromDate as string);
        from.setHours(0, 0, 0, 0);
        createdAtFilter.gte = from;
    }
    if (toDate) {
        const to = new Date(toDate as string);
        to.setHours(23, 59, 59, 999);
        createdAtFilter.lte = to;
    }

    // Build the where clause for collections
    const whereClause: any = {
        empId: { in: users.map(u => u.username) },
        createdAt: Object.keys(createdAtFilter).length ? createdAtFilter : undefined
    };

    // Add payment method filter if provided
    if (paymentMethod && paymentMethod !== 'all') {
        whereClause.paymentMethod = paymentMethod;
    }

    // Get collections for these users
    const collections = await prisma.collection.findMany({
        where: whereClause,
        orderBy: {
            createdAt: 'desc'
        }, 
    });

    

    return res.status(200).json(
        new ApiResponse(200, "Collections fetched successfully", collections)
    );
});

export const verifyCollection = asyncHandler(async (req: Request, res: Response) => {
    const { collections } = req.body;

    try {

        const dateTime = new Date(Date.now())
        console.log(dateTime)
        console.log(collections)

        const verifiedCollections = await Promise.all(
            collections.map(async (item: { collectionId: string, amount: number }) => {
                await prisma.collection.update({
                    where: {
                        collection_id: item.collectionId
                    }, 
                    data: {
                        amount: item.amount,
                        verified: true,
                        verifiedAt: dateTime
                    }
                })
            })
        )

        return res.status(200).json(new ApiResponse(200, "Collections verified successfully", verifiedCollections)); 

    } catch(err) {
        console.log("verified collections error:", err)
        return res.status(500).json(new ApiError('Internal server error', 500, {}));
    }
})