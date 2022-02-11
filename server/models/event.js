const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

module.exports = mongoose.model('Event', EventSchema);
