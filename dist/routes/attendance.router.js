import { Router } from "express";
import { getAttendance, getDepots } from "../controllers/attendance.controller.js";
const attendanceRouter = Router();
attendanceRouter.route("/getDepots").get(getDepots);
attendanceRouter.route('/getAttendance').get(getAttendance);
export default attendanceRouter;
