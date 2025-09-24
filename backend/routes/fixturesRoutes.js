import express from "express";
import {
  getFixturesByEvent,
  getAllFixtures,
} from "../controllers/fixturesController.js";

const fixturesRouter = express.Router();

fixturesRouter.get("/fixturesByEvent/:eventId", getFixturesByEvent);
fixturesRouter.get("/allFixtures", getAllFixtures);

export default fixturesRouter;
