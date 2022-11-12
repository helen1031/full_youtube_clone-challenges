import express from "express";
import {
  home,
  getUpload,
  postUpload,
  detail,
  getEdit,
  postEdit,
  remove,
  search,
} from "./movieController";

const movieRouter = express.Router();

// Add your magic here!

export default movieRouter;

movieRouter.get("/", home);
movieRouter.route("/upload").get(getUpload).post(postUpload);
movieRouter.get("/search", search);
movieRouter.get("/movies/:id", detail);
movieRouter.route("/movies/:id/edit").get(getEdit).post(postEdit);
movieRouter.get("/movies/:id/delete", remove);
