const express = require('express');
const router = express.Router();
const parser = require('../middleware/cloudinary.config');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

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
    birthdate: req.body.birthdate,
  });

  user.save(function (err, user) {
    if (err) {
      console.error(err);
      res.send(400, 'Ugyldig brukernavn');
    } else res.send(user);
  });
});

router.put('/', parser.single('image'), async (req, res) => {
  try {
    const user = JSON.parse(req.body.user);
    const decoded = await jwt.verify(user.accessToken, process.env.SECRET);

    const userData = {};
    if (req.body.username) {
      userData.username = req.body.username;
    }
    if (req.body.location) {
      userData.location = req.body.location;
    }
    if (req.body.password) {
      userData.password = req.body.password;
    }
    if (req.file) {
      userData.image = req.file.path;
    }
    let updatedUser = await User.findOneAndUpdate(
      { _id: decoded.id },
      userData,
      {
        new: true,
      }
    );
    res.send(updatedUser);
  } catch (error) {
    res.status(403);
    res.send('Forbidden');
  }
});

module.exports = router;
