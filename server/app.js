const express = require('express');

const getApp = () => {
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  /* CORS let's users request data from one URL to another, e.g. localhost:3000 -> localhost:8000.
    By setting origin to "*", we're allowing all origins, in other words requests from any URL  */
  const cors = require('cors');
  app.use(
    cors({
      origin: '*',
    })
  );

  const auth = require('./routes/auth');
  app.use('/auth', auth);

  const user = require('./routes/user');
  app.use('/user', user);

  const event = require('./routes/event');
  app.use('/event', event);

  const group = require('./routes/group');
  app.use('/group', group);

  const tag = require('./routes/tag');
  app.use('/tag', tag);

  const request = require('./routes/request');
  app.use('/request', request);

  return app;
};

module.exports = getApp;
