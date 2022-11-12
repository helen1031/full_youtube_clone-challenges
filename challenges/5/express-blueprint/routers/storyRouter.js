import express from "express";

import { see_story, edit, remove } from "../controllers/storiesController";

const storyRouter = express.Router();

storyRouter.get("/:id(\\d+)", see_story);
storyRouter.get("/:id(\\d+)/edit", edit);
storyRouter.get("/:id(\\d+)/delete", remove);

export default storyRouter;
