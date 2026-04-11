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

export const getMonthlyDistanceReport = asyncHandler(async (req: Request, res: Response) => {
    const { employee, month, year } = req.query;
 
    try {
             console.log(employee)
        // Resolve employee name → empId
        const empRecord = await prisma.mstemp.findFirst({
            where: { lednm: employee as string },
            select: { ledcd: true }
        });

   
 
        if (!empRecord) {
            return res.status(400).json(new ApiError("No employee found with this name", 400));
        }
 
        const empId = empRecord.ledcd;
        const monthNum = parseInt(month as string);   // 1–12
        const yearNum  = parseInt(year as string);
 
        // Build every date string in the month that matches your stored format (DD/MM/YY)
        const daysInMonth = new Date(yearNum, monthNum, 0).getDate(); // last day of month
 
        const allDates: string[] = [];
        for (let d = 1; d <= daysInMonth; d++) {
            const dateObj = new Date(yearNum, monthNum - 1, d);
            // Match the format used in createLocation (en-IN, 2-digit each)
            const formatted = dateObj.toLocaleDateString('en-IN', {
                day:   '2-digit',
                month: '2-digit',
                year:  '2-digit',
            });
            allDates.push(formatted);
        }
 
        // Pull all route records for this employee in this month in one query
        const routes = await prisma.employeeRouteMap.findMany({
            where: {
                empId,
                date: { in: allDates }
            },
            include: { routeArr: true }
        });
 
        // Build a lookup: date string → route record
        const routeByDate = new Map(routes.map(r => [r.date, r]));
 
        // Haversine formula — returns km between two lat/lon points
        function haversine(lat1: number, lon1: number, lat2: number, lon2: number): number {
            const R  = 6371;
            const dLat = ((lat2 - lat1) * Math.PI) / 180;
            const dLon = ((lon2 - lon1) * Math.PI) / 180;
            const a =
                Math.sin(dLat / 2) ** 2 +
                Math.cos((lat1 * Math.PI) / 180) *
                Math.cos((lat2 * Math.PI) / 180) *
                Math.sin(dLon / 2) ** 2;
            return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        }
 
        // For each day compute total distance
        const report = allDates.map(dateStr => {
            const route = routeByDate.get(dateStr);
 
            if (!route || route.routeArr.length < 2) {
                return { date: dateStr, distanceKm: 0 };
            }
 
            let total = 0;
            const points = route.routeArr;
            for (let i = 0; i < points.length - 1; i++) {
                const lat1 = parseFloat(points[i].lat_value);
                const lon1 = parseFloat(points[i].long_value);
                const lat2 = parseFloat(points[i + 1].lat_value);
                const lon2 = parseFloat(points[i + 1].long_value);
                total += haversine(lat1, lon1, lat2, lon2);
            }
 
            return { date: dateStr, distanceKm: parseFloat(total.toFixed(2)) };
        });
 
        return res.status(200).json(new ApiResponse(200, "Fetched monthly distance report", { report, empName: employee }));
 
    } catch (err: any) {
        console.error("Monthly distance report error:", err);
        return res.status(500).json(new ApiError("Failed to fetch monthly distance report", 500));
    }
});
 