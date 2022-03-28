import { Button, Text, Col, Card, Row, Spacer } from '@nextui-org/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div className="home">
      <Row align="center" wrap="wrap" className="top">
        <Col className="headerInfo">
          <Row justify="flex-start">
            <Text className="styledTitle" css={{ mb: 0 }}>
              Bli kjent med nye&nbsp;
            </Text>
          </Row>
          <Row justify="flex-start">
            <Text
              className="styledTitle"
              css={{
                mb: 0,
                textGradient: '180deg, #ffbf00 20%, #d98e00 100%',
              }}
            >
              grupper&nbsp;
            </Text>
            <Text
              className="styledTitle"
              css={{ mb: 0, '@xsMax': { d: 'inline-block' } }}
            >
              som aldri før.
            </Text>
          </Row>

          <Text
            h4
            color="#666"
            weight="medium"
            css={{ mt: 30 }}
            className="comment"
          >
            Stedet der grupper blir mer enn bare grupper.
          </Text>

          {isLoggedIn ? (
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

        <img
          src="gradient1.svg"
          style={{
            position: 'absolute',
            zIndex: '1',
            marginLeft: '150px',
          }}
        />

        <div className="groupImg">
          <Card cover>
            <Card.Image
              src="groupsun.png"
              height={400}
              width="100%"
              alt="Card image background"
            />
          </Card>
        </div>
      </Row>

      <img src="nodes.gif" className="nodes1" />

      <div className="manual">
        <img
          src="gradient2.svg"
          style={{
            position: 'absolute',
            zIndex: '1',
            width: '1100px',
            marginBottom: '1000px',
          }}
        />
        <div className="section">
          <div className="textSection">
            <Row justify="flex-start">
              <Text className="styledTitle" css={{ mb: 0 }}>
                Opprett og&nbsp;
              </Text>
              <Text
                className="styledTitle"
                css={{
                  mb: 0,
                  textGradient: '180deg, #53F76E 20%, #2CA340 100%',
                }}
              >
                match&nbsp;
              </Text>
            </Row>
            <Row justify="flex-start">
              <Text
                className="styledTitle"
                css={{ mb: 0, '@xsMax': { d: 'inline-block' } }}
              >
                med grupper.
              </Text>
            </Row>

            <Text
              h4
              color="#666"
              weight="medium"
              css={{ mt: 30 }}
              className="comment"
            >
              Brukere kan opprette grupper med sine nærmeste. Match deretter med
              andre grupper gjennom arrangementer.
            </Text>

            <Spacer y={0.8} />

            <Link to="groups/create">
              <Button auto flat rounded css={{ color: '#53F76E' }}>
                Opprett
              </Button>
            </Link>
          </div>

          <Card cover>
            <Card.Image
              src="tur.jpg"
              height={400}
              width="100%"
              alt="Gruppe på tur"
            />
          </Card>
        </div>

        <img src="nodes.gif" className="nodes2" />

        <div className="section">
          <Card cover>
            <Card.Image
              src="hyttetur.jpg"
              height={400}
              width="100%"
              alt="En perfekt match mellom"
            />
          </Card>

          <img
            src="gradient3.svg"
            style={{
              position: 'absolute',
              zIndex: '1',
              width: '900px',
              marginTop: '-400px',
              marginLeft: '400px',
            }}
          />

          <div className="textSection">
            <Row justify="flex-start">
              <Text className="styledTitle" css={{ mb: 0 }}>
                Den&nbsp;
              </Text>
              <Text
                className="styledTitle"
                css={{
                  mb: 0,
                  textGradient: '180deg, #E4441C 40%, #AA2B0C 100%',
                }}
              >
                perfekte&nbsp;
              </Text>
            </Row>
            <Row justify="flex-start">
              <Text
                className="styledTitle"
                css={{ mb: 0, '@xsMax': { d: 'inline-block' } }}
              >
                matchen.
              </Text>
            </Row>

            <Text
              h4
              color="#666"
              weight="medium"
              css={{ mt: 30 }}
              className="comment"
            >
              Spesifiser interessen deres, og finn likesinnede. Bruk også
              filtreringsverktøyene for det de er verdt!
            </Text>

            <Spacer y={0.8} />

            <Link to="events">
              <Button auto flat rounded css={{ color: '#E4441C' }}>
                Utforsk
              </Button>
            </Link>
          </div>
        </div>

        <Spacer />
      </div>
    </div>
  );
};

export default Home;
