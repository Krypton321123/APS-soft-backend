import express, { Request, Response } from 'express'
import cors from 'cors'
import { globalCatch } from './util/globalCatch.js'
import userRouter from './routes/user.router.js'
import orderRouter from "./routes/order.router.js";
import collectionRoutes from "./routes/collection.routes.js";
import partyEditRouter from "./routes/partyEdit.routes.js";
import stockRouter from "./routes/stock.routes.js";
import prisma from './util/prisma.js';
import adminRouter from './routes/admin.router.js';
import attendanceRouter from './routes/attendance.router.js';
import imageRouter from './routes/image.router.js';
import path from 'path'
import locationRouter from './routes/location.router.js';
import otpRouter from './routes/otp.router.js';
import deliveryRouter from './routes/delivery.router.js';
import asyncHandler from './util/asyncHandler.js';
import ApiResponse from './util/ApiResponse.js';
import ApiError from './util/ApiError.js';
import router from './routes/secondaryRate.router.js';

const app = express()

app.use(cors({
  origin: '*', 
}))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))
app.use(express.static('../uploads'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/debug", async (_, res) => {
  try {
    const result = await prisma.$queryRaw`SELECT @@SPID AS session_id`;
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

export const getAppConfig = asyncHandler(async (req: Request, res: Response) => {
  try {
    const config = await prisma.appConfig.findFirst();
    return res.status(200).json(new ApiResponse(200, "Fetched successfully", {
      minAndroidVersion: config?.minAndroidVersion ?? 1,
    }));
  } catch (err) {
    return res.status(500).json(new ApiError("Internal server error", 500));
  }
});

app.get("/api/v1/app/config", getAppConfig);



app.use('/api/v1/user', userRouter); 
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/collections", collectionRoutes);
app.use("/api/v1/party-edits", partyEditRouter);
app.use("/api/v1/stock", stockRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/attendance', attendanceRouter);
app.use('/api/v1/images', imageRouter);
app.use('/api/v1/location', locationRouter); 
app.use('/api/v1/delivery', deliveryRouter); 
app.use('/api/v1/otp', otpRouter); 
app.use("/api/v1/secondary-rates", router);

app.use(globalCatch)

export default app;