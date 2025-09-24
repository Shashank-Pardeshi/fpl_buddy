import fetch from "node-fetch";
import mongoose from "mongoose";

const response = await fetch(
  "https://fantasy.premierleague.com/api/bootstrap-static/"
);
const data = await response.json();

export const updateData = async (req, res) => {
  try {
    const { field } = req.params;
    let a = await mongoose.connection.db.collection(`${field}`).deleteMany({});
    console.log(a);
    mongoose.connection.collection(`${field}`).insertMany(data[`${field}`]);
    res.json({ message: `${field} data updated successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Failed to update ${field} data` });
  }
};

export const updateFixture = async (req, res) => {
  try {
    const response = await fetch(
      "https://fantasy.premierleague.com/api/fixtures/"
    );
    const data = await response.json();

    let a = await mongoose.connection.db.collection("fixtures").deleteMany({});
    console.log(a);
    mongoose.connection.collection("fixtures").insertMany(data);
    res.json({ message: `fixtures data updated successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Failed to update ${field} data` });
  }
};
