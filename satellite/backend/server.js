import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import resultRoutes from "./routes/results.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static image folders
app.use("/before_images", express.static("before_images"));
app.use("/after_images", express.static("after_images"));
app.use("/dashboard_outputs", express.static("dashboard_outputs"));

// MongoDB connection
const MONGO_URI =
  "mongodb+srv://shivansh_mandolia:shivi123@cluster0.ooqkpyc.mongodb.net/satellite_analysis?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

// API routes
app.use("/api/results", resultRoutes);

// Health check route
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend is running",
  });
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});