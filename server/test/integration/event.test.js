const app = require('../../app')();
const User = require('../../models/user');
const Group = require('../../models/group');
const Event = require('../../models/event');
const supertest = require('supertest');
const mockDataBase = require('../utils/mockDataBase');

let request;
const exampleUser = {
  username: 'ExampleUser',
  password: 'ExamplePassword',
  birthdate: new Date('12-12-2000'),
};

const exampleGroup = {
  name: 'ExampleGroup',
};

const exampleEvents = [
  {
    title: 'Bading på stranda',
    location: 'Stranda',
    date: new Date('2022-02-25T00:00:00.000Z'),
    description: 'Alle må joine da! 😁',
    tags: [],
    invitedGroups: [],
  },
  {
    title: 'Kino med gutta',
    location: 'Kinoen',
    date: new Date('2022-03-04T00:00:00.000Z'),
    description: 'Gutta ONLY 😎🎬',
    tags: ['kino'],
    invitedGroups: [],
  },
];

beforeAll(async () => {
  mockDataBase.connect();
  request = supertest(app);
});

afterAll(async () => {
  mockDataBase.disconnect();
});

beforeEach(async () => {
  //Make an initial user
  const user = new User(exampleUser);
  await user.save();
  exampleGroup.leader = user._id;
  const group = new Group(exampleGroup);
  await group.save();

  //Initiate the database with events
  exampleEvents.forEach((event) => {
    event.group = group._id;
    const newEvent = Event(event);
    newEvent.save();
  });
});

afterEach(async () => {
  //Delete all events
  Event.deleteMany({});
});

const expectSameEvent = (expected, actual) => {
  expect(actual.title).toBe(expected.title);
  expect(actual.location).toBe(expected.location);
  expect(new Date(actual.date).getTime()).toBe(expected.date.getTime());
  expect(actual.description).toBe(expected.description);
};

describe('the event route', () => {
  it('returns all events with GET /event', async () => {
    await request
      .get('/event')
      .expect(200)
      .then((res) => {
        //Check that we get an array with the correct length
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toEqual(exampleEvents.length);
        //Check for the correct events
        exampleEvents.forEach((exampleEvent) =>
          res.body
            .filter((resEvent) => resEvent.title === exampleEvent.title)
            .forEach((resEvent) => {
              expectSameEvent(exampleEvent, resEvent);
            })
        );
      });
  });

  it('adds an event to the database with POST /event', async () => {
    const data = {
      title: 'LAN',
      location: 'Hjemme hos Frida',
      date: new Date('2022-04-22T00:00:00.000Z'),
      description: 'Ta med skjøteledning selv. Mamma står for pizzaboller.',
      tags: '[]',
      invitedGroups: '[]',
    };
    data.group = await Group.findOne();
    await request
      .post('/event')
      .send(data)
      .expect(200)
      .then(async (res) => {
        //Check that the response is correct
        expect(res.body._id).toBeTruthy();
        expectSameEvent(data, res.body);

        //Check that the event is in the database
        const event = await Event.findOne({ _id: res.body._id });
        expect(event).toBeTruthy();
        expectSameEvent(data, event);
      });
  });
});
