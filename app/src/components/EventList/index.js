import { useState, useEffect } from 'react';
import Event from '../Event';
import EventFilter from '../EventFilter';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';
import { Text } from '@nextui-org/react';

const EventList = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [outEvents, setOutEvents] = useState([]);

  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = async () => {
    await axios.get('http://localhost:8000/event').then((response) => {
      setAllEvents(response.data);
      setOutEvents(response.data);
    });
  };

  return (
    <div className="eventList">
      <div className="header">
        <Text h1 size={40} color="primary" weight="bold">
          Arrangementer
        </Text>
        <EventFilter allEvents={allEvents} setOutEvents={setOutEvents} />
      </div>
      <div className="list">
        {outEvents.map((event) => {
          return (
            <Event
              key={event._id}
              id={event._id}
              title={event.title}
              description={event.description}
              location={event.location}
              date={event.date}
              image={event.image}
              tags={event.tags}
              group={event.group}
              className="event"
            />
          );
        })}
      </div>
      <Link to="create" className="createBtn">
        <div className="plusIcon">
          <box-icon name="plus" color="white" size="lg" />
        </div>
      </Link>
    </div>
  );
};

export default EventList;
