import { useState } from 'react';
import LoginForm from '../LoginForm';
import { Button } from '@nextui-org/react';
import './style.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="logo">
          <img src="/logo.png" height={20} width={125} />
        </NavLink>
        <div className="links">
          <NavLink to="/group">Opprett gruppe</NavLink>
          <NavLink to="/events">Arrangementer</NavLink>
          <NavLink to="/create-event">Opprett arrangement</NavLink>
          <NavLink to="/profile">Min side</NavLink>
          <Button
            onClick={() => setShowLoginForm(!showLoginForm)}
            bordered
            rounded
            color="primary"
            auto
          >
            Logg inn
          </Button>
        </div>
      </nav>

      {showLoginForm && <LoginForm />}
    </>
  );
};

export default Navbar;
