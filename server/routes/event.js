const express = require('express');
const router = express.Router();
const parser = require('../middleware/cloudinary.config');

//const mongoose = require('mongoose');
const Event = require('../models/event');

router.get('/', async (req, res) => {
  const events = await Event.find();
  res.send(events);
});

router.post('/', parser.single('image'), async (req, res) => {
  console.log('hi');
  const event = new Event({
    title: req.body.title,
    location: req.body.location,
    date: req.body.date,
    description: req.body.description,
    image: req.file.path,
  });
  event.save();
  // delete req.body._id; // for safety reasons
  res.send(event);
});

module.exports = router;
