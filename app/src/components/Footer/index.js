import { Text, Col, Row } from '@nextui-org/react';
import './style.css';

const Footer = () => {
  return (
    <footer>
      <div className="main">
        <Row>
          <Col>
            <Text>Kontakt oss</Text>
          </Col>
        </Row>
      </div>
      <div className="bottom">
        <span>© 2022 GroupUp. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
