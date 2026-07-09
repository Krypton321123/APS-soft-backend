import express from 'express';
import { searchImages, getDepots, getEmployees, getImages, saveFlag, saveRemarks, getFlags, getEmployeeDayDistance } from '../controllers/image.controller.js';

const imageRouter = express.Router();

imageRouter.get('/depots', getDepots);
imageRouter.get('/employees', getEmployees);
imageRouter.get('/', searchImages);
imageRouter.get('/getImages', getImages)
imageRouter.post('/saveFlag', saveFlag); 
imageRouter.post('/saveRemark', saveRemarks); 
imageRouter.get('/getFlags', getFlags); 
imageRouter.get('/dayDistance', getEmployeeDayDistance)

export default imageRouter;