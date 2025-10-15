import { Router } from "express";
import { createLocation, getLocationData } from "../controllers/location.controller.js";
const locationRouter = Router();
locationRouter.post('/post', createLocation);
locationRouter.get('/getLocationData', getLocationData);
export default locationRouter;
