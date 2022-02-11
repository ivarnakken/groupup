const app = require('express')();
const event = require("./routes/event");

// To get environment variables
require('dotenv').config();

// Setup Mongoose
// Set the MONGODBPASS .env-variable to the mongoDB password
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use("/event", event);

app.listen(process.env.PORT || 8000);