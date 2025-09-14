import fetch from "node-fetch";

export const getGeneralInformation = async (req, res) => {
  try {
    const response = await fetch(
      "https://fantasy.premierleague.com/api/bootstrap-static/"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch general information" });
  }
};

export const getFixtures = async (req, res) => {
  try {
    const response = await fetch(
      "https://fantasy.premierleague.com/api/fixtures/"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch fixtures" });
  }
};

export const getPlayerData = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Player ID:", id);

    const response = await fetch(
      `https://fantasy.premierleague.com/api/element-summary/${id}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch players data" });
  }
};

export const getGameWeekLiveData = async (req, res) => {
  try {
    const { gw } = req.params;
    console.log("Gameweek:", gw);

    const response = await fetch(
      `https://fantasy.premierleague.com/api/event/${gw}/live/`
    );
    const data = await response.json();
    res.json(data);
  } catch (erroo) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch gameweek live data" });
  }
};

export const getManagerData = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Manager ID:", id);

    const response = await fetch(
      `https://fantasy.premierleague.com/api/entry/${id}/`
    );
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch manager data" });
  }
};

export const getManagerHistory = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Manager ID:", id);
    const response = await fetch(
      `https://fantasy.premierleague.com/api/entry/${id}/history/`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch manager history data" });
  }
};

export const getLeagueStandings = async (req, res) => {
  try {
    const { leagueId } = req.params;
    console.log("League ID:", leagueId);
    const response = await fetch(
      `https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch league standings data" });
  }
};

export const getMyTeam = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Manager ID:", id);
    const response = await fetch(
      `https://fantasy.premierleague.com/api/my-team/${id}/`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch my team data" });
  }
};

export const getTeamPerWeek = async (req, res) => {
  try {
    const { id, gw } = req.params;
    console.log("Manager ID:", id, "Gameweek:", gw);

    const response = await fetch(
      `https://fantasy.premierleague.com/api/entry/${id}/event/${gw}/picks/`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch team per week data" });
  }
};

export const getEventStatus = async (req, res) => {
  try {
    const response = await fetch(
      "https://fantasy.premierleague.com/api/event-status/"
    );
    const data = await response.json();
    res.json(data);
  } catch (erro) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch event status data" });
  }
};

export const getDreamTeam = async (req, res) => {
  try {
    const response = await fetch(
      "https://fantasy.premierleague.com/api/dream-team/"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch dream team data" });
  }
};

export const getSetPieceTakers = async (req, res) => {
  try {
    const response = await fetch(
      "https://fantasy.premierleague.com/api/set-piece-takers/"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch set piece takers data" });
  }
};
