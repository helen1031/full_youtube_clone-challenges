import express from "express";

import { see_user, edit_profile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id(\\d+)", see_user);
userRouter.get("/edit-profile", edit_profile);

export default userRouter;