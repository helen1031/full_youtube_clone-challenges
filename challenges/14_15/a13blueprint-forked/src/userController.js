/*
You DONT have to import the User with your username.
Because it's a default export we can nickname it whatever we want.
So import User from "./models"; will work!
You can do User.find() or whatever you need like normal!
*/
import User from "./models/User";
import bcrypt from "bcrypt";

const SITETITLE = "Challenge 13";

// Add your magic here!
export const home = (req, res) => {
  const loggedIn = req.session.loggedIn;
  if (loggedIn) {
    const user = req.session.user;
    res.render("home", { pageTitle: "Home", siteTitle: SITETITLE, user });
  } else {
    res.redirect("/login");
  }
};

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join", siteTitle: SITETITLE });
};

export const postJoin = async (req, res) => {
  const { username, name, password, password2 } = req.body;
  const pageTitle = "Join";

  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle: pageTitle,
      siteTitle: SITETITLE,
      errorMessage:
        "wrong password confirmation(비밀번호가 일치하지 않습니다.)",
    });
  }

  const exists = await User.findOne({ username });
  if (exists) {
    return res.status(400).render("join", {
      pageTitle: pageTitle,
      siteTitle: SITETITLE,
      errorMessage: "username already taken(이미 사용중인 사용자 이름입니다.)",
    });
  }

  try {
    await User.create({
      username,
      name,
      password,
    });
    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("join", {
      pageTitle: pageTitle,
      errorMessage: error._message,
    });
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login", siteTitle: SITETITLE });
};

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = "Login";
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(400).render("login", {
      pageTitle: pageTitle,
      siteTitle: SITETITLE,
      errorMessage:
        "account does not exists(해당 사용자명이 존재하지 않습니다.)",
    });
  }

  const correct = await bcrypt.compare(password, user.password);
  if (!correct) {
    return res.status(400).render("login", {
      pageTitle: pageTitle,
      siteTitle: SITETITLE,
      errorMessage: "wrong message(비밀번호가 틀렸습니다.)",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};
