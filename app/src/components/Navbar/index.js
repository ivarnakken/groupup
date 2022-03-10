import { useState } from 'react';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
import { Button, Spacer } from '@nextui-org/react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { logout } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const _logout = () => {
    dispatch(logout());
  };

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="logo">
          <img src="/logo.png" height={20} width={125} />
        </NavLink>
        <div className="links">
          {currentUser && <NavLink to="/group">Opprett gruppe</NavLink>}

          <NavLink to="/events">Arrangementer</NavLink>
          <NavLink to="/groups">Grupper</NavLink>
          {currentUser ? (
            <>
              <NavLink to="/profile">{currentUser.username}</NavLink>
              <Button
                auto
                flat
                rounded
                color="error"
                onClick={_logout}
                className="logoutBtn"
              >
                <box-icon name="log-out" color="#f21361"></box-icon>
                <Spacer x={0.5} />
                <span>Logg ut</span>
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => setShowLoginForm(!showLoginForm)}
                bordered
                rounded
                color="primary"
                auto
              >
                <box-icon name="log-in" color="#206c7a"></box-icon>
                <Spacer x={0.5} />
                <span>Logg inn</span>
              </Button>
              <Button
                onClick={() => setShowRegisterForm(!showRegisterForm)}
                rounded
                color="primary"
                auto
              >
                Registrer deg
              </Button>
            </>
          )}
        </div>
      </nav>

      {showLoginForm && <LoginForm />}
      {showRegisterForm && <RegisterForm />}
    </>
  );
};

export default Navbar;
