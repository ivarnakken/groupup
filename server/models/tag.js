const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
  value: { type: String, required: true },
  label: { type: String, required: true },
});

module.exports = mongoose.model('Tag', TagSchema);
