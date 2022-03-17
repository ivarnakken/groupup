const express = require('express');
const router = express.Router();

const Tag = require('../models/tag');

router.get('/', async (req, res) => {
  const tags = await Tag.find();
  res.send(tags);
});

router.post('/', async (req, res) => {
  const tag = new Tag({
    value: req.body.value,
    label: req.body.label,
  });

  tag.save(function (err, tag) {
    if (err) {
      console.log(err);
      res.send(400, 'Bad Request');
    } else res.send(tag);
  });
});

module.exports = router;
