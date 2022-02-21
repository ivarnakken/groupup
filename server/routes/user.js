const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.use(async (req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept'
  );
  next();
});

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
