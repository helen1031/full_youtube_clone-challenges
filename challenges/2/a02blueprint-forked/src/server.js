import express from "express";

import globalRouter from "./routers/globalRouter";
import aboutRouter from "./routers/aboutRouter";
import contactRouter from "./routers/contactRouter";
import loginRouter from "./routers/loginRouter";

const PORT = 4500;
const app = express();

app.use("/", globalRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);
app.use("/login", loginRouter);

const handleListening = () =>
  console.log("Server listening");

app.listen(PORT, handleListening);
