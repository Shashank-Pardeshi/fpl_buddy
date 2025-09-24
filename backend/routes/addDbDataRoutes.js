import express from "express";
import {
  updateData,
  updateFixture,
} from "../controllers/addDbDataController.js";

const addDataRoutes = express.Router();

addDataRoutes.get("/:field", updateData);

addDataRoutes.get("/new/fixtures", updateFixture);

export default addDataRoutes;
