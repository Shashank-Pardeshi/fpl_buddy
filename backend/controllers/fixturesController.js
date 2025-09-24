import mongoose from "mongoose";

export const getFixturesByEvent = async (req, res) => {
  const { eventId } = req.params;
  const fixtures = mongoose.connection.db?.collection("fixtures");
  const docs = await fixtures.find({ event: parseInt(eventId) }).toArray();
  res.json(docs);
};

export const getAllFixtures = async (req, res) => {
  const fixtures = mongoose.connection.db?.collection("fixtures");
  const docs = await fixtures.find({}).toArray();
  res.json(docs);
};
