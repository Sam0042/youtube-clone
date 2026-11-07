const express = require("express");
const cors = require("cors");
const videoRoutes = require("./routes/videoRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/videos", videoRoutes);

// Test endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "YouTube Clone API is running!",
  });
});

// Start server (local development)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;