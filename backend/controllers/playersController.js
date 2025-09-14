import mongoose from "mongoose";

export const getAllPlayers = async (req, res) => {
  const db = mongoose.connection.db;
  const players = db.collection("elements");
  const docs = await players.find({}).toArray();
  res.json(docs);
};

export const getPlayerById = async (req, res) => {
  const { id } = req.params;
  // console.log("Fetching player with ID:", id);
  const player = await mongoose.connection.db
    .collection("elements")
    .findOne({ id: Number(id) });

  if (player) {
    res.status(200).json({ data: player });
  } else {
    res.status(201).json({ message: "Player not found" });
  }
};
