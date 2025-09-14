import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import homeRoutes from "./routes/homeRoutes.js";
import playersRoutes from "./routes/playersRoutes.js";
import addDataRoutes from "./routes/addDbDataRoutes.js";

const app = express();
app.use(cors());

await mongoose
  .connect("mongodb://127.0.0.1:27017/FPL_Buddy", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use("/players", playersRoutes);
app.use("/api", homeRoutes);
app.use("/update", addDataRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
