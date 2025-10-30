var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import prisma from '../util/prisma.js';
import ApiResponse from '../util/ApiResponse.js';
import ApiError from '../util/ApiError.js';
import asyncHandler from '../util/asyncHandler.js';
import crypto from 'crypto';
import { sendOTP } from './otp.controller.js';
import redisClient from '../util/redis.js';
export const getDeliveryData = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { billNo } = req.body;
    const bill = yield prisma.partybills.findUnique({
        where: {
            billno: billNo
        }
    });
    if (!bill) {
        return res.status(400).json(new ApiError("Bill does not exist", 400));
    }
    return res.status(200).json(new ApiResponse(200, "Bill found", bill));
}));
export const saveDelivery = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { otp, billNo, cash, userId } = req.body;
    try {
        if (!otp || !billNo) {
            return res.status(400).json(new ApiError("invalid data", 400));
        }
        const otpInCache = yield redisClient.get(`${userId}`);
        console.log(otpInCache);
        if (!otpInCache) {
            return res.status(404).json(new ApiError('otp expired', 404));
        }
        if (otpInCache !== otp) {
            return res.status(409).json(new ApiError('Otps not matched', 409));
        }
        const delivery = yield prisma.deliveryBillStatus.create({
            data: {
                userId, otp, cash: cash || '0', billNo
            }
        });
        return res.status(200).json(new ApiResponse(200, "Delivery saved successfully", delivery));
    }
    catch (err) {
        return res.status(500).json(new ApiError("Internal server error", 500));
    }
}));
export const generateOtp = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, billNo, partyName, mobileNumber } = req.body;
    try {
        const otp = crypto.randomInt(100000, 999999).toString();
        const messageToSend = `Dear ${partyName.toString().slice(0, 30)}%0A${otp} is OTP to confirm your delivery with tax invoice no. ${billNo}.%0A%0ABest Regards%0A MAHESH OIL%0ASAAVLI BRAND`;
        const sendOtp = yield sendOTP({ mobileNumber, message: messageToSend, otp, userId, templateId: '1007813239101402997' });
        if ((sendOtp === null || sendOtp === void 0 ? void 0 : sendOtp.status) === 'success') {
            return res.status(200).json(new ApiResponse(200, "OTP Sent successfully", {}));
        }
        else {
            return res.status(403).json(new ApiError("There was some error in generating OTP", 403));
        }
    }
    catch (err) {
        return res.status(500).json(new ApiError("Internal server error", 500));
    }
}));
