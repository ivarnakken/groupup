const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, maxlength: 20, required: true },
  password: { type: String, required: true },
  location: { type: String },
  birthdate: {
    type: Date,
    required: true,
    validate: {
      validator: (birthdate) => {
        return new Date(Date.now() - birthdate).getFullYear() >= 18;
      },
      message: 'Must be over 18 to use GroupUp',
    },
  },
  image: { type: String },
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role',
    },
  ],
});

module.exports = mongoose.model('User', UserSchema);
