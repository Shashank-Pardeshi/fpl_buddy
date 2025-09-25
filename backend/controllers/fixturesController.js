import mongoose from "mongoose";

export const getFixturesByEvent = async (req, res) => {
  const { eventId } = req.params;
  const fixtures = mongoose.connection.db.collection("fixtures");
  const docs = await fixtures.find({ event: parseInt(eventId) }).toArray();
  res.json(docs);
};

export const getAllFixtures = async (req, res) => {
  const fixtures = mongoose.connection.db.collection("fixtures");
  const docs = await fixtures.find({}).toArray();
  res.json(docs);
};

export const getCurrentGameweek = async (req, res) => {
  const events = mongoose.connection.db?.collection("events");
  const doc = await events.findOne({ finished: false });
  res.json(doc.id);
};

export const getFixturesByTeamId = async (req, res) => {
  const { teamId } = req.params;

  const fixtures = mongoose.connection.db.collection("fixtures");
  const docs = fixtures
    .find({
      $or: [{ team_h: parseInt(teamId) }, { team_a: parseInt(teamId) }],
    })
    .toArray();

  res.json(docs);
};

export const getFixturesByTeamIdAndGameweek = async (req, res) => {
  const { teamId, gameweek } = req.params;
  const fixtures = mongoose.connection.db.collection("fixtures");
  let query = {};
  if (teamId != 0) {
    query.$or = [{ team_h: parseInt(teamId) }, { team_a: parseInt(teamId) }];
  }
  if (gameweek != 0) {
    query.event = parseInt(gameweek);
  }

  const docs = await fixtures.find(query).toArray();

  res.json(docs);
};
