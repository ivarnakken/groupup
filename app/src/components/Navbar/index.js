import { useState } from 'react';
import Login from '../Login/index';
import CreateEvent from '../CreateEvent';
import { Button } from '@nextui-org/react';
import './style.css';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h1>GroupUp</h1>
        <div className="links">
          <a href="/opprett">Opprett gruppe</a>
          <a onClick={() => setShowCreate(!showCreate)}>Opprett arrangement</a>
          <Button
            onClick={() => setShowLogin(!showLogin)}
            bordered
            color="secondary"
            auto
          >
            Logg inn
          </Button>
        </div>
      </nav>

      {showCreate && <CreateEvent />}

      {showLogin && <Login />}
    </>
  );
};

export default Navbar;
