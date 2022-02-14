const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.post('/', async (req, res) => {
  const user = new User({
    username: req.body.username,
  });
  user.save();
  res.send(user);
});

module.exports = router;
