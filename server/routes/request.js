const express = require('express');
const router = express.Router();

const Request = require('../models/request');

router.get('/', async (req, res) => {
  const requests = await Request.find().populate('group').populate('event');
  res.send(requests);
});

router.post('/', async (req, res) => {
  const request = new Request(req.body);
  request.save();
  res.send(request);
});

module.exports = router;
