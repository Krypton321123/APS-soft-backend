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
export const getLocationData = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { depot, employee } = req.query;
    let { date } = req.query;
    date = new Date(date).toLocaleDateString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
    });
    console.log(date, employee);
    try {
        const empId = yield prisma.mstemp.findFirst({
            where: {
                lednm: employee
            },
            select: {
                ledcd: true
            }
        });
        const locationData = yield prisma.employeeRouteMap.findFirst({
            where: {
                empId: empId === null || empId === void 0 ? void 0 : empId.ledcd, date: date
            },
            include: {
                routeArr: true
            }
        });
        const coordinates = locationData === null || locationData === void 0 ? void 0 : locationData.routeArr.map((item) => {
            return [Number(item.lat_value), Number(item.long_value)];
        });
        return res.status(200).json(new ApiResponse(200, "Fetched successfully", { coordinates }));
    }
    catch (err) {
        console.log("fetching location error: ", err);
        return res.status(500).json(new ApiError("Failed to fetch locations", 500));
    }
}));
