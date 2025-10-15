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
const saveDelivery = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
