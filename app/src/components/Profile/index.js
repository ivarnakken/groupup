import {
  Text,
  Card,
  Row,
  Col,
  Button,
  Spacer,
  Container,
} from '@nextui-org/react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Request from '../Request';
import axios from 'axios';
import EditProfile from '../EditProfile';
import './style.css';

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [showEditProfile, setShowEditProfile] = useState(false);

  const [incomingRequests, setIncomingRequests] = useState([]);
  const [outgoingRequests, setOutgoingRequests] = useState([]);

  useEffect(() => {
    getRequests();
  }, []);

  const getRequests = async () => {
    await axios
      .get(`http://localhost:8000/request?token=${currentUser.accessToken}`)
      .then((response) => {
        setIncomingRequests(
          response.data.filter(
            (request) =>
              request.event.group.leader.toString() == currentUser.id &&
              request.status == 'pending'
          )
        );
        setOutgoingRequests(
          response.data.filter(
            (request) => request.group.leader.toString() == currentUser.id
          )
        );
      });
  };

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="profile">
      <Text h1 size={40} weight="bold" color="primary" className="header">
        Min side
      </Text>
      <Text size={15} className="describingText">
        Her kan du administere profilen din og få oversikt over dine grupper
      </Text>
      <Spacer y={1} />
      <Row>
        <Spacer x={1} />
        <Card cover css={{ w: '100%' }}>
          <Card.Header
            blur
            css={{
              position: 'absolute',
              bgBlur: '#FFFFFF',
              borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
              zIndex: 1,
              top: 0,
            }}
          >
            <Col>
              <Text h3 color="black" css={{ textAlign: 'center' }}>
                <strong>{currentUser.username}</strong>
              </Text>
            </Col>
          </Card.Header>
          <Card.Body>
            <Card.Image src={currentUser.image} width="100%" height={400} />
          </Card.Body>
          <Card.Footer
            blur
            css={{
              position: 'absolute',
              bgBlur: '#FFFFFF',
              borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Text color="#000" size={12}>
                  {currentUser.location}
                </Text>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button
                    flat
                    auto
                    rounded
                    color="secondary"
                    onClick={() => setShowEditProfile(!showEditProfile)}
                  >
                    <Text
                      css={{ color: 'inherit' }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Rediger profil
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
        <Spacer x={1} />

        <Card cover css={{ w: '100%' }}>
          <Card.Header
            blur
            css={{
              position: 'absolute',
              bgBlur: '#FFFFFF',
              borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
              zIndex: 1,
              top: 0,
            }}
          >
            <Col>
              <Text h3 color="black" css={{ textAlign: 'center' }}>
                Grupper jeg administrerer
              </Text>
            </Col>
          </Card.Header>
          <Card.Body>
            <Card.Image
              src="./tur.jpg"
              height={400}
              width="100%"
              alt="Card example background"
            />
          </Card.Body>
          <Card.Footer
            blur
            css={{
              position: 'absolute',
              bgBlur: '#FFFFFF',
              borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Text color="#000" size={12}>
                  Her finner du oversikt over gruppene du administrerer
                </Text>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button flat auto rounded color="secondary">
                    <Text
                      css={{ color: 'inherit' }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Vis grupper
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
        <Spacer x={1} />
        <Row>
          <Container>
            <Text h2>Ubesvarte forespørsler</Text>
            {incomingRequests.map((request) => {
              return (
                <>
                  <Request
                    key={request._id}
                    request={request}
                    incoming={true}
                  />
                  <Spacer x={1} />
                </>
              );
            })}
          </Container>
          <Container>
            <Text h2>Status på utgående forespørsler</Text>
            {outgoingRequests.map((request) => {
              return (
                <>
                  <Request key={request._id} request={request} />
                  <Spacer x={1} />
                </>
              );
            })}
          </Container>
        </Row>
      </Row>

      {showEditProfile && <EditProfile />}
    </div>
  );
};

export default Profile;
