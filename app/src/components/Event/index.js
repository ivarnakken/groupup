import './style.css';
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
    <Grid xs={12} sm={3}>
      <Card cover css={{ bgColor: '$primaryLight' }}>
        <Card.Image src={props.image} width="100%" height={500} />
        <Card.Body
          css={{
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,0.7)',
            bottom: 100,
            zIndex: 1,
            opacity: 1,
            height: 250,
            padding: 30,
          }}
        >
          <Col css={{ padding: 30, wordWrap: 'break-word' }}>
            <Text h4 color="#FFFFFF">
              {props.title}
            </Text>
            <Text color="#FFFFFF">
              {props.tags.length ? '#' + props.tags.join(' #') : ''}
            </Text>
            <Text color="#FFFFFF">{props.description}</Text>
          </Col>
        </Card.Body>
        <Card.Footer
          css={{
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,0.7)',
            bottom: 0,
            zIndex: 1,
            opacity: 1,
            height: 100,
            padding: 30,
          }}
        >
          <Row>
            <Col>
              <Text color="$primaryLight" b>
                📍 {props.location}
              </Text>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Text justify="right" color="#FFFFFF">
                  {getDate(props.date)}
                </Text>
              </Row>
              <Row justify="flex-end">
                <Text justify="right" color="#FFFFFF">
                  {getTime(props.date)}
                </Text>
              </Row>
            </Col>
          </Row>
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
  tags: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
};

export default Event;
