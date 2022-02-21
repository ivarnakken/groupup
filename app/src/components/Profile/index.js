import { Text, Card, Row, Col, Grid, Button } from '@nextui-org/react';
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

      <Grid xs={12} sm={5}>
        <Card cover css={{ w: '100%' }}>
          <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#ffffffAA"
              >
                New
              </Text>
              <Text h3 color="black">
                Sandra Seville
              </Text>
            </Col>
          </Card.Header>
          <Card.Body>
            <Card.Image
              src="/images/card-example-6.jpeg"
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
                  23 år
                </Text>
                <Text color="#000" size={12}>
                  Trondheim
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
    </div>
  );
};

export default Profile;
