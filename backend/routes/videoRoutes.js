
const express = require("express");
const router = express.Router();

const { getVideos,createVideo } = require("../controllers/videoController");

// GET /api/videos
router.get("/", getVideos);

// POST /api/videos
router.post("/", createVideo);

module.exports = router;
