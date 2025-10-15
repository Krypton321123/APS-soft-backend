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

export const getLocationData = asyncHandler(async (req: Request, res: Response) => {

    const { depot, employee } = req.query;
    let { date } = req.query; 

    date = new Date(date as string).toLocaleDateString('en-IN', {
        day: '2-digit', 
        month: '2-digit', 
        year: '2-digit'
    })

    console.log(date, employee); 
    
    try {

        const empId = await prisma.mstemp.findFirst({
            where: {
                lednm: employee as string 
            }, 
            select: {
                ledcd: true
            }
        })

        const locationData = await prisma.employeeRouteMap.findFirst({
            where: {
                empId: empId?.ledcd, date: date as string 
            }, 
            include: {
                routeArr: true
            }
        })

        const coordinates = locationData?.routeArr.map((item) => {
            return [Number(item.lat_value), Number(item.long_value)]; 
        })

        return res.status(200).json(new ApiResponse(200, "Fetched successfully", {coordinates}))


    } catch (err: any) {
        console.log("fetching location error: ", err); 
        return res.status(500).json(new ApiError("Failed to fetch locations", 500))
    }

})