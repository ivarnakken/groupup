/* Using "dotenv" to retrieve environment variables from your .env file, and "path" is used to find this file */
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const app = require('./app.js')();

// Setup for Mongoose
/* Set the MONGODB_URI .env-variable to the MongoDB URI. Ask somebody if you don't have this */
const mongoose = require('mongoose');
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      throw err;
    }
    console.log('Connected to db');
  }
);

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(process.env.PORT || 8000);
