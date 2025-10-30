import { Request, Response } from 'express';
import prisma from '../util/prisma.js';
import ApiResponse from '../util/ApiResponse.js';
import ApiError from '../util/ApiError.js';
import asyncHandler from '../util/asyncHandler.js';
import crypto from 'crypto'
import { sendOTP } from './otp.controller.js';
import redisClient from '../util/redis.js';


export const getDeliveryData = asyncHandler(async (req: Request, res: Response) => {

    const { billNo } = req.body; 

    const bill = await prisma.partybills.findUnique({
        where: {
            billno: billNo
        }
    })

    if (!bill) {
        return res.status(400).json(new ApiError("Bill does not exist", 400))
    }

    return res.status(200).json(new ApiResponse(200, "Bill found", bill))

})

export const saveDelivery = asyncHandler(async (req: Request, res: Response) => {

    const { otp, billNo, cash, userId } = req.body; 

    try {  

        if (!otp || !billNo) {
            return res.status(400).json(new ApiError("invalid data", 400)); 
        }

        const otpInCache = await redisClient.get(`${userId}`); 
        console.log(otpInCache)

        if (!otpInCache) {
            return res.status(404).json(new ApiError('otp expired', 404)); 
        }

        if (otpInCache !== otp) {
            return res.status(409).json(new ApiError('Otps not matched', 409))
        }

        const delivery = await prisma.deliveryBillStatus.create({
            data: {
                userId, otp, cash: cash || '0', billNo
            }
        })

        return res.status(200).json(new ApiResponse(200, "Delivery saved successfully", delivery)); 

    } catch (err: any) {
        return res.status(500).json(new ApiError("Internal server error", 500))
    }

})

export const generateOtp = asyncHandler(async (req: Request, res: Response) => {

    const { userId, billNo, partyName, mobileNumber } = req.body; 

    try {
        const otp = crypto.randomInt(100000, 999999).toString()
        const messageToSend = `Dear ${partyName.toString().slice(0, 30)}%0A${otp} is OTP to confirm your delivery with tax invoice no. ${billNo}.%0A%0ABest Regards%0A MAHESH OIL%0ASAAVLI BRAND`

        const sendOtp = await sendOTP({mobileNumber, message: messageToSend, otp, userId, templateId: '1007813239101402997'})

        if (sendOtp?.status === 'success') {
            return res.status(200).json(new ApiResponse(200, "OTP Sent successfully", {})); 
        } else {
            return res.status(403).json(new ApiError("There was some error in generating OTP", 403)); 
        }

    } catch (err: any) {

        return res.status(500).json(new ApiError("Internal server error", 500))

    }

})