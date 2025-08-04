import { NextFunction, Request, Response, RequestHandler } from "express";

const asyncHandler = (requestHandler: RequestHandler) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        await Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}
export default asyncHandler; 