var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ApiError from "../util/ApiError.js";
import ApiResponse from "../util/ApiResponse.js";
import asyncHandler from "../util/asyncHandler.js";
import redisClient from '../util/redis.js';
import axios from 'axios';
// intiate_payment_otp (collection)
// Dear [Customer]
// Your payment verification code is [123456]. Please Share this Code with Sales Executive of SAAVLI Brand to complete your $[Amount] transaction.
// Regards
// SAAVLI FAMILY
// Mahesh Edible Oil Products PVT LTD
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// amount_received (collection)
// Dear [Customer Name],
// This message confirms that your payment of [Amount Paid] has been successfully received. 
// Thank you for your prompt payment.
// Best Regards 
// Mahesh Edible Oil Products PVT LTD
// ---------------------------------------------------------------------------------------------------------------
// order_delivery_otp (delivert)
// Dear [partyName],  
// [OTP] : Use this OTP to confirm your delivery with bill number [BillNumber]
// Regards
// SAAVLI FAMILY
// Mahesh Edible Oil Products PVT LTD
export const sendOTP = (_a) => __awaiter(void 0, [_a], void 0, function* ({ mobileNumber, message, otp, userId, templateId }) {
    const finalMessage = message;
    console.log(mobileNumber, message, otp, userId);
    try {
        const response = yield axios.get(`https://cloud.smsindiahub.in/api/mt/SendSMS?APIKey=${process.env.SMS_API_KEY}&senderid=MEOPPL&channel=Trans&DCS=0&flashsms=0&number=${mobileNumber}&text=${finalMessage}&DLTTemplateId=${templateId}&route=0&PEId=1001305053689820308`, { headers: { "Accept": "application/json" } });
        console.log(response.data.MessageData);
        if (otp === '' && response.data.ErrorCode === '000') {
            return { status: 'success' };
        }
        if (response.data.ErrorCode === '000') {
            yield redisClient.set(`${userId}`, otp, 'EX', 300);
            return { status: 'success' };
        }
    }
    catch (err) {
        console.log("error generating otp");
        return null;
    }
});
export const handleCancelOTP = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    try {
        yield redisClient.del(`${userId}`);
        return res.status(200).json(new ApiResponse(200, 'Successfully deleted OTP', {}));
    }
    catch (err) {
        console.log("Error in cancelling: ", err);
        return res.status(500).json(new ApiError('Internal server error', 500));
    }
}));
