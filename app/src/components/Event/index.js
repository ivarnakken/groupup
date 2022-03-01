import './style.css';
import { Card, Text, Col, Row, Button } from '@nextui-org/react';
import PropTypes from 'prop-types';

// const getDate = (dateString) => {
//   const locale = 'no';
//   const options = {
//     dateStyle: 'medium',
//   };
//   return Intl.DateTimeFormat(locale, options).format(new Date(dateString));
// };

// const getTime = (dateString) => {
//   const locale = 'no';
//   const options = {
//     timeStyle: 'short',
//   };
//   return Intl.DateTimeFormat(locale, options).format(new Date(dateString));
// };

const Event = (props) => {
  return (
    <Card cover css={{ bgColor: '$primaryLight' }} className="event">
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            {props.group?.name}
          </Text>
          <Text h3 color="white">
            {props.title}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body>
        <Card.Image src={props.image} width="100%" height={400} />
      </Card.Body>
      <Card.Footer
        blur
        css={{
          position: 'absolute',
          bgBlur: '#0f1114',
          borderTop: '$borderWeights$light solid rgba(250, 250, 250, 0.2)',
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Row>
              <Col>
                <Text color="#d1d1d1" size={12} className="description">
                  {props.description}
                </Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button
                flat
                auto
                rounded
                css={{ color: '#94f9f0', bg: '#94f9f026' }}
              >
                <Text
                  css={{ color: 'inherit' }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Les mer
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
        {/* <Row>
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
        </Row> */}
      </Card.Footer>
    </Card>
  );
};

Event.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  group: PropTypes.object,
};

export default Event;
