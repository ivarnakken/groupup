const express = require('express');
const router = express.Router();
const parser = require('../middleware/cloudinary.config');

const Group = require('../models/group');

router.get('/', async (req, res) => {
  const groups = await Group.find();
  res.send(groups);
});

router.post('/', parser.single('image'), async (req, res) => {
  const groupData = {
    name: req.body.name,
    leader: req.body.leader,
    members: req.body.members,
  };
  //Bacause image is not required it is not sure that req.file exists
  if (req.file) {
    groupData.image = req.file.path;
  }
  const group = new Group(groupData);
  group.save();
  res.send(group);
});

module.exports = router;
