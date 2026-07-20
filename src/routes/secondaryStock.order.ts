import { Router } from "express";
import { updateSecondaryStock } from "../controllers/secondaryParty.controller.js";
 
const secondaryStockRouter = Router();
 
secondaryStockRouter.route("/update").post(updateSecondaryStock);
 
export default secondaryStockRouter;