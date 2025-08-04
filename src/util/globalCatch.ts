import { NextFunction, Request, Response } from "express";
import ApiError from "./ApiError.js";

export const globalCatch = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log("err: ", err); 

    const statusCode = err.statusCode || 500; 
    const message = err.message || "Something went wrong"; 

    return res.status(statusCode).json(new ApiError(message, statusCode, {}, err.stack, err.errors))

}