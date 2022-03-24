const express = require('express');
const router = express.Router();
const parser = require('../middleware/cloudinary.config');

const Group = require('../models/group');

router.get('/', async (req, res) => {
  if (req.query.user) {
    // We're looking for groups where req.body.user is leader
    const groups = await Group.find({ leader: req.query.user });
    res.status(200).send(groups);
  } else {
    const groups = await Group.find().populate('leader').populate('members');
    res.status(200).send(groups);
  }
});

router.post('/', parser.single('image'), async (req, res) => {
  const groupData = {
    name: req.body.name,
    leader: req.body.leader,
    members: [...new Set([...JSON.parse(req.body.members), req.body.leader])],
  };
  //Bacause image is not required it is not sure that req.file exists
  if (req.file) {
    groupData.image = req.file.path;
  }
  if (req.body.description) {
    groupData.description = req.body.description;
  }
  if (req.body.gold) {
    groupData.gold = req.body.gold;
  }
  const group = new Group(groupData);

  group.save(function (err, group) {
    if (err) {
      console.log(err);
      res.send(400, 'Bad Request');
    } else res.send(group);
  });
});

module.exports = router;
