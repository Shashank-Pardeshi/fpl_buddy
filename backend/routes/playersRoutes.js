import express from "express";
import {
  getAllPlayers,
  getPlayerById,
} from "../controllers/playersController.js";

const playersRouter = express.Router();

playersRouter.get("/getAllPlayers", getAllPlayers);

playersRouter.get("/getPlayerById/:id", getPlayerById);

export default playersRouter;
