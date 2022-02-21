import { useState, useEffect } from 'react';
import { Grid } from '@nextui-org/react';
import Event from './../Event';
import EventFilter from '../EventFilter';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = () => {
    axios.get('http://localhost:8000/event').then((response) => {
      console.log(response);
      setEvents(response.data);
      console.log(events);
    });
  };

  return (
    <div className="events">
      <EventFilter />
      <Grid.Container gap={2} justify="center">
        {events.map((event) => {
          return (
            <Event
              key={event._id}
              title={event.title}
              description={event.description}
              location={event.location}
              date={event.date}
              tags={event.tags}
            />
          );
        })}
      </Grid.Container>
    </div>
  );
};

export default EventList;
