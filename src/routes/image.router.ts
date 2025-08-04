import express from 'express';
import { searchImages, getDepots, getEmployees } from '../controllers/image.controller.js';

const imageRouter = express.Router();

imageRouter.get('/depots', getDepots);
imageRouter.get('/employees', getEmployees);
imageRouter.get('/', searchImages);

export default imageRouter;