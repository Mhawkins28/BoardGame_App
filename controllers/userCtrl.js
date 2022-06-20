const User = require("../models/User");

async function indexRoute(req, res) {
  let allUsers = await User.find({});
  res.json(allUsers);
}

function createRoute(req, res) {
  let newUser = new User(req.body);
  newUser.save(() => res.json({ message: "User Created" }));
}

function showRoute(req, res) {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.json(User);
  });
}

async function updateRoute(req, res) {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.json(User);
}

async function deleteRoute(req, res) {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
}

module.exports = {
  indexRoute,
  createRoute,
  showRoute,
  updateRoute,
  deleteRoute,
};