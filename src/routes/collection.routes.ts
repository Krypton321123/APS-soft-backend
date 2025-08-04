import express from "express";
import { 
    createCollection, 
    getCollectionsByEmpId,
    getCollectionsByLocation, 
    verifyCollection
} from "../controllers/collection.controller.js";

const router = express.Router();

router.post("/", createCollection);
router.get("/employee/:empId", getCollectionsByEmpId);
router.get("/by-location", getCollectionsByLocation);
router.post('/verify', verifyCollection)

export default router;