import mongoose from "mongoose";

const videoScheme = new mongoose.Shema({
  title: String,
  description: String,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const Video = mongoose.model("Video", videoScheme);

export default Video;
