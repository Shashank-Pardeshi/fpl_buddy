import express from "express";
import {
  getFixturesByEvent,
  getAllFixtures,
  getCurrentGameweek,
  getFixturesByTeamIdAndGameweek,
} from "../controllers/fixturesController.js";

const fixturesRouter = express.Router();

fixturesRouter.get("/fixturesByEvent/:eventId", getFixturesByEvent);
fixturesRouter.get("/allFixtures", getAllFixtures);
fixturesRouter.get("/currentGameweek", getCurrentGameweek);
fixturesRouter.get(
  "/fixturesByTeamIdAndGameweek/:teamId/:gameweek",
  getFixturesByTeamIdAndGameweek
);

export default fixturesRouter;
