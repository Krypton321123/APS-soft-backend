import { Router } from "express";
import {
  createSecondaryOrder,
  getTodaySecondaryOrderByVendId,
} from "../controllers/secondaryParty.controller.js";
 
const secondaryOrderRouter = Router();
 
secondaryOrderRouter.route("/create").post(createSecondaryOrder);
secondaryOrderRouter
  .route("/today/:vendId")
  .get(getTodaySecondaryOrderByVendId);
 
export default secondaryOrderRouter;