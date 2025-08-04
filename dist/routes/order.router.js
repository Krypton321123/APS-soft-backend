import { Router } from "express";
import { createOrder, getOrders, getTodayOrdersByPartyId, getOrdersByLocation, acceptRejectOrders } from "../controllers/order.controller.js";
const orderRouter = Router();
orderRouter.route('/create').post(createOrder);
orderRouter.route('/list').get(getOrders);
orderRouter.route('/today/:partyId').get(getTodayOrdersByPartyId);
orderRouter.route('/by-location').get(getOrdersByLocation);
orderRouter.route('/statusUpdate').post(acceptRejectOrders);
export default orderRouter;
