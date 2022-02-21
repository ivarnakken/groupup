import { Modal } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import { Row } from '@nextui-org/react';
import { Checkbox } from '@nextui-org/react';
import { useState } from 'react';
import axios from 'axios';
import './style.css';

const Login = () => {
  const [visible, setVisible] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const closeHandler = () => {
    setVisible(false);
  };

  const handleUserChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePassChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8000/user/', { username });
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
            GroupUp
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            auto
            form="login"
            type="text"
            name="username"
            value={username}
            onChange={handleUserChange}
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Brukernavn"
          />
          <Input
            auto
            form="login"
            type="text"
            name="password"
            value={password}
            onChange={handlePassChange}
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Passord"
          />
          <Button form="login" type="submit" auto onClick={closeHandler}>
            Logg inn
          </Button>
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Husk meg</Text>
            </Checkbox>
            <Text size={14}>Glemt passord?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Lukk
          </Button>
        </Modal.Footer>
      </Modal>
    </form>
  );
};

export default Login;
