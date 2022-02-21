import { Modal, Input, Button, Text, Row } from '@nextui-org/react';
import { useState } from 'react';
import axios from 'axios';
import './style.css';

const LoginForm = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [visible, setVisible] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const closeHandler = () => {
    setVisible(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        `http://localhost:8000/auth/${isSignup ? 'signup' : 'signin'}/`,
        {
          username,
          password,
        }
      ).then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data))
        }
        return response.data
      })
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form id="login" onSubmit={handleSubmit}>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Velkommen til
          </Text>
          <Text
            b
            size={18}
            css={{
              textGradient: '30deg, $green500 -10%, $green400 50%',
            }}
            className="logotekst"
          >
            <img src="/logo.png" height={25} width={150} />
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            form="login"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            clearable
            bordered
            color="primary"
            placeholder="Brukernavn"
          />
          <Input
            form="login"
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            clearable
            bordered
            color="primary"
            placeholder="Passord"
          />
          <Row className="buttons">
            <Button
              auto
              color="primary"
              form="login"
              type="submit"
              onClick={closeHandler}
            >
              {isSignup ? 'Logg inn' : 'Registrer deg'}
            </Button>
            <Button
              auto
              ghost
              color="primary"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? 'Registrer deg' : 'Logg inn'}
            </Button>
          </Row>
        </Modal.Body>
      </Modal>
    </form>
  );
};

export default LoginForm;
