import { Router } from "express";
import {
  getPartyTypes,
  getDepots,
  getEmployeesByDepot,
  getPartiesForRates,
  sendSecondaryRates,
  getSecondaryRateHistory,
} from "../controllers/secondaryrate.controller.js"

const router = Router();

router.get("/party-types", getPartyTypes);
router.get("/depots", getDepots);
router.get("/employees", getEmployeesByDepot);
router.get("/parties", getPartiesForRates);
router.post("/send", sendSecondaryRates);
router.get("/history", getSecondaryRateHistory);

export default router;

// In your main app/router setup, mount this with something like:
//   app.use("/secondary-rates", secondaryRateRoutes);