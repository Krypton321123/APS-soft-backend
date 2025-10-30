import { Router } from 'express';
import { handleCancelOTP } from '../controllers/otp.controller.js';
const otpRouter = Router();
otpRouter.post('/cancel', handleCancelOTP);
export default otpRouter;
