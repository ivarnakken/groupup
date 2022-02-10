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
    text: req.body.text,
  });
  event.save();
  console.log(event);
  res.send(event);
});

module.exports = router;
