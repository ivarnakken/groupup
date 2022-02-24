import { Text, Card, Row, Col, Grid, Button, Spacer } from '@nextui-org/react';

const Profile = () => {
  return (
    <div>
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
      <div>
        <Text size={15} className="header">
          Her kan du administere profilen din og få oversikt over dine grupper
        </Text>
      </div>

      <div>
        <Row>
          <Spacer x={1} />
          <Grid xs={12} sm={5}>
            <Card cover css={{ w: '100%' }}>
              <Card.Header
                blur
                css={{
                  position: 'absolute',
                  bgBlur: '#FFFFFF',
                  borderTop:
                    '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                  zIndex: 1,
                  top: 0,
                }}
              >
                <Col>
                  <Text h3 color="black" css={{ textAlign: 'center' }}>
                    Navn på innlogget bruker
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body>
                <Card.Image
                  //database bilde, kan ikke ligge i public
                  src="./meg.jpg"
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
                  borderTop:
                    '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row>
                  <Col>
                    <Text color="#000" size={12}>
                      alder
                    </Text>
                    <Text color="#000" size={12}>
                      lokasjon
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
                          Rediger profil
                        </Text>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
          <Spacer x={1} />
          <Grid xs={12} sm={5}>
            <Card cover css={{ w: '100%' }}>
              <Card.Header
                blur
                css={{
                  position: 'absolute',
                  bgBlur: '#FFFFFF',
                  borderTop:
                    '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                  zIndex: 1,
                  top: 0,
                }}
              >
                <Col>
                  <Text h3 color="black" css={{ textAlign: 'center' }}>
                    Grupper jeg er medlem av
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body>
                <Card.Image
                  src="./kajakk.jpg"
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
                  borderTop:
                    '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row>
                  <Col>
                    <Text color="#000" size={12}>
                      Her finner du oversikt over gruppene du er med i
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
          </Grid>
          <Spacer x={1} />
          <Grid xs={12} sm={5}>
            <Card cover css={{ w: '100%' }}>
              <Card.Header
                blur
                css={{
                  position: 'absolute',
                  bgBlur: '#FFFFFF',
                  borderTop:
                    '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
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
                  borderTop:
                    '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
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
          </Grid>
          <Spacer x={1} />
        </Row>
      </div>
    </div>
  );
};

export default Profile;
