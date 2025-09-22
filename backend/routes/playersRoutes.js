import express from "express";
import {
  getAllElementTypes,
  getAllPlayers,
  getPlayerById,
  getPlayerByTeamAndPositionAndPrice,
} from "../controllers/playersController.js";

const playersRouter = express.Router();

playersRouter.get("/getAllPlayers", getAllPlayers);

playersRouter.get("/getPlayerById/:id", getPlayerById);

playersRouter.get(
  "/getPlayerByTeamAndPositionAndPrice/:team/:position/:price",
  getPlayerByTeamAndPositionAndPrice
);

playersRouter.get("/getAllElementTypes", getAllElementTypes);

export default playersRouter;
