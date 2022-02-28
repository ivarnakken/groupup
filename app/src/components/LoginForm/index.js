import { Modal, Input, Button, Text, Row, Loading } from '@nextui-org/react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth';
import './style.css';

const LoginForm = () => {
  const [visible, setVisible] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const history = useNavigate();

  const closeHandler = () => {
    setVisible(false);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);
    dispatch(login(username, password))
      .then(() => {
        history('/profile');
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return (
    <form id="login" onSubmit={handleLogin}>
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
          <Input
            form="login"
            type="password"
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
              disabled={isLoading}
              onClick={closeHandler}
              className="loginBtn"
            >
              {isLoading && <Loading color="primary" />}
              Logg inn
            </Button>
          </Row>
        </Modal.Body>
      </Modal>
    </form>
  );
};

export default LoginForm;
