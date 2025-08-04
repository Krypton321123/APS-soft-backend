import { Router } from "express";
import { 
  createPartyEditRequest, 
  getAllPartyEditRequests, 
  getPartyEditRequestsByEmpId,
  getPartyEditRequestsByPartyId,
  updatePartyEditRequestStatus
} from "../controllers/partyEdit.controller.js";

const partyEditRouter = Router();

// Create a new edit request
partyEditRouter.route('/').post(createPartyEditRequest);

// Get all edit requests (for admin)
partyEditRouter.route('/').get(getAllPartyEditRequests);

// Get edit requests by employee ID
partyEditRouter.route('/employee/:empId').get(getPartyEditRequestsByEmpId);

// Get edit requests by party ID
partyEditRouter.route('/party/:partyId').get(getPartyEditRequestsByPartyId);

// Update edit request status (approve/reject)
partyEditRouter.route('/:requestId/status').patch(updatePartyEditRequestStatus);

export default partyEditRouter;