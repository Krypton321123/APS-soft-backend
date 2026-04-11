import { Router } from "express";
import { createLocation, getLocationData, getMonthlyDistanceReport } from "../controllers/location.controller.js";

const locationRouter = Router(); 

locationRouter.post('/post', createLocation)
locationRouter.get('/getLocationData', getLocationData); 
locationRouter.get('/monthlyDistanceReport', getMonthlyDistanceReport);

export default locationRouter; 