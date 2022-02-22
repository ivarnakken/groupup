const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  leader: { type: String, required: true },
  members: { type: [Object], required: true },
  image: { type: String, required: false },
});

module.exports = mongoose.model('Group', GroupSchema);
