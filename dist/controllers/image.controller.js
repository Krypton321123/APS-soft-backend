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
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import asyncHandler from '../util/asyncHandler.js';
import ApiResponse from '../util/ApiResponse.js';
import ip from 'ip';
const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);
export const getDepots = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const depots = yield prisma.user.findMany({
            select: { untnm: true },
            distinct: ['untnm']
        });
        res.json(depots.map((d) => d.untnm).filter(Boolean));
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch depots' });
    }
});
export const getEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { depot } = req.query;
    if (!depot)
        return res.status(400).json({ error: 'Depot parameter required' });
    try {
        const employees = yield prisma.user.findMany({
            where: { untnm: depot },
            select: { usrnm: true }
        });
        res.json(employees.map((e) => e.usrnm).filter(Boolean));
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch employees' });
    }
});
export const searchImages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { depot, employee, startDate, endDate } = req.query;
    try {
        const user = yield prisma.user.findFirst({
            where: {
                untnm: depot,
                usrnm: employee
            },
            select: { username: true }
        });
        if (!user)
            return res.json([]);
        const images = yield prisma.partyImages.findMany({
            where: {
                userId: user.username,
                createdAt: {
                    gte: startDate ? new Date(startDate) : undefined,
                    lte: endDate ? new Date(endDate) : undefined
                }
            },
            select: {
                profileImageUrl: true,
            }
        });
        const convertToBase64 = (relativePath) => {
            console.log(__dirname);
            if (!relativePath)
                return null;
            const fullPath = path.join(__dirname, '..', '..', relativePath);
            console.log(fullPath);
            if (fs.existsSync(fullPath)) {
                const imageBuffer = fs.readFileSync(fullPath);
                return `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;
            }
            return null;
        };
        const allImages = images.map(img => {
            return convertToBase64(img.profileImageUrl);
        });
        res.json(allImages);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to search images' });
    }
});
export const getImages = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { depot, employee, startDate, endDate } = req.query;
    let ipAdd = ip.address();
    if (process.env.PRODUCTION_MODE === "prod")
        ipAdd = "157.15.93.224";
    const user = yield prisma.user.findFirst({
        where: {
            untnm: depot,
            usrnm: employee
        },
        select: { username: true }
    });
    if (!user)
        return res.json([]);
    const images = yield prisma.partyImages.findMany({
        where: {
            userId: user.username,
            createdAt: {
                gte: startDate ? new Date(startDate) : undefined,
                lte: endDate ? new Date(endDate) : undefined
            }
        },
        select: {
            profileImageUrl: true,
            createdAt: true,
            partyId: true
        }
    });
    const sendData = yield Promise.all(images.map((item, index) => __awaiter(void 0, void 0, void 0, function* () {
        const startDate = new Date(item.createdAt);
        startDate.setUTCHours(0, 0, 0, 0);
        const endDate = new Date(startDate);
        endDate.setUTCHours(23, 59, 59, 999);
        const order = yield prisma.order.findFirst({
            where: {
                AND: [
                    { createdAt: { gte: startDate } },
                    { createdAt: { lte: endDate } }
                ],
                empId: user.username,
                partyId: item.partyId
            },
            select: {
                orderItems: true
            }
        });
        const collection = yield prisma.collection.findFirst({
            where: {
                AND: [
                    { createdAt: { gte: startDate } },
                    { createdAt: { lte: endDate } }
                ],
                empId: user.username,
                partyId: item.partyId
            },
            select: {
                amount: true
            }
        });
        const party = yield prisma.mstparty.findFirst({
            where: {
                ledcd: item.partyId
            },
            select: {
                lednm: true
            }
        });
        const orderQuantity = order === null || order === void 0 ? void 0 : order.orderItems.map((item) => item.quantity).reduce((acc, curr) => acc + curr, 0);
        const imageString = `http://${ipAdd}:${process.env.PORT}${item.profileImageUrl.split('uploads')[1]}`;
        return Object.assign(Object.assign({}, item), { partyName: party === null || party === void 0 ? void 0 : party.lednm, profileImageUrl: imageString, orderQuantity: orderQuantity || 0, collectionAmount: (collection === null || collection === void 0 ? void 0 : collection.amount) || 0 });
    })));
    return res.status(200).json(new ApiResponse(200, "fetched", sendData));
}));
