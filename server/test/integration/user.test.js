const app = require('../../app')();
const User = require('../../models/user');
const supertest = require('supertest');
const mockDataBase = require('../utils/mockDataBase');

let request;

const exampleUsers = [
  {
    username: 'groupie',
  },
  {
    username: 'groupette',
  },
];

beforeAll(async () => {
  mockDataBase.connect();
  request = supertest(app);
});

beforeEach(async () => {
  //Initiate the database with users
  exampleUsers.forEach((user) => new User(user).save());
});

afterAll(async () => {
  mockDataBase.disconnect();
});

afterEach(async () => {
  //Delete all events
  User.deleteMany({});
});
describe('the user route', () => {
  it('returns all users with GET /user', async () => {
    await request
      .get('/user')
      .expect(200)
      .then((res) => {
        //Check that we get an array with the correct length
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toEqual(exampleUsers.length);
        //Check for the correct users
        exampleUsers.forEach((exampleUser) =>
          res.body
            .filter((resUser) => resUser.username === exampleUser.username)
            .forEach((resUser) => {
              expect(resUser.username).toBe(exampleUser.username);
            })
        );
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
});
