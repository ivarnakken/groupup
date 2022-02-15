import { useState, useEffect } from 'react';
import { Grid } from '@nextui-org/react';
import Event from './../Event';
import axios from 'axios';

const EventList = () => {
  const [events, getEvents] = useState([]);

  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = () => {
    axios.get('http://localhost:8000/event').then((response) => {
      console.log(response);
      getEvents(response.data);
      console.log(events);
    });
  };

  return (
    <Grid.Container gap={2} justify="center">
      {events.map((event) => {
        return (
          <Event
            key={event._id}
            title={event.title}
            description={event.description}
            location={event.location}
          />
        );
      })}
    </Grid.Container>
  );
};

export default EventList;
