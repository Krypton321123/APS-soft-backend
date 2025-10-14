import ApiError from "../util/ApiError.js";
import ApiResponse from "../util/ApiResponse.js";
import asyncHandler from "../util/asyncHandler.js";
import {Request, Response} from 'express'
import crypto from 'crypto'
import redisClient from '../util/redis.js'
const generateRandomOTP = async (start: number, end: number) => {
    const otp = crypto.randomInt(start, end); 
    return otp; 
}

export const sendOTP = asyncHandler(async (req: Request, res: Response) => {
    const { userId } = req.body; 
    
    
})