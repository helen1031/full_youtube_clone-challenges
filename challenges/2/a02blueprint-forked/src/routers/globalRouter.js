import express from "express";

import { home } from "../controllers/contentController";

const globalRouter = express.Router();

globalRouter.get("/", home);

export default globalRouter;
