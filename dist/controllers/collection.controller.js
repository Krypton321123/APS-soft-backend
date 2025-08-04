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
import prisma from "../util/prisma.js";
import ApiResponse from "../util/ApiResponse.js";
import fs from 'fs';
import path from 'path';
export const createCollection = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { partyId, partyName, empId, amount, paymentMethod, chequeNumber, chequeDate, bankName, upiId, transactionId, chequeImage, onlinePaymentImage } = req.body;
    // Validate required fields
    if (!partyId || !partyName || !empId || !amount || !paymentMethod) {
        return res.status(400).json(new ApiError("Missing required fields", 400, {}));
    }
    // Validate payment method specific fields
    if (paymentMethod === 'cheque' && (!chequeNumber || !chequeDate || !bankName || !chequeImage)) {
        return res.status(400).json(new ApiError("Missing cheque details or image", 400, {}));
    }
    if (paymentMethod === 'online' && (!upiId || !transactionId || !onlinePaymentImage)) {
        return res.status(400).json(new ApiError("Missing online payment details or image", 400, {}));
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
            }
            else {
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
        const collection = yield prisma.collection.create({
            data: Object.assign(Object.assign({ partyId,
                partyName,
                empId, amount: parseFloat(amount.toString()), paymentMethod }, (paymentMethod === 'cheque' && {
                chequeNumber,
                chequeDate,
                bankName,
                imageUrl
            })), (paymentMethod === 'online' && {
                upiId,
                transactionId,
                imageUrl
            }))
        });
        return res.status(201).json(new ApiResponse(201, "Collection created successfully", collection));
    }
    catch (error) {
        console.error("Error creating collection:", error);
        return res.status(500).json(new ApiError("Failed to create collection", 500, error));
    }
}));
// fix - collection name should be pulled by party id
export const getCollectionsByEmpId = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { empId } = req.params;
    if (!empId) {
        return res.status(400).json(new ApiError("Employee ID is required", 400, {}));
    }
    let collections = yield prisma.collection.findMany({
        where: {
            empId
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    return res.status(200).json(new ApiResponse(200, "Collections fetched successfully", collections));
}));
export const getCollectionsByLocation = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { states, depots, employees, paymentMethod, fromDate, toDate } = req.query;
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
    let createdAtFilter = {};
    if (fromDate) {
        const from = new Date(fromDate);
        from.setHours(0, 0, 0, 0);
        createdAtFilter.gte = from;
    }
    if (toDate) {
        const to = new Date(toDate);
        to.setHours(23, 59, 59, 999);
        createdAtFilter.lte = to;
    }
    // Build the where clause for collections
    const whereClause = {
        empId: { in: users.map(u => u.username) },
        createdAt: Object.keys(createdAtFilter).length ? createdAtFilter : undefined
    };
    // Add payment method filter if provided
    if (paymentMethod && paymentMethod !== 'all') {
        whereClause.paymentMethod = paymentMethod;
    }
    // Get collections for these users
    const collections = yield prisma.collection.findMany({
        where: whereClause,
        orderBy: {
            createdAt: 'desc'
        },
    });
    return res.status(200).json(new ApiResponse(200, "Collections fetched successfully", collections));
}));
export const verifyCollection = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { collections } = req.body;
    try {
        const dateTime = new Date(Date.now());
        console.log(dateTime);
        console.log(collections);
        const verifiedCollections = yield Promise.all(collections.map((item) => __awaiter(void 0, void 0, void 0, function* () {
            yield prisma.collection.update({
                where: {
                    collection_id: item.collectionId
                },
                data: {
                    amount: item.amount,
                    verified: true,
                    verifiedAt: dateTime
                }
            });
        })));
        return res.status(200).json(new ApiResponse(200, "Collections verified successfully", verifiedCollections));
    }
    catch (err) {
        console.log("verified collections error:", err);
        return res.status(500).json(new ApiError('Internal server error', 500, {}));
    }
}));
