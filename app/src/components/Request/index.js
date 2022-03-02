import { Text, Card } from '@nextui-org/react';
import PropTypes from 'prop-types';

const Request = (props) => {
  return (
    <Card>
      <Text h1>{props.event}</Text>
    </Card>
  );
};

Request.propTypes = {
  event: PropTypes.string.isRequired,
};

export default Request;
