import { Text, Card, Button, Row } from '@nextui-org/react';
import PropTypes from 'prop-types';
import axios from 'axios';

const handleAccept = async (request) => {
  await axios
    .put('http://localhost:8000/request/' + request._id, {
      status: 'accepted',
    })
    .catch((err) => {
      console.error(err);
    });
};

const handleDecline = async (request) => {
  await axios
    .put('http://localhost:8000/request/' + request._id, {
      status: 'declined',
    })
    .catch((err) => {
      console.error(err);
    });
};

const Request = (props) => {
  return (
    <Card>
      <Card.Header>
        <Row justify="space-between">
          <Text h2>{props.request.event.title}</Text>
          <Text>Arrangert av {props.request.event.group.name}</Text>
        </Row>
      </Card.Header>
      <Card.Footer>
        <Row justify="space-between">
          <Text>Forespørsel fra {props.request.group.name}</Text>
          {props.incoming ? (
            <Row justify="flex-end">
              <Button
                flat
                auto
                rounded
                color="success"
                onClick={async () => {
                  await handleAccept(props.request);
                  props.onAnswered();
                }}
              >
                Godkjenn
              </Button>
              <Button
                flat
                auto
                rounded
                color="error"
                onClick={async () => {
                  await handleDecline(props.request);
                  props.onAnswered();
                }}
              >
                Avslå
              </Button>
            </Row>
          ) : (
            <Text
              color={
                {
                  accepted: 'success',
                  pending: 'warning',
                  declined: 'error',
                }[props.request.status]
              }
            >
              Status:{' '}
              {
                {
                  accepted: 'Akseptert',
                  pending: 'Ikke besvart',
                  declined: 'Avslått',
                }[props.request.status]
              }
            </Text>
          )}
        </Row>
      </Card.Footer>
    </Card>
  );
};

Request.propTypes = {
  request: PropTypes.object.isRequired,
  incoming: PropTypes.bool,
  onAnswered: PropTypes.func,
};

export default Request;
