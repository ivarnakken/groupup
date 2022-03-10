import PropTypes from 'prop-types';
import { useModal } from '@nextui-org/react';
import { Card, Text, Col, Row, Button, Modal } from '@nextui-org/react';
import './style.css';

const Group = (props) => {
  const { setVisible, bindings } = useModal();

  return (
    <>
      <Modal {...bindings}></Modal>

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
                {props.name}
              </Text>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#ffffffAA"
              >
                {props.leader}
              </Text>
            </Row>
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

Group.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  leader: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
};

export default Group;
