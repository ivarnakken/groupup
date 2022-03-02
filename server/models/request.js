const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
    required: true,
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  status: {
    type: String,
    enum: ['pending, accepted, declined'],
    default: 'pending',
  },
});

module.exports = mongoose.model('Request', RequestSchema);
