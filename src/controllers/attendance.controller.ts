import { Request, Response } from 'express';
import prisma from '../util/prisma.js';
import ApiResponse from '../util/ApiResponse.js';

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
                date: { gte: startDate, lte: endDate }
            }
        });
        
        // Group records by user and date
        const userAttendance: Record<string, Record<string, string>> = {};
        attendanceRecords.forEach((record: any) => {
            const dateStr = record.date.toISOString().split('T')[0];
            if (!userAttendance[record.userId]) {
                userAttendance[record.userId] = {};
            }
            userAttendance[record.userId][dateStr] = record.status;
        });
        
        // Prepare response
        const daysInMonth = endDate.getDate();
        const response = users.map((user: { username: string; usrnm: string }) => {
            const statuses = [];
            for (let day = 1; day <= daysInMonth; day++) {
                const date = new Date(yearNum, monthIndex, day);
                const dateKey = date.toISOString().split('T')[0];
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