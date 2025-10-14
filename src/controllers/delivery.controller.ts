import { Request, Response } from 'express';
import prisma from '../util/prisma.js';
import ApiResponse from '../util/ApiResponse.js';
import ApiError from '../util/ApiError.js';
import asyncHandler from '../util/asyncHandler.js';


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

const saveDelivery = asyncHandler(async (req: Request, res: Response) => {

    

})