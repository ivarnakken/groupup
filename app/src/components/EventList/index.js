import { useState, useEffect } from 'react';
import { Grid } from '@nextui-org/react';
import Event from './../Event';
import axios from 'axios';

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
    <Grid.Container gap={2} justify="center">
      {events.map((event) => {
        return (
          <Event
            key={event._id}
            title={event.title}
            description={event.description}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        );
      })}
    </Grid.Container>
  );
};

export default EventList;
