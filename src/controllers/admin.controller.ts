import asyncHandler from "../util/asyncHandler.js";
import ApiError from "../util/ApiError.js";
import prisma from "../util/prisma.js";
import ApiResponse from "../util/ApiResponse.js";
import { Request, Response } from "express";


export const adminLogin = asyncHandler(async (req: Request, res: Response) => {
    const { username, password } = req.body; 

    try {

        if (!username || !password) {
            return res.status(400).json(new ApiError("No username or password", 400)); 
        }

        const user = await prisma.admin.findUnique({
            where: {
                username
            }
        })

        if (!user) {
            return res.status(409).json(new ApiError("User with this username doesn't exist", 409)); 
        }

        if (user.password !== password) {
            return res.status(409).json(new ApiError("Password not matched", 409)); 
        }

    
        return res.status(200).json(new ApiResponse(200, "User logged in successfully", user.username))

    } catch (err) {
        return res.status(500).json(new ApiError("Internal server error", 500, {}))
    }
})