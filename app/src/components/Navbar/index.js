import { useState } from 'react';
import Login from '../Login/index';
import { Button, Text } from '@nextui-org/react';
import './style.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="logo">
          <Text
            h1
            size={40}
            css={{
              textGradient: '30deg, $green500 -10%, $green400 50%',
            }}
            weight="bold"
          >
            GroupUp
          </Text>
        </NavLink>
        <div className="links">
          <NavLink to="/group" activeStyle={{ fontWeight: 'bold' }}>
            Opprett gruppe
          </NavLink>
          <NavLink to="/events" activeStyle={{ fontWeight: 'bold' }}>
            Arrangementer
          </NavLink>
          <NavLink to="/createevent" activeStyle={{ fontWeight: 'bold' }}>
            Opprett arrangement
          </NavLink>
          <Button
            onClick={() => setShowLogin(!showLogin)}
            bordered
            rounded
            color="secondary"
            auto
          >
            Logg inn
          </Button>
        </div>
      </nav>

      {showLogin && <Login />}
    </>
  );
};

export default Navbar;
