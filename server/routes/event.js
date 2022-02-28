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
  const eventData = {
    title: req.body.title,
    location: req.body.location,
    date: req.body.date,
    description: req.body.description,
  };
  if (req.file) {
    eventData.image = req.file.path;
  }
  const event = new Event(eventData);
  event.save();
  res.send(event);
});

module.exports = router;
