function std_auth(req, res, next) {
  if (req.user.role != "student")
    return res.status(403).send("You are not authorized");
  next();
}
module.exports = std_auth;
