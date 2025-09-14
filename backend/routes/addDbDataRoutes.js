import express from "express";
import { updateData } from "../controllers/addDbDataController.js";

const addDataRoutes = express.Router();

addDataRoutes.get("/:field", updateData);

export default addDataRoutes;
