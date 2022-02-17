const app = require('../../app')();
const User = require('../../models/user');
const supertest = require('supertest');
const mockDataBase = require('../utils/mockDataBase');

let request;

beforeAll(async () => {
  //Initiate the database with users
  const user = new User({
    username: 'groupie',
  });
  user.save();
  const user2 = new User({
    username: 'groupette',
  });
  user2.save();

  mockDataBase.connect();
  request = supertest(app);
});

afterAll(async () => {
  mockDataBase.disconnect();
});

it('returns all users with GET /user', async () => {
  await request
    .get('/user')
    .expect(200)
    .then((res) => {
      //Check that we get an array with only one user
      expect(Array.isArray(res.body)).toBeTruthy();
      expect(res.body.length).toEqual(2);
      //Check that it's the correct user
      expect(res.body[0].username).toBe('groupie');
      expect(res.body[1].username).toBe('groupette');
    });
});

it('adds a user to the database with POST /user', async () => {
  const data = {
    username: 'grupert',
  };
  await request
    .post('/user')
    .send(data)
    .expect(200)
    .then(async (res) => {
      //Check that the response is correct
      expect(res.body._id).toBeTruthy();
      expect(res.body.username).toBe(data.username);

      //Check that the user is in the database
      const user = await User.findOne({ _id: res.body._id });
      expect(user).toBeTruthy();
      expect(user.username).toBe(data.username);
    });
});
