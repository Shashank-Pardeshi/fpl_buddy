import mongoose, { now } from "mongoose";
import { format } from "mysql2";
import fetch from "node-fetch";

export const getPlayerFixturesDetailsByPlayerId = async (req, res) => {
  const { playerId } = req.params;
  // console.log(playerId);
  const playerData = await fetch(
    `https://fantasy.premierleague.com/api/element-summary/${parseInt(
      playerId
    )}`
  );
  // console.log(playerData);
  let data = await playerData.json();
  res.json(data);
};

export const getAllPlayers = async (req, res) => {
  const db = mongoose.connection.db;
  const players = db.collection("elements");
  const docs = await players.find({}).toArray();
  res.json(docs);
};

export const getTopPlayers = async (req, res) => {
  const db = mongoose.connection.db;
  const players = db.collection("elements");
  const docs = await players
    .find({})
    .sort({ event_points: -1 })
    .limit(10)
    .toArray();
  res.json(docs);
};

export const getAllElementTypes = async (req, res) => {
  const db = mongoose.connection.db;
  const elementTypes = db.collection("element_types");
  const docs = await elementTypes.find({}).toArray();
  res.json(docs);
};

export const getPlayerByTeamAndPositionAndPrice = async (req, res) => {
  const { team, position, price } = req.params;

  const query = {};

  if (team !== "All") {
    query.team = parseInt(team);
  }

  if (position !== "All") {
    query.element_type = parseInt(position);
  }

  if (price !== "Unlimited") {
    query.now_cost = { $lte: parseInt(price) };
  }

  const players = await mongoose.connection.db
    .collection("elements")
    .find(query)
    .toArray();

  res.json(players);
};

export const getPlayerById = async (req, res) => {
  const { id } = req.params;
  // console.log("Fetching player with ID:", id);
  const player = await mongoose.connection.db
    .collection("elements")
    .findOne({ id: Number(id) });

  if (player) {
    let playerData = {
      personal_details: {
        name: player.first_name + " " + player.second_name,
        team_code: player.team_code,
        team: player.team,
        team_name: player.team_code,
        team_photo: `https://resources.premierleague.com/premierleague/badges/70/t${player.team_code}.png`,
        position: player.element_type,
        photo: `https://resources.premierleague.com/premierleague/photos/players/110x140/p${player.code}.png`,
        element_type: player.element_type,
      },
      attacking: {
        goal_scored: player.goal_scored,
        assists: player.assists,
        penaties_missed: player.penaties_missed,
        creativity: player.creativity,
        threat: player.threat,
        expected_goals: player.expected_goals,
        expected_assists: player.expected_assists,
        expected_goal_involvement: player.expected_goal_involvement,
        expected_goals_per_90: player.expected_goals_per_90,
        expected_assists_per_90: player.expected_assists_per_90,
        expected_goal_involvements_per_90:
          player.expected_goal_involvements_per_90,
      },
      defence: {
        clearances_blocks_interceptions: player.clearances_blocks_interceptions,
        recoveries: player.recoveries,
        tackles: player.tackles,
        defensive_contributions: player.defensive_contributions,
        defensive_contributions_per_90: player.defensive_contributions_per_90,
      },
      goalkeeping: {
        clean_sheets: player.clean_sheets,
        goal_conceded: player.goal_conceded,
        own_goals: player.own_goals,
        penalties_saved: player.penalties_saved,
        saves: player.saves,
        expected_goals_conceded: player.expected_goals_conceded,
        saves_per_90: player.saves_per_90,
        expected_goals_conceded_per_90: player.expected_goals_conceded_per_90,
        goals_conceded_per_90: player.goals_conceded_per_90,
        clean_sheets_per_90: player.clean_sheets_per_90,
      },
      stats: {
        minutes: player.minutes,
        starts: player.starts,
        starts_per_90: player.starts_per_90,
        yellow_cards: player.yellow_cards,
        red_cards: player.red_cards,
      },
      fpl_data: {
        dreamteam_count: player.dreamteam_count,
        ep_next: player.ep_next,
        ep_this: player.ep_this,
        event_points: player.event_points,
        form: player.form,
        in_dreamteam: player.in_dreamteam,
        news: player.news,
        news_added: player.news_added,
        now_cost: player.now_cost,
        points_per_game: player.points_per_game,
        removed: player.removed,
        selected_by_percent: player.selected_by_percent,
        special: player.special,
        status: player.status,
        total_points: player.total_points,
        transers_in: player.transfers_in,
        transfers_in_event: player.transfers_in_event,
        transfers_out: player.transfers_out,
        transfers_out_event: player.transfers_out_event,
        value_form: player.value_form,
        value_season: player.value_season,
        bonus: player.bonus,
        bps: player.bps,
        influence: player.influence,
        ict_index: player.ict_index,
        influence_rank: player.influence_rank,
        influence_rank_type: player.influence_rank_type,
        creativity_rank: player.creativity_rank,
        creativity_rank_type: player.creativity_rank_type,
        threat_rank: player.threat_rank,
        threat_rank_type: player.threat_rank_type,
        ict_index_rank: player.ict_index_rank,
        ict_index_rank_type: player.ict_index_rank_type,
        // now_cost_rank: player.now_cost_rank,
        // now_cost_rank_type: player.now_cost_rank_type,
        form_rank: player.form_rank,
        form_rank_type: player.form_rank_type,
        points_per_game_rank: player.points_per_game_rank,
        points_per_game_rank_type: player.points_per_game_rank_type,
        selected_rank: player.selected_rank,
        selected_rank_type: player.selected_rank_type,
      },
      other: {
        code: player.code,
        id: player.id,
        region: player.region,
        team_join_date: player.team_join_date,
        opta_code: player.opta_code,
      },
    };
    res.status(200).json({ data: playerData });
  } else {
    res.status(201).json({ message: "Player not found" });
  }
};
