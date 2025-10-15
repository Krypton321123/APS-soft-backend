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
import asyncHandler from '../util/asyncHandler.js';
// Get distinct depot names
export const getDepots = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const depots = yield prisma.user.findMany({
            distinct: ['untnm'],
            select: {
                untnm: true
            },
            where: {
                untnm: { not: '' }
            }
        });
        const depotNames = depots.map((d) => d.untnm);
        return res.status(200).json(new ApiResponse(200, "Success", depotNames));
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return res.status(500).json(new ApiResponse(500, message, null));
    }
});
export const getAttendance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { depot, month, year } = req.query;
    // Validate input
    if (!depot || !month || !year) {
        return res.status(400).json(new ApiResponse(400, 'Missing depot, month or year parameters', null));
    }
    try {
        // Convert month name to number (0-11)
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        const monthIndex = monthNames.indexOf(month);
        if (monthIndex === -1) {
            return res.status(400).json(new ApiResponse(400, 'Invalid month name', null));
        }
        const yearNum = parseInt(year);
        const startDate = new Date(yearNum, monthIndex, 1);
        const endDate = new Date(yearNum, monthIndex + 1, 0);
        // Get users in selected depot
        const users = yield prisma.user.findMany({
            where: { untnm: depot },
            select: { username: true, usrnm: true }
        });
        if (users.length === 0) {
            return res.status(200).json(new ApiResponse(200, "Success", []));
        }
        const userIds = users.map((u) => u.username);
        // Get attendance records
        const attendanceRecords = yield prisma.attendance.findMany({
            where: {
                userId: { in: userIds },
                date: {
                    gte: `${yearNum}-${String(monthIndex + 1).padStart(2, '0')}-01`,
                    lte: `${yearNum}-${String(monthIndex + 1).padStart(2, '0')}-${String(endDate.getDate()).padStart(2, '0')}`
                }
            }
        });
        const userAttendance = {};
        attendanceRecords.forEach((record) => {
            const dateStr = record.date;
            const formattedUserId = record.userId.toUpperCase().trim();
            if (!userAttendance[formattedUserId]) {
                userAttendance[formattedUserId] = {};
            }
            userAttendance[formattedUserId][dateStr] = record.status;
            console.log(userAttendance[formattedUserId], formattedUserId);
        });
        console.log(userAttendance);
        // Prepare response
        const daysInMonth = endDate.getDate();
        const response = users.map((user) => {
            var _a;
            const statuses = [];
            user.username = user.username.toUpperCase();
            for (let day = 1; day <= daysInMonth; day++) {
                const date = new Date(yearNum, monthIndex, day);
                const dateKey = date.toLocaleDateString('en-CA');
                statuses.push(((_a = userAttendance[user.username]) === null || _a === void 0 ? void 0 : _a[dateKey]) || '-');
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
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return res.status(500).json(new ApiResponse(500, message, null));
    }
});
export const getAttendanceStatus = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("came here");
    const { userId, date } = req.body;
    console.log(userId, date);
    const checkAttendance = yield prisma.attendance.findFirst({
        where: {
            date, userId
        }
    });
    console.log(checkAttendance);
    if ((checkAttendance === null || checkAttendance === void 0 ? void 0 : checkAttendance.status) === "absent") {
        return res.status(200).json(new ApiResponse(200, "You already logged out", { status: false }));
    }
    else if ((checkAttendance === null || checkAttendance === void 0 ? void 0 : checkAttendance.status) === "present") {
        return res.status(201).json(new ApiResponse(201, "Go to BEAT", { status: true }));
    }
    else {
        return res.status(202).json(new ApiResponse(202, "No attendance found", {}));
    }
}));
