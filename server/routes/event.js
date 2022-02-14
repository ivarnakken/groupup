const express = require('express');
const router = express.Router();

//const mongoose = require('mongoose');
const Event = require('../models/event');

router.get('/', async (req, res) => {
  const events = await Event.find();
  res.send(events);
});

router.post('/', async (req, res) => {
  const event = new Event({
    title: req.body.title,
    location: req.body.location,
    date: req.body.date,
    description: req.body.description,
  });
  event.save();
  // delete req.body._id; // for safety reasons
  res.send(event);
});

module.exports = router;
