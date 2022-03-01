import { Modal, Input, Button, Text, Row } from '@nextui-org/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../actions/auth';
import './style.css';

const RegisterForm = () => {
  const [visible, setVisible] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const closeHandler = () => {
    setVisible(false);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    dispatch(register(username, password))
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form id="login" onSubmit={handleRegister}>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header className="header">
          <Text id="modal-title" size={18}>
            Velkommen til
          </Text>
          <img src="/logo.png" height={20} />
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
          <Input.Password
            form="login"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            clearable
            bordered
            color="primary"
            placeholder="Passord"
          />
          <Row>
            <Button
              auto
              color="primary"
              form="login"
              type="submit"
              onClick={closeHandler}
              className="registerBtn"
            >
              Registrer deg
            </Button>
          </Row>
        </Modal.Body>
      </Modal>
    </form>
  );
};

export default RegisterForm;
