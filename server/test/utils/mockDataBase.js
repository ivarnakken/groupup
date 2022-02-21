const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
let mongoServer;

exports.connect = async () => {
  mongoServer = await MongoMemoryServer.create();
  mongoose.connect(
    mongoServer.getUri(),
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
};

exports.disconnect = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
};
