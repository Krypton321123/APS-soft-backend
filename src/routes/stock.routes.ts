import { Router } from "express";
import { updateStock } from "../controllers/stock.controller.js";

const stockRouter = Router();

stockRouter.route('/update').post(updateStock);

export default stockRouter;