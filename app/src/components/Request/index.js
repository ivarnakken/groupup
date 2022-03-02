import { Text, Card } from '@nextui-org/react';
import PropTypes from 'prop-types';

const Request = (props) => {
  return (
    <Card>
      <Text h2>{props.event}</Text>
      <Text>{props.group}</Text>
    </Card>
  );
};

Request.propTypes = {
  event: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
};

export default Request;
