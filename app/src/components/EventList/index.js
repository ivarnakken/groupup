import { useState, useEffect } from 'react';
import { Grid } from '@nextui-org/react';
import Event from './../Event';
import EventFilter from '../EventFilter';
import axios from 'axios';

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
    <div className="events">
      <EventFilter allEvents={allEvents} setOutEvents={setOutEvents} />
      <Grid.Container gap={2} justify="center">
        {outEvents.map((event) => {
          return (
            <Event
              key={event._id}
              title={event.title}
              description={event.description}
              location={event.location}
              date={event.date}
              tags={event.tags}
              image={event.image}
            />
          );
        })}
      </Grid.Container>
    </div>
  );
};

export default EventList;
