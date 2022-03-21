const express = require("express");
let router = express.Router();
let { User } = require("../../models/user");
var bcrypt = require("bcryptjs");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");

//SignUp
router.post("/register", async (req, res) => {
  //check if email already exists
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User with given Email already exist");
  user = new User();
  
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  user.role = req.body.role;

  await user.generateHashedPassword();
  await user.save();
  let token = jwt.sign(
    { _id: user._id, name: user.name, role:user.role},
    config.get("jwtPrivateKey")
  );

  let datatoReturn = {
    id: user.name,
    email: user.email,
    token: user.token,
    role: user.role,
  };
  return res.send(datatoReturn);
  
});

//Login
router.post("/login", async (req, res) => {

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("User Not Registered");
  let isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) return res.status(401).send("Invalid Password");
  
  let token = jwt.sign(
    { _id: user._id, name: user.name,role: user.role  },
    config.get("jwtPrivateKey")
  );
  
  res.send(token);
});


module.exports = router;
