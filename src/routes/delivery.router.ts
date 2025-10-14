import { Router } from "express";
import { getDeliveryData } from "../controllers/delivery.controller.js";

const deliveryRouter = Router(); 

deliveryRouter.post('/getData', getDeliveryData); 

export default deliveryRouter; 