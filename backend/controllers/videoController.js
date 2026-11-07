
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

  // 1. Validate all required string fields
  const requiredFields = {
    title,
    channel,
    views,
    uploadedAt,
    duration,
    category,
    channelAvatar,
    thumbnail,
  };

  Object.entries(requiredFields).forEach(([field, value]) => {
    if (typeof value !== "string" || !value.trim()) {
      errors[field] = `${field} is required and must be a non-empty string.`;
    }
  });

  // 2. Validate image URLs
  const urlFields = {
    channelAvatar,
    thumbnail,
  };

  Object.entries(urlFields).forEach(([field, value]) => {
    if (typeof value !== "string" || !value.trim()) {
      return;
    }

    try {
      const parsedUrl = new URL(value.trim());

      if (
        !["http:", "https:"].includes(parsedUrl.protocol) ||
        !parsedUrl.hostname
      ) {
        errors[field] = `${field} must be a valid HTTP or HTTPS URL.`;
      }
    } catch {
      errors[field] = `${field} must be a valid URL.`;
    }
  });

  // 3. Validate duration (MM:SS or HH:MM:SS)
  const durationRegex = /^(?:\d+:[0-5]\d|\d+:[0-5]\d:[0-5]\d)$/;

  if (
    typeof duration === "string" &&
    duration.trim() &&
    !durationRegex.test(duration.trim())
  ) {
    errors.duration = "duration must use MM:SS or HH:MM:SS format.";
  }

  // 4. Validate category (must not contain numbers)
  if (
    typeof category === "string" &&
    category.trim() &&
    /\d/.test(category)
  ) {
    errors.category = "category must not contain numbers.";
  }

  // 5. Return validation errors
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation failed.",
      errors,
    });
  }

  // 6. Create new video
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
