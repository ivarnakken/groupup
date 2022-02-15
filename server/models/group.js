const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  groupname: { type: String, required: true },
  groupleader: { type: String, required: true },
  members: { type: [String], required: true },
});

module.exports = mongoose.model('Group', GroupSchema);
