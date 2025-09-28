import { Router } from "express";
import { createLocation } from "../controllers/location.controller.js";

const locationRouter = Router(); 

locationRouter.post('/post', createLocation)

export default locationRouter; 