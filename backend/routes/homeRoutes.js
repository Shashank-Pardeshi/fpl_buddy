import express from "express";
import {
  getManagerData,
  getGeneralInformation,
  getFixtures,
  getPlayerData,
  getGameWeekLiveData,
  getManagerHistory,
  getLeagueStandings,
  getMyTeam,
  getTeamPerWeek,
  getDreamTeam,
  getSetPieceTakers,
  getEventStatus,
} from "../controllers/homeController.js";

const homeRouter = express.Router();

// define route
homeRouter.get("/entry/:id", getManagerData);

homeRouter.get("/bootstrap-static", getGeneralInformation);

homeRouter.get("/fixtures", getFixtures);

homeRouter.get("/element-summary/:id", getPlayerData);

homeRouter.get("/event/:gw/live", getGameWeekLiveData);

homeRouter.get("/entry/:id/history", getManagerHistory);

homeRouter.get("/leagues-classic/:id/standings", getLeagueStandings);

homeRouter.get("/my-team/:id/my-team", getMyTeam);

homeRouter.get("/entry/:id/event/:gw/picks", getTeamPerWeek);

homeRouter.get("/event-status", getEventStatus);

homeRouter.get("/dream-team", getDreamTeam);

homeRouter.get("/set-piece-takers", getSetPieceTakers);

export default homeRouter;
