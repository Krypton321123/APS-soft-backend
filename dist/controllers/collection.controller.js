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
import crypto from 'crypto';
import { sendOTP } from "./otp.controller.js";
import redisClient from "../util/redis.js";
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
const partyRateLimit = (partyId, mode, amount, props) => __awaiter(void 0, void 0, void 0, function* () {
    const partyCollectionLatest = yield prisma.collection.findFirst({
        where: {
            partyId
        },
        orderBy: {
            createdAt: 'desc'
        },
    });
    console.log(amount, mode);
    if ((partyCollectionLatest === null || partyCollectionLatest === void 0 ? void 0 : partyCollectionLatest.createdAt.getDate()) !== new Date().getDate()) {
        return false;
    }
    if (partyCollectionLatest.paymentMethod !== mode) {
        return false;
    }
    console.log(Number(amount) === Number(partyCollectionLatest.amount));
    if (mode === "cash")
        return Number(amount) === Number(partyCollectionLatest.amount) ? false : true;
    if (mode === "cheque")
        return props.chequeNumber === partyCollectionLatest.chequeNumber ? false : true;
    if (mode === "online")
        return props.transactionId === partyCollectionLatest.transactionId ? false : true;
});
export const generateOtpForColl = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { userId, partyId, amount, mode, props } = req.body;
    console.log(mode, amount);
    try {
        const partyLimit = yield partyRateLimit(partyId, mode, amount, props);
        if (!partyLimit) {
            return res.status(201).json(new ApiResponse(201, "Already uploaded today's payment for this party", {}));
        }
        const otp = crypto.randomInt(100000, 999999).toString();
        const party = yield prisma.mstparty.findFirst({
            where: {
                ledcd: partyId
            },
            select: {
                mobile: true, lednm: true
            }
        });
        console.log(party);
        if (!(party === null || party === void 0 ? void 0 : party.mobile)) {
            return res.status(202).json(new ApiResponse(202, "Number not found", {}));
        }
        const finalMessage = `Dear ${(_a = party === null || party === void 0 ? void 0 : party.lednm) === null || _a === void 0 ? void 0 : _a.slice(0, 30)}%0A${otp} is OTP for your payment verification of INR ${amount}.%0A Please share it to our executive.%0ARegards%0AMAHESH OILS%0ASAAVLI BRAND`;
        console.log(finalMessage, party === null || party === void 0 ? void 0 : party.mobile, otp, userId);
        const sendOtp = yield sendOTP({ mobileNumber: party === null || party === void 0 ? void 0 : party.mobile, message: finalMessage, otp, userId, templateId: '1007234171777516053' });
        if ((sendOtp === null || sendOtp === void 0 ? void 0 : sendOtp.status) === 'success') {
            return res.status(200).json(new ApiResponse(200, "OTP generated successfully", {}));
        }
        else {
            return res.status(400).json(new ApiError("unable to generate otp", 400));
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(new ApiError("Internal server error", 500));
    }
}));
export const createCollectionWithMult = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { partyId, partyName, empId, amount, paymentMethod, chequeNumber, chequeDate, bankName, transactionId, otp } = req.body;
    console.log(req.body);
    const file = req.file;
    if (!partyId || !partyName || !empId || !amount || !paymentMethod || !otp) {
        return res.status(400).json(new ApiError("Missing required fields", 400, {}));
    }
    if (paymentMethod === 'cheque' && (!chequeNumber || !chequeDate || !bankName)) {
        return res.status(400).json(new ApiError("Missing cheque details or image", 400, {}));
    }
    if (paymentMethod === 'online' && (!transactionId)) {
        return res.status(400).json(new ApiError("Missing online payment details or image", 400, {}));
    }
    const cachedOtp = yield redisClient.get(`${empId}`);
    if (!cachedOtp) {
        return res.status(400).json(new ApiError("otp expired", 400));
    }
    if (otp !== cachedOtp) {
        return res.status(409).json(new ApiError('Otps not matched', 409));
    }
    const imageUrl = `${file === null || file === void 0 ? void 0 : file.destination.toString()}/${file === null || file === void 0 ? void 0 : file.filename}`;
    try {
        const collection = yield prisma.collection.create({
            data: Object.assign(Object.assign({ partyId,
                partyName,
                empId, amount: parseFloat(amount.toString()), paymentMethod,
                otp }, (paymentMethod === 'cheque' && {
                chequeNumber,
                chequeDate,
                bankName,
                imageUrl
            })), (paymentMethod === 'online' && {
                transactionId,
                imageUrl
            }))
        });
        const party = yield prisma.mstparty.findFirst({
            where: {
                ledcd: partyId
            }, select: {
                mobile: true, lednm: true
            }
        });
        const finalMessage = `Dear ${(_a = party === null || party === void 0 ? void 0 : party.lednm) === null || _a === void 0 ? void 0 : _a.slice(0, 30)},%0AThis message confirms that your payment of INR ${amount} has been successfully received.%0A%0ABest Regards%0AMAHESH OIL%0A%0ASAAVLI BRAND`;
        const status = yield sendOTP({ mobileNumber: party === null || party === void 0 ? void 0 : party.mobile, message: finalMessage, otp: '', userId: empId, templateId: '1007966747127410178' });
        return res.status(201).json(new ApiResponse(201, "Collection created successfully", collection));
    }
    catch (err) {
        console.error("Error creating collection:", err);
        return res.status(500).json(new ApiError("Failed to create collection", 500, err));
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
    const updatedCollections = yield Promise.all(collections.map((item) => __awaiter(void 0, void 0, void 0, function* () {
        let empName = "Unknown";
        const employee = yield prisma.user.findFirst({
            where: { username: item.empId },
            select: { usrnm: true }
        });
        empName = (employee === null || employee === void 0 ? void 0 : employee.usrnm) || "Unknown";
        return Object.assign(Object.assign({}, item), { empName });
    })));
    return res.status(200).json(new ApiResponse(200, "Collections fetched successfully", updatedCollections));
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
