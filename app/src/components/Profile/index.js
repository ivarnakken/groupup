import { Text, Container, Card, Row, Col, Spacer } from '@nextui-org/react';
import './style.css';

const Profile = () => {
  return (
    <div className="content">
      <Text
        h1
        size={40}
        css={{
          textGradient: '45deg, $blue500 -20%, $pink500 50%',
        }}
        weight="bold"
        className="header"
      >
        Min side
      </Text>

      <div className="items">
        <Container>
          <Row>
            <Col>
              <div className="myprofile">
                <Card color="primary">
                  <Text size={30}>Min profil</Text>
                  <Text size={20}>Navn</Text>
                  <Text size={20}>Alder</Text>
                  <Text size={20}>Sted</Text>
                </Card>
              </div>
            </Col>
            <Spacer x={2} />
            <Col>
              <div className="membergroups">
                <Card color="primary">
                  <Text size={30}>Grupper jeg er medlem av</Text>
                </Card>
              </div>
            </Col>
            <Spacer x={2} />
            <Col>
              <div className="admingroups">
                <Card color="primary">
                  <Text size={30}>Mine opprettede grupper</Text>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Profile;
