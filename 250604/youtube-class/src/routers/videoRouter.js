import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  deleteVideo,
  getupload,
  postupload,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.route("/upload").get(getupload).post(postupload);
videoRouter.route("/:id([0-9a-f]{24})").get(watch);
// 실은 현업에는 일단 route를 깔고가서 언제 get을 쓸지, post를 쓸지 미리 대비하는 편이라고 함
// videoRouter.get("/:id/edit", getEdit);
// videoRouter.post("/:id/edit", postEdit);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id([0-9a-f]{24})/delete", deleteVideo);

export default videoRouter;
