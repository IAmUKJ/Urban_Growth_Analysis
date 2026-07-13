import express from "express";
import Result from "../models/Result.js";

const router = express.Router();


// Get all results
router.get("/", async (req, res) => {
  try {

    const results = await Result.find();

    res.json(results);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});


// Get result by image id
router.get("/:id", async (req, res) => {
  try {

    const result = await Result.findOne({
      image_id: req.params.id
    });

    res.json(result);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

export default router;