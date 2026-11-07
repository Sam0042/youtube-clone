
const videos = require("../data/videos");

const getVideos = (req, res) => {
  res.status(200).json({
    success: true,
    count: videos.length,
    data: videos,
  });
};

const createVideo = (req, res) => {
  const {
    title,
    channel,
    channelAvatar,
    thumbnail,
    views,
    uploadedAt,
    duration,
    category,
  } = req.body || {};

  const errors = {};

  // Validate required text fields
  const requiredFields = {
    title,
    channel,
    views,
    uploadedAt,
    duration,
    category,
  };

  Object.entries(requiredFields).forEach(([field, value]) => {
    if (typeof value !== "string" || !value.trim()) {
      errors[field] = `${field} is required and must be a non-empty string.`;
    }
  });

  // Validate image URLs
  const urlFields = {
    channelAvatar,
    thumbnail,
  };

  Object.entries(urlFields).forEach(([field, value]) => {
    if (typeof value !== "string" || !value.trim()) {
      errors[field] = `${field} is required and must be a valid URL.`;
      return;
    }

    try {
      const parsedUrl = new URL(value);

      if (!["http:", "https:"].includes(parsedUrl.protocol)) {
        errors[field] = `${field} must use HTTP or HTTPS.`;
      }
    } catch {
      errors[field] = `${field} must be a valid URL.`;
    }
  });

  // Return validation errors
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation failed.",
      errors,
    });
  }

  // Create new video
  const newVideo = {
    id: Date.now(),
    title: title.trim(),
    channel: channel.trim(),
    channelAvatar: channelAvatar.trim(),
    thumbnail: thumbnail.trim(),
    views: views.trim(),
    uploadedAt: uploadedAt.trim(),
    duration: duration.trim(),
    category: category.trim(),
  };

  videos.unshift(newVideo);

  return res.status(201).json({
    success: true,
    message: "Video created successfully.",
    data: newVideo,
  });
};

module.exports = {
  getVideos,
  createVideo,
};
