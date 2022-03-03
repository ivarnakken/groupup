import { Text, Spacer } from '@nextui-org/react';
import './style.css';

const Footer = () => {
  return (
    <footer>
      <div className="main">
        <div className="soMe">
          <box-icon type="logo" name="snapchat" color="#000000AA" />
          <Spacer x={2} />
          <box-icon type="logo" name="instagram-alt" color="#000000AA" />
          <Spacer x={2} />
          <box-icon type="logo" name="twitter" color="#000000AA" />
          <Spacer x={2} />
          <box-icon type="logo" name="facebook" color="#000000AA" />
        </div>
        <div className="info-text">
          <Text h5 weight="medium" color="#000000AA">
            Tjenester
          </Text>
          <Spacer x={3} />
          <Text h5 weight="medium" color="#000000AA">
            Om oss
          </Text>
          <Spacer x={3} />
          <Text h5 weight="medium" color="#000000AA">
            Vilkår
          </Text>
          <Spacer x={3} />
          <Text h5 weight="medium" color="#000000AA">
            Personvernerklæring
          </Text>
        </div>
      </div>
      <div className="bottom">
        <span>© 2022 GroupUp. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
