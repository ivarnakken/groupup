import { Card, Text, Grid } from '@nextui-org/react';
import PropTypes from 'prop-types';

const Event = (props) => {
  return (
    <Grid xs={12} sm={4}>
      <Card>
        <Text h4>{props.title}</Text>
        <Text>{props.description}</Text>
        <Card.Footer>
          <Text>{props.location}</Text>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

Event.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Event;
