import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema({
  image_id: Number,
  iou: Number,
  dice: Number,
  urban_growth: Number,
  overlay_path: String,
  before_path: String,
  after_path: String
});

export default mongoose.model("Result", ResultSchema, "cnn_results");