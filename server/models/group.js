const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  name: { type: String, minlength: 1, maxlength: 30, required: true },
  leader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  image: { type: String },
  description: { type: String, default: '' },
  gold: { type: Boolean, default: false },
});

module.exports = mongoose.model('Group', GroupSchema);
