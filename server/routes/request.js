const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const Request = require('../models/request');
const Event = require('../models/event');

router.get('/', async (req, res) => {
  try {
    const userId = await jwt.verify(req.query.token, process.env.SECRET).id;
    const requests = await Request.find()
      .populate('group')
      .populate({ path: 'event', populate: { path: 'group' } });
    res.send(
      requests.filter(
        (request) =>
          request.event.group.leader.toString() == userId ||
          request.group.leader.toString() == userId
      )
    );
  } catch (error) {
    console.error(error);
    res.status(403);
  }
});

router.post('/', async (req, res) => {
  const event = await Event.findById(req.body.event);
  if (event.invitedGroups.includes(req.body.group)) {
    req.body.status = 'accepted';
  }
  const request = new Request(req.body);
  request.save();
  res.send(request);
});

router.put('/:id', async (req, res) => {
  const request = await Request.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(request);
});

module.exports = router;
