import { Button, Text, Col } from '@nextui-org/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  return (
    <div className="home">
      <div className="text">
        <Col className="info">
          <Text h1 size={60} weight="bold">
            Velkommen til
          </Text>
          <Text
            h1
            size={60}
            css={{
              textGradient: '45deg, $yellow500 -20%, $red500 100%',
            }}
            weight="bold"
            className="title"
          >
            GroupUp
          </Text>
          <Text h4 color="#00000088" weight="medium" className="comment">
            Stedet der grupper blir kjent.
          </Text>
          {currentUser ? (
            <Link to="events/create">
              <Button rounded color="primary" auto className="homeBtn">
                Lag arrangement
              </Button>
            </Link>
          ) : (
            <Button
              onClick={() => {}}
              rounded
              color="primary"
              auto
              className="homeBtn"
            >
              Registrer deg
            </Button>
          )}
        </Col>
      </div>
      <img className="groupImg" src="/home.png" />
    </div>
  );
};

export default Home;
