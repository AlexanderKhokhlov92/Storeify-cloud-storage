const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRouter = require("./routes/authRoutes");
const corsMiddleware = require("./middleware/cors.middelware");

const app = express();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

app.use(corsMiddleware);
app.use(express.json());
app.use("/api/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port`, PORT);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

start();
