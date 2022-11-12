import express from "express";

import { login } from "../controllers/userController";

const loginRouter = express.Router();

loginRouter.get("/", login);

export default loginRouter;