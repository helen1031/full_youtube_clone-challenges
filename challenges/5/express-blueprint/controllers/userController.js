export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");
export const users = (req, res) => res.send("Users");
export const see_user = (req, res) => res.send(`User #${req.params.id}`);
export const edit_profile = (req, res) => res.send("Edit Profile");
