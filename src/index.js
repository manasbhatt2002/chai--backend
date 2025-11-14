import express, { json } from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });

import app from "./app.js";
// Connect MongoDB first, then start server
connectDB()
  .then(() => {
    const PORT =8000;
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB connection failed:", err);
  });
   