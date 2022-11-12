export const join = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};
export const login = (req, res) => {
  return res.render("login", { pageTitle: "Login" });
};
export const seeUsers = (req, res) => {
  return res.render("seeUsers", { pageTitle: "See Users" });
};
export const seeUser = (req, res) => {
  const { id } = req.params;
  return res.render("seeUsers", { pageTitle: `See User ${id}` });
};
export const editProfile = (req, res) => {
  return res.render("editProfile", { pageTitle: "Edit Profile" });
};
