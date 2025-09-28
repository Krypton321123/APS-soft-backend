import ApiResponse from '../util/ApiResponse.js'
import ApiError from '../util/ApiError.js'; 
import asyncHandler from '../util/asyncHandler.js'
import { Request, Response } from 'express';
import prisma from '../util/prisma.js';

export const createLocation = asyncHandler(async (req: Request, res: Response ) => {
    const { empId, date, location } = req.body; 

    try {

        console.log(empId, date)

        const alreadyExists = await prisma.employeeRouteMap.findUnique({
            where: {
                empId_date: {empId, date} 
            }
        })
        // if it doesn't already exist then: 
        if (!alreadyExists) {
            const empName = await prisma.mstemp.findFirst({
                where: {
                    ledcd: empId
                }, 
                select: {
                    lednm: true
                }
            })

            if (!empName || empName === null) {
                return res.status(400).json(new ApiError("no emp found by this ID", 400))
            }

            const newRouteMap = await prisma.employeeRouteMap.create({
                data: {
                    empId, date, empName: empName?.lednm || "" 
                }
            })

            await prisma.latLongitudeValues.create({
                data: {
                    lat_value: location.latitude.toString(), long_value: location.longitude.toString(), route_id: newRouteMap.route_id
                }
            })

            return res.status(200).json(new ApiResponse(200, "Created new route map", {newRouteMap}))

        }

        // if route map already exists then: 
        await prisma.latLongitudeValues.create({
            data: {
                lat_value: location.latitude.toString(), long_value: location.longitude.toString(), route_id: alreadyExists.route_id
            }
        })

        return res.status(200).json(new ApiResponse(200, "Added new location point", {alreadyExists}))

    } catch (err: any) {
        return res.status(500).json(new ApiError("Create Location error", 500, {}))
    }
})