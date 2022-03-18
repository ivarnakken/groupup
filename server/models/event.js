const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, minlength: 1, maxlength: 30, required: true },
  location: { type: String, minlength: 1, maxlength: 100, required: true },
  date: { type: Date, required: true },
  description: { type: String, minlength: 1, maxlength: 400, required: true },
  tags: { type: [String], required: false },
  image: { type: String },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
    required: true,
  },
  invitedGroups: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Group',
    required: false,
  },
});

module.exports = mongoose.model('Event', EventSchema);
