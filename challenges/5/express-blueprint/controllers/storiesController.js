export const home = (req, res) => res.send("Home");
export const trending = (req, res) => res.send("Trending");
export const nnew = (req, res) => res.send("New");
export const see_story = (req, res) => res.send(`Story #${req.params.id}`);
export const edit = (req, res) => res.send(`Edit #${req.params.id}`);
export const remove = (req, res) => res.send(`Delete #${req.params.id}`);
