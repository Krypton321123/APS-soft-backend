import { Router } from "express";
import { generateOtp, getDeliveryData, saveDelivery } from "../controllers/delivery.controller.js";

const deliveryRouter = Router(); 

deliveryRouter.post('/getData', getDeliveryData); 
deliveryRouter.post('/generateOtp', generateOtp); 
deliveryRouter.post('/saveDelivery', saveDelivery); 

export default deliveryRouter; 