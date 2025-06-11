import mongoose from "mongoose";

const videoScheme = new mongoose.Schema({
  title: { type: String, uppercase: true, trim: true, required: true },
  description: { type: String, required: true, trim: true },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, required: true, default: 0 },
    rating: { type: Number, required: true, default: 0 },
  },
});

const Video = mongoose.model("Video", videoScheme);
export default Video;
