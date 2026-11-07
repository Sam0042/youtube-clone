
const videos = require("../data/videos");

// GET /api/videos
const getVideos = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: videos.length,
      data: videos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve videos",
    });
  }
};

// POST /api/videos
const createVideo = (req, res) => {
  try {
    const { title, channel, thumbnail } = req.body;

    // Server-side validation
    if (
      !title?.trim() ||
      !channel?.trim() ||
      !thumbnail?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Title, channel, and thumbnail are required.",
      });
    }

    // Create new video
    const newVideo = {
      id: Date.now(),
      title: title.trim(),
      channel: channel.trim(),
      channelAvatar: "https://i.pravatar.cc/150?img=20",
      thumbnail: thumbnail.trim(),
      views: "0 views",
      uploadedAt: "Just now",
      duration: "0:00",
      category: "Other",
    };

    // Store in memory
    videos.unshift(newVideo);

    return res.status(201).json({
      success: true,
      message: "Video created successfully.",
      data: newVideo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create video.",
    });
  }
};

module.exports = {
  getVideos,
  createVideo,
};
