import './style.css';
import { Card, Text, Col, Row, Button, Modal } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { useModal } from '@nextui-org/react';
import axios from 'axios';

const getDate = (dateString) => {
  const locale = 'no';
  const options = {
    dateStyle: 'medium',
  };
  return Intl.DateTimeFormat(locale, options).format(new Date(dateString));
};

const sendRequest = async (groupId, eventId) => {
  await axios.post('http://localhost:8000/request/', {
    group: groupId,
    event: eventId,
  });
};

const Event = (props) => {
  const { setVisible, bindings } = useModal();

  return (
    <>
      <Modal {...bindings}>
        <Modal.Header>{props.title}</Modal.Header>
        <Modal.Body>
          {props.description}
          <Text color="$primaryLight" b>
            📍 {props.location}
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button
            auto
            rounded
            color="primary"
            onClick={sendRequest(props.group?._id, props.id)}
          >
            <Text
              css={{ color: 'inherit' }}
              size={12}
              weight="bold"
              transform="uppercase"
            >
              Send forespørsel
            </Text>
          </Button>
        </Modal.Footer>
      </Modal>
      <Card cover css={{ bgColor: '$primaryLight' }} className="event">
        <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
          <Col>
            <Row justify="space-between">
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#ffffffAA"
              >
                {props.group?.name}
              </Text>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#ffffffAA"
              >
                {getDate(props.date)}
              </Text>
            </Row>
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
                  onClick={() => setVisible(true)}
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
        </Card.Footer>
      </Card>
    </>
  );
};

Event.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string,
  group: PropTypes.object,
};

export default Event;
