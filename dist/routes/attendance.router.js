import { Router } from "express";
import { getAttendance, getAttendanceStatus, getDepots } from "../controllers/attendance.controller.js";
const attendanceRouter = Router();
attendanceRouter.route("/getDepots").get(getDepots);
attendanceRouter.route('/getAttendance').get(getAttendance);
attendanceRouter.route('/checkAttendance').post(getAttendanceStatus);
export default attendanceRouter;
