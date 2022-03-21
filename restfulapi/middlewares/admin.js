function admin(req, res, next) {
  //if user is not authorized as admin
  if (req.user.role != "admin")
    return res.status(403).send("You are not authorized");
  next();
}
module.exports = admin;
