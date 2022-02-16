const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  leader: { type: String, required: true },
  members: { type: [Object], required: true },
});

module.exports = mongoose.model('Group', GroupSchema);
