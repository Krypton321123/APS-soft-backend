var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ApiResponse from '../util/ApiResponse.js';
import ApiError from '../util/ApiError.js';
import asyncHandler from '../util/asyncHandler.js';
import prisma from '../util/prisma.js';
export const createLocation = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { empId, date, location } = req.body;
    try {
        console.log(empId, date);
        const alreadyExists = yield prisma.employeeRouteMap.findUnique({
            where: {
                empId_date: { empId, date }
            }
        });
        // if it doesn't already exist then: 
        if (!alreadyExists) {
            const empName = yield prisma.mstemp.findFirst({
                where: {
                    ledcd: empId
                },
                select: {
                    lednm: true
                }
            });
            if (!empName || empName === null) {
                return res.status(400).json(new ApiError("no emp found by this ID", 400));
            }
            const newRouteMap = yield prisma.employeeRouteMap.create({
                data: {
                    empId, date, empName: (empName === null || empName === void 0 ? void 0 : empName.lednm) || ""
                }
            });
            yield prisma.latLongitudeValues.create({
                data: {
                    lat_value: location.latitude.toString(), long_value: location.longitude.toString(), route_id: newRouteMap.route_id
                }
            });
            return res.status(200).json(new ApiResponse(200, "Created new route map", { newRouteMap }));
        }
        // if route map already exists then: 
        yield prisma.latLongitudeValues.create({
            data: {
                lat_value: location.latitude.toString(), long_value: location.longitude.toString(), route_id: alreadyExists.route_id
            }
        });
        return res.status(200).json(new ApiResponse(200, "Added new location point", { alreadyExists }));
    }
    catch (err) {
        return res.status(500).json(new ApiError("Create Location error", 500, {}));
    }
}));
