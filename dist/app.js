var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import cors from 'cors';
import { globalCatch } from './util/globalCatch.js';
import userRouter from './routes/user.router.js';
import orderRouter from "./routes/order.router.js";
import collectionRoutes from "./routes/collection.routes.js";
import partyEditRouter from "./routes/partyEdit.routes.js";
import stockRouter from "./routes/stock.routes.js";
import prisma from './util/prisma.js';
import adminRouter from './routes/admin.router.js';
import attendanceRouter from './routes/attendance.router.js';
import imageRouter from './routes/image.router.js';
const app = express();
app.use(cors({
    origin: '*',
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(globalCatch);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get("/debug", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma.$queryRaw `SELECT @@SPID AS session_id`;
        res.send(result);
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
app.use('/api/v1/user', userRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/collections", collectionRoutes);
app.use("/api/v1/party-edits", partyEditRouter);
app.use("/api/v1/stock", stockRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/attendance', attendanceRouter);
app.use('/api/v1/images', imageRouter);
app.use('/api/v1/images', imageRouter);
export default app;
