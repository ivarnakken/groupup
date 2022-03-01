import { useState, useEffect } from 'react';
import Event from './../Event';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';
import { Text } from '@nextui-org/react';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = async () => {
    await axios.get('http://localhost:8000/event').then((response) => {
      setEvents(response.data);
    });
  };

  return (
    <>
      <div className="eventList">
        <div className="header">
          <Text h1 size={40} color="primary" weight="bold">
            Arrangementer
          </Text>
        </div>
        {events.map((event) => {
          return (
            <Event
              key={event._id}
              title={event.title}
              description={event.description}
              location={event.location}
              date={event.date}
              image={event.image}
              group={event.group}
              className="event"
            />
          );
        })}
      </div>
      <Link to="create" className="createBtn">
        <div className="plusIcon">+</div>
      </Link>
    </>
  );
};

export default EventList;
