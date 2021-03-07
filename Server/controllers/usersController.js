const User = require("../models/User");
const Group = require("../models/Group");

exports.RegisterUser = async function (req, res) {
  const user = new User({
    email: req.body.email,
    groups: [],
    _id: req.body.userId,
    username: req.body.username,
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.ReturnUserData = async function (req, res) {
  console.log("test2");
  console.log(req.params);
  const userId = req.params.userId;
  try {
    console.log(userId);
    const user = await User.findById(userId);
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
};

//Returning all the groups the user is in
exports.ReturnAllGroups = async function (req, res) {
  const userID = req.body.userId;
  try {
    const userGroups = await User.findById(userID);
    console.log(userGroups);
    res.json(userGroups.groups);
  } catch (err) {
    res.json({ message: err });
  }
};
