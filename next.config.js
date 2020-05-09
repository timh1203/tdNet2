require('dotenv').config()

const withFonts = require("next-fonts");

module.exports = withFonts(
  {
    env: {
      YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
      YOUTUBE_CHANNEL_ID: process.env.YOUTUBE_CHANNEL_ID
    },
    webpack(config, options) {
      return config;
    }
  }
);
