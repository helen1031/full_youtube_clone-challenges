import express from "express";

import { home, trending, nnew } from "../controllers/storiesController";
import { join, login, users } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/trending", trending);
globalRouter.get("/new", nnew);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/users", users);

export default globalRouter;
