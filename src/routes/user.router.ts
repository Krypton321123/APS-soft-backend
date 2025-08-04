import { Router } from "express";
import { loginHandler, fetchParties, fetchParty, getItems, fetchUsersByLocation, markAttendance, fetchRates, submitRates, getSummary, getPreSummary, uploadPartyImagesWithMulter } from "../controllers/user.controller.js";
import { getOutstanding } from "../controllers/partyEdit.controller.js";
import { partyImageUpload } from "../util/multer.js";

const userRouter = Router();

userRouter.route('/login').post(loginHandler)
userRouter.route('/fetchParty').post(fetchParties)
userRouter.route('/fetchPartyWithId').post(fetchParty); 
userRouter.route('/getItems').get(getItems); 
userRouter.get('/fetchUsers', fetchUsersByLocation);
userRouter.post('/markAttendance', markAttendance)
userRouter.post('/getRate', fetchRates)
userRouter.post('/submitRates', submitRates)
userRouter.post('/getOutstanding', getOutstanding)
userRouter.post('/getSummary', getSummary)
userRouter.post('/getPreSummary', getPreSummary); 
userRouter.post('/uploadwithmulter', partyImageUpload.single('photo'), uploadPartyImagesWithMulter); 

export default userRouter;