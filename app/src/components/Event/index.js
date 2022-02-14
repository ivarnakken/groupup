import { Row, Card, Text } from '@nextui-org/react';
import PropTypes from 'prop-types';

const Event = (props) => {
    return (
        <Card color="primary">
            <Row justify="center" align="center">
                <Text h6 size={15} color="white" css={{ m: 0 }}>
                    {props.title}
                </Text>
            </Row>
        </Card>
    );
  };

Event.propTypes = {
    title: PropTypes.string.isRequired
}
  
  export default Event;