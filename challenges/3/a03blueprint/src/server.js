import express from "express";

const app = express();

const urlLogger = (req, res, next) => {
  console.log(`Path: ${req.path}`);
  next();
};

const timeLogger = (req, res, next) => {
  const today = new Date();
  console.log(
    `Time: ${today.getFullYear()}.${today.getMonth()}.${today.getDate()}`
  );
  next();
};

const securityLogger = (req, res, next) => {
  const protocol = req.protocol;
  //console.log(protocol);
  if (protocol === "https") {
    console.log("Secure");
  } else {
    console.log("Insecure");
  }
  next();
};

const protectorMid = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Cannot Access</h1>");
  }
  next();
};

//app.use(urlLogger);
//app.use(timeLogger);
//app.use(securityLogger);
//app.use(protectorMid);

const home = (req, res) => res.send("<h1>Home</h1>");
const protect = (req, res) => res.send("<h1>Protected</h1>");

app.use(urlLogger, timeLogger, securityLogger, protectorMid);
app.get("/", home);
app.get("/protected", protect);

// Codesandbox gives us a PORT :)
//app.listen(process.env.PORT, () => `Listening!✅`);
const PORT = 4500;
app.listen(PORT, () => `Listening!✅`);
