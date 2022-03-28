import PropTypes from 'prop-types';
import { useModal } from '@nextui-org/react';
import {
  Card,
  Text,
  Col,
  Row,
  Button,
  Modal,
  Grid,
  Avatar,
  Spacer,
} from '@nextui-org/react';
import './style.css';

const Group = (props) => {
  const { setVisible, bindings } = useModal();

  return (
    <>
      <Modal {...bindings}>
        <Modal.Header>
          <Col>
            <Text h3 color="primary">
              {props.name}
            </Text>
            <Text color="primary">{props.description}</Text>
          </Col>
        </Modal.Header>
        <Modal.Body>
          <Grid.Container gap={1}>
            <Grid>
              <Text color="primary">Gruppeleder</Text>
              <Spacer y={0.7} />
              <Avatar
                size="lg"
                src={props.leader.image}
                zoomed
                color="primary"
                bordered
              />

              <Spacer y={1} />
              <Text color="primary">Gruppemedlemmer</Text>
              <div className="list">
                {props.members.map((member) => {
                  return (
                    <Avatar
                      key={member.id}
                      size="lg"
                      src={member.image}
                      zoomed
                      color="primary"
                      bordered
                    />
                  );
                })}
              </div>
            </Grid>
          </Grid.Container>
        </Modal.Body>
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
                {props.name}
              </Text>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#ffffffAA"
              >
                {props.leader.username}
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

Group.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  leader: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  description: PropTypes.string,
};

export default Group;
