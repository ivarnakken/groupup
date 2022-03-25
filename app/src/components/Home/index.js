import { Button, Text, Col, Grid, Card, Spacer, Row } from '@nextui-org/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div className="home">
      <Row align="center" wrap="wrap">
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

        <div className="groupImg">
          <Card cover>
            <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="#primary"
                >
                  Føler du et behov for å gjøre noe annet enn de faste mønstrene
                  av aktiviteter med de samme menneskene?
                </Text>
              </Col>
            </Card.Header>
            <Card.Image
              src="groupsun.png"
              height={400}
              width="100%"
              alt="Card image background"
            />
          </Card>
        </div>
      </Row>

      <Spacer y={11} />

      <div className="manual">
        <Grid.Container gap={4} justify="center">
          <Row>
            <Grid sm={12} md={10} justify="left">
              <Card css={{ mw: '330px' }} className="infoCard">
                <Card.Header>
                  <Text b>MØTEPLASS</Text>
                </Card.Header>
                <Card.Body css={{ py: '$10' }}>
                  <Text>
                    GroupUp er en plattform hvor vennegjenger skal kunne møtes
                    for å dyrke felles interesser og bli kjent.
                  </Text>
                </Card.Body>
                <Card.Footer>
                  <Row justify="flex-end"></Row>
                </Card.Footer>
              </Card>
            </Grid>
            <Grid sm={12} md={10} justify="left">
              <Card css={{ mw: '330px' }} className="infoCard">
                <Card.Header>
                  <Text b>GRUPPER</Text>
                </Card.Header>
                <Card.Body css={{ py: '$10' }}>
                  <Text>
                    Brukere kan opprette grupper, hvor de kan legge til vennene
                    sine. En gruppe består av én eller flere personlige
                    profiler. Gruppene må matche med hverandre for at et møte
                    skal skje, og kan kommunisere med hverandre. Etter hvert som
                    det avtales møter, kan gruppene kunne se en liste over
                    matcher med andre grupper.
                  </Text>
                </Card.Body>
                <Card.Footer>
                  <Row justify="flex-end"></Row>
                </Card.Footer>
              </Card>
            </Grid>
            <Spacer></Spacer>
            <Grid sm={12} md={10} justify="left">
              <Card css={{ mw: '330px' }} className="infoCard">
                <Card.Header>
                  <Text b>INTERESSER ++</Text>
                </Card.Header>
                <Card.Body css={{ py: '$10' }}>
                  <Text>
                    En gruppe kan legge til sine interesser, ha en beskrivelse,
                    antall i gruppa, aldersspenn, bilde og dato for ønsket
                    aktivitet. Grupper kan se alle andre grupper, og filtrere
                    dem på interesser, lokasjon, alder, gruppestørrelse og dato
                    før ønsket møte.
                  </Text>
                </Card.Body>
                <Card.Footer></Card.Footer>
              </Card>
            </Grid>
            <Spacer />
            <Grid sm={12} md={10} justify="left">
              <Card css={{ mw: '330px' }} className="infoCard">
                <Card.Header>
                  <Text b>HYGGELIGE OPPLEVELSER</Text>
                </Card.Header>
                <Card.Body css={{ py: '$10' }}>
                  <Text>
                    For å sikre hyggelige opplevelser på plattformen kan grupper
                    gi en review til hverandre etter møtedato. Videre, for å
                    sikre seriøse brukere, må en logge seg inn med passord på
                    egen bruker for å delta på forumet. Brukere kan rapportere
                    andre brukere som bryter retningslinjene. Dersom sidens
                    administrator oppdager brudd eller svindel, kan
                    administrator fjerne upassende grupper og slette brukere.
                  </Text>
                </Card.Body>
                <Card.Footer>
                  <Row justify="flex-end"></Row>
                </Card.Footer>
              </Card>
            </Grid>
            <Spacer y={3} />
          </Row>
        </Grid.Container>

        <Spacer y={2} />

        <Card cover>
          <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#primary"
              >
                Tur?
              </Text>
            </Col>
          </Card.Header>
          <Card.Image
            src="tur.jpg"
            height={400}
            width="100%"
            alt="Card image background"
          />
        </Card>

        <Card cover>
          <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#primary"
              >
                Kajakk?
              </Text>
            </Col>
          </Card.Header>
          <Card.Image
            src="kajakk.jpg"
            height={400}
            width="100%"
            alt="Card image background"
          />
        </Card>

        <Card cover>
          <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#primary"
              >
                Hyttetur?
              </Text>
            </Col>
          </Card.Header>
          <Card.Image
            src="hyttetur.jpg"
            height={400}
            width="100%"
            alt="Card image background"
          />
        </Card>
      </div>
    </div>
  );
};

export default Home;
