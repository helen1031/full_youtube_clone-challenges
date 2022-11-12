export const home = (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};
export const trending = (req, res) => {
  return res.render("trending", { pageTitle: "Trending" });
};
export const newStories = (req, res) => {
  return res.render("newStories", { pageTitle: "New Stories" });
};
export const seeStory = (req, res) => {
  const { id } = req.params;
  return res.render("seeStory", { pageTitle: `See Story ${id}` });
};
export const editStory = (req, res) => {
  const { id } = req.params;
  return res.render("editStory", { pageTitle: `Edit Story ${id}` });
};
export const deleteStory = (req, res) => {
  const { id } = req.params;
  return res.render("deleteStory", { pageTitle: `Delete Story ${id}` });
};
