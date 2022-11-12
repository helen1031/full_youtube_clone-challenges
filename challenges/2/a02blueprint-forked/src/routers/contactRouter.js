import express from "express";

import { contact } from "../controllers/contentController";

const contactRouter = express.Router();

contactRouter.get("/", contact);

export default contactRouter;