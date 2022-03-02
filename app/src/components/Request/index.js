import { Text, Card, Button, Row } from '@nextui-org/react';
import PropTypes from 'prop-types';
import axios from 'axios';

const handleAccept = (request) => async () => {
  try {
    await axios.put('http://localhost:8000/request/' + request._id, {
      status: 'accepted',
    });
  } catch (err) {
    console.error(err);
  }
};

const Request = (props) => {
  return (
    <Card>
      <Text h2>{props.request.event.title}</Text>
      <Text>{props.request.group.name}</Text>
      <Row justify="flex-end">
        <Button
          flat
          auto
          rounded
          color="success"
          onClick={handleAccept(props.request)}
        >
          Godkjenn
        </Button>
        {/* <Button
          flat
          auto
          rounded
          color="error"
          onClick={() => console.log('HI')}
        >
          Avslå
        </Button> */}
      </Row>
    </Card>
  );
};

Request.propTypes = {
  request: PropTypes.object.isRequired,
};

export default Request;
