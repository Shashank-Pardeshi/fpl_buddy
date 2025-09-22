import express from "express";
import { getAllTeams } from "../controllers/teamsController.js";

const teamsRouter = express.Router();

teamsRouter.get("/getAllTeams", getAllTeams);

export default teamsRouter;
