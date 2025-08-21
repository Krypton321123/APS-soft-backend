import express from 'express';
import { searchImages, getDepots, getEmployees, getImages } from '../controllers/image.controller.js';

const imageRouter = express.Router();

imageRouter.get('/depots', getDepots);
imageRouter.get('/employees', getEmployees);
imageRouter.get('/', searchImages);
imageRouter.get('/getImages', getImages)

export default imageRouter;