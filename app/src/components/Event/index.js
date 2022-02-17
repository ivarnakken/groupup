import { Card, Text, Grid, Col, Row } from '@nextui-org/react';
import PropTypes from 'prop-types';

const getDate = (dateString) => {
  const locale = 'no';
  const options = {
    dateStyle: 'medium',
  };
  return Intl.DateTimeFormat(locale, options).format(new Date(dateString));
};

const getTime = (dateString) => {
  const locale = 'no';
  const options = {
    timeStyle: 'short',
  };
  return Intl.DateTimeFormat(locale, options).format(new Date(dateString));
};

const Event = (props) => {
  return (
    <Grid xs={12} sm={4}>
      <Card>
        <Text h4>{props.title}</Text>
        <Text>{props.description}</Text>
        <Card.Footer>
          <Col>
            <Text>{props.location}</Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Text justify="right">{getDate(props.date)}</Text>
            </Row>
            <Row justify="flex-end">
              <Text justify="right">{getTime(props.date)}</Text>
            </Row>
          </Col>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

Event.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Event;
