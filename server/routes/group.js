const express = require('express');
const router = express.Router();

const Group = require('../models/group');

router.get('/', async (req, res) => {
  const groups = await Group.find();
  res.send(groups);
});

router.post('/', async (req, res) => {
  const group = new Group({
    name: req.body.name,
    leader: req.body.leader,
    members: req.body.members,
  });
  group.save();
  res.send(group);
});

module.exports = router;
