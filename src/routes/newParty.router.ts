import { Router } from "express";
import { createNewPartyOrder, getNewPartyOrders } from "../controllers/newPartyOrder.controller.js";
import { newPartyImageUpload } from "../util/multer.js";

const newPartyOrderRouter = Router();

newPartyOrderRouter.route('/create').post(newPartyImageUpload.single('photo'), createNewPartyOrder);
newPartyOrderRouter.route('/list').get(getNewPartyOrders);

export default newPartyOrderRouter;