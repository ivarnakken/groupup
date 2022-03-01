const express = require('express');
const router = express.Router();
const parser = require('../middleware/cloudinary.config');
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

//Legg inn parser her VVVVVVVVVV
router.put('/', parser.single('image'), async (req, res) => {
  const user = JSON.parse(req.body.user);

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

  //Siden image ikke er obligatorisk er det ikke sikkert req.file finnes
  if (req.file) {
    userData.image = req.file.path;
  }
  let updatedUser = await User.findOneAndUpdate({ _id: user.id }, userData);
  res.send(updatedUser);
});

module.exports = router;
