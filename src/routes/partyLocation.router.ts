import { Router } from "express";
import {
  listPartyLocations,
  approvePartyLocation,
  rejectPartyLocation,
} from "../controllers/partyLocation.controller.js";

// Mount next to your other routers:
//   app.use("/admin/party-locations", partyLocationRouter);
const partyLocationRouter = Router();

partyLocationRouter.get("/", listPartyLocations);
partyLocationRouter.post("/:id/approve", approvePartyLocation);
partyLocationRouter.post("/:id/reject", rejectPartyLocation);

export default partyLocationRouter;