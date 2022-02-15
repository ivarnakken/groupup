const express = require('express');
const router = express.Router();

const Group = require('../models/group');

router.get('/', async (req, res) => {
  const groups = await Group.find();
  res.send(groups);
});

router.post('/', async (req, res) => {
  const group = new Group({
    groupname: req.body.groupname,
    groupleader: req.body.groupname,
    members: req.body.members,
  });
  group.save();
  res.send(group);
});

module.exports = router;
