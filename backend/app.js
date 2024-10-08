const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const fileUpload = require("express-fileupload");

const authRouter = require("./routes/authRoutes");
const fileRouter = require("./routes/fileRoutes");
const corsMiddleware = require("./middleware/cors.middelware");

const app = express();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

app.use(fileUpload({}));
app.use(corsMiddleware);
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/files", fileRouter);

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
