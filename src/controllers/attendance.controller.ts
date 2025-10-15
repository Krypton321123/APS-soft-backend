import { Request, Response } from 'express';
import prisma from '../util/prisma.js';
import ApiResponse from '../util/ApiResponse.js';
import asyncHandler from '../util/asyncHandler.js';
import { format } from 'path';

// Get distinct depot names
export const getDepots = async (req: Request, res: Response) => {
    try {
        const depots = await prisma.user.findMany({
            distinct: ['untnm'],
            select: {
                untnm: true
            },
            where: {
                untnm: { not: '' }
            }
        });
        const depotNames = depots.map((d: { untnm: string }) => d.untnm);
        return res.status(200).json(new ApiResponse(200, "Success", depotNames));
    } catch (error: any) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return res.status(500).json(new ApiResponse(500, message, null));
    }
};


export const getAttendance = async (req: Request, res: Response) => {
    const { depot, month, year } = req.query;
    
    // Validate input
    if (!depot || !month || !year) {
        return res.status(400).json(new ApiResponse(400, 'Missing depot, month or year parameters', null));
    }
    
    try {
        // Convert month name to number (0-11)
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                           'July', 'August', 'September', 'October', 'November', 'December'];
        const monthIndex = monthNames.indexOf(month as string);
        if (monthIndex === -1) {
            return res.status(400).json(new ApiResponse(400, 'Invalid month name', null));
        }
        
        const yearNum = parseInt(year as string);
        const startDate = new Date(yearNum, monthIndex, 1);
        const endDate = new Date(yearNum, monthIndex + 1, 0);
        
        // Get users in selected depot
        const users = await prisma.user.findMany({
            where: { untnm: depot as string },
            select: { username: true, usrnm: true }
        });
        
        if (users.length === 0) {
            return res.status(200).json(new ApiResponse(200, "Success", []));
        }
        
        const userIds = users.map((u: { username: string }) => u.username);

        // Get attendance records
        const attendanceRecords = await prisma.attendance.findMany({
            where: {
                userId: { in: userIds },
                date: {
                    gte: `${yearNum}-${String(monthIndex + 1).padStart(2, '0')}-01`,
                    lte: `${yearNum}-${String(monthIndex + 1).padStart(2, '0')}-${String(endDate.getDate()).padStart(2, '0')}`
                }
            }
        });


        const userAttendance: Record<string, Record<string, string>> = {};
        attendanceRecords.forEach((record: any) => {
            const dateStr = record.date;
            const formattedUserId = record.userId.toUpperCase().trim()
            if (!userAttendance[formattedUserId]) {
                userAttendance[formattedUserId] = {};
            }
            
            userAttendance[formattedUserId][dateStr] = record.status;
            console.log(userAttendance[formattedUserId], formattedUserId); 
        });

        console.log(userAttendance)

        
        // Prepare response
        const daysInMonth = endDate.getDate();
        const response = users.map((user: { username: string; usrnm: string }) => {
            const statuses = [];
            user.username = user.username.toUpperCase()
            for (let day = 1; day <= daysInMonth; day++) {
                const date = new Date(yearNum, monthIndex, day);
               
                const dateKey = date.toLocaleDateString('en-CA');
           
                statuses.push(userAttendance[user.username]?.[dateKey] || 'A');
            }
            
            const presentCount = statuses.filter(s => s === 'present' || s === 'H').length;
            const absentCount = daysInMonth - presentCount;
            
            return {
                employee: user.usrnm,
                statuses,
                totalPresent: presentCount,
                totalDays: daysInMonth,
                netAbsent: absentCount
            };
        });

        
        return res.status(200).json(new ApiResponse(200, "Success", response));
    } catch (error: any) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return res.status(500).json(new ApiResponse(500, message, null));
    }
};

export const getAttendanceStatus = asyncHandler(async (req: Request, res: Response) => {
    console.log("came here")
    const { userId, date } = req.body; 

    console.log(userId, date)

    const checkAttendance = await prisma.attendance.findFirst({
        where: {
            date, userId
        }
    })

    console.log(checkAttendance)

    if (checkAttendance?.status === "absent") {
        return res.status(200).json(new ApiResponse(200, "You already logged out", {status: false}))
    } else if (checkAttendance?.status === "present") {
        return res.status(201).json(new ApiResponse(201, "Go to BEAT", {status: true}))
    } else {
        return res.status(202).json(new ApiResponse(202, "No attendance found", {}))
    }
})
