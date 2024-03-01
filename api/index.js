import { log } from "console";
import express from "express";
import mongoose from "mongoose";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/user.route.js";

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});

app.use("/api/user", userRoutes);
