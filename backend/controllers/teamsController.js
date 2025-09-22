import mongoose from "mongoose";

export const getAllTeams = async (req, res) => {
  const db = mongoose.connection.db;
  const teams = await db.collection("teams").find({}).toArray();
  // console.log(teams);
  res.json({ data: teams });
};
