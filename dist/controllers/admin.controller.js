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
export const adminLogin = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        if (!username || !password) {
            return res.status(400).json(new ApiError("No username or password", 400));
        }
        const user = yield prisma.admin.findUnique({
            where: {
                username
            }
        });
        if (!user) {
            return res.status(409).json(new ApiError("User with this username doesn't exist", 409));
        }
        if (user.password !== password) {
            return res.status(409).json(new ApiError("Password not matched", 409));
        }
        return res.status(200).json(new ApiResponse(200, "User logged in successfully", user.username));
    }
    catch (err) {
        return res.status(500).json(new ApiError("Internal server error", 500, {}));
    }
}));
