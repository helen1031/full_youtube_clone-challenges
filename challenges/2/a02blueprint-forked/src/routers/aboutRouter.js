import express from "express";

import { about } from "../controllers/contentController";

const aboutRouter = express.Router();

aboutRouter.get("/", about);

export default aboutRouter;