import {
  Button,
  Text,
  Col,
  Grid,
  Card,
  Avatar,
  Spacer,
  Divider,
  Row,
} from '@nextui-org/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div className="home">
      <div className='top-content'>
      <div className="text">
        <Col lg={5} sm={5} className='info'>
            <Text h1 size={60} weight="bold" with="100">
              Velkommen til
            </Text>
            <img src="/logo.png" height={80} width={500} />

            <Text h4 color="#00000088" weight="medium" className="comment">
              Stedet der grupper blir kjent.
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
            <Grid.Container gap={1}>
        <Grid>
          <Avatar text="JR" size="xs" />
        </Grid>
        <Grid>
          <Avatar src="soga.jpg" size="sm" />
        </Grid>
        <Grid>
          <Avatar text="Joe" size="md" />
        </Grid>
        <Grid>
          <Avatar src="meg.jpg" size="lg" />
        </Grid>
        <Grid>
          <Avatar text="Deg?" size="xl" />
        </Grid>
        <Grid>
          <Avatar src="galla.jpg" css={{ size: '$20' }} />
        </Grid>
      </Grid.Container>
      </div>
          <Spacer x={10}></Spacer>
          <Col lg={3} sm={5} className='groupImg' justify='right'>
              <Card cover>
                <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                  <Col>
                    <Text
                      size={12}
                      weight="bold"
                      transform="uppercase"
                      color="#primary"
                    >
                      Føler du et behov for å gjøre noe annet enn de faste
                      mønstrene av aktiviteter med de samme menneskene?
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
            </Col>
            </div>

<Spacer y={10} />

<div className='content'>

      <div>
        <Spacer y={30} x={50}></Spacer>

      <Grid.Container>
        <Grid.Container gap={4} justify="center">
          <Row>
            <Grid sm={12} md={10} justify="left">
              <Card css={{ mw: '330px' }}>
                <Card.Header>
                  <Text b>MØTEPLASS</Text>
                </Card.Header>
                <Divider />
                <Card.Body css={{ py: '$10' }}>
                  <Text>
                    GroupUp er en plattform hvor vennegjenger skal kunne møtes
                    for å dyrke felles interesser og bli kjent.
                  </Text>
                </Card.Body>
                <Divider />
                <Card.Footer>
                  <Row justify="flex-end"></Row>
                </Card.Footer>
              </Card>
            </Grid>
            <Grid sm={12} md={10} justify="left">
              <Card css={{ mw: '330px' }}>
                <Card.Header>
                  <Text b>GRUPPER</Text>
                </Card.Header>
                <Divider />
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
                <Divider />
                <Card.Footer>
                  <Row justify="flex-end"></Row>
                </Card.Footer>
              </Card>
            </Grid>
            <Spacer></Spacer>
            <Grid sm={12} md={10} justify="left">
              <Card css={{ mw: '330px' }}>
                <Card.Header>
                  <Text b>INTERESSER ++</Text>
                </Card.Header>
                <Divider />
                <Card.Body css={{ py: '$10' }}>
                  <Text>
                    En gruppe kan legge til sine interesser, ha en beskrivelse,
                    antall i gruppa, aldersspenn, bilde og dato for ønsket
                    aktivitet. Grupper kan se alle andre grupper, og filtrere
                    dem på interesser, lokasjon, alder, gruppestørrelse og dato
                    før ønsket møte.
                  </Text>
                </Card.Body>
                <Divider />
                <Card.Footer></Card.Footer>
              </Card>
            </Grid>
            <Spacer></Spacer>
            <Grid sm={12} md={10} justify="left">
              <Card css={{ mw: '330px' }}>
                <Card.Header>
                  <Text b>HYGGELIGE OPPLEVELSER</Text>
                </Card.Header>
                <Divider />
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
                <Divider />
                <Card.Footer>
                  <Row justify="flex-end"></Row>
                </Card.Footer>
              </Card>
            </Grid>
            <Spacer y={3}></Spacer>
          </Row>
        </Grid.Container>

      <Spacer y={2} />

        <Grid.Container gap={4} justify="center">
          <Grid lg={11} sm={10}>
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
          </Grid>
        </Grid.Container>

        <Grid.Container gap={4} justify="center">
          <Grid lg={11} sm={10}>
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
          </Grid>
        </Grid.Container>

        <Grid.Container gap={4} justify="center">
          <Grid lg={11} sm={10}>
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
          </Grid>
        </Grid.Container>
      </Grid.Container>
    </div>

            </div>
    </div>
  );
};

export default Home;
