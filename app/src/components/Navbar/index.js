import * as React from 'react';
import Login from '../Login/index';
import CreateEvent from '../CreateEvent';

const Navbar = () => {
  const [showLogin, setShowLogin] = React.useState(false);

  const onClick = () => {
    console.log(showLogin);
    setShowLogin(true);
  };

  const [showCreate, setShowCreate] = React.useState(false);

  const handleEventClick = () => {
    setShowCreate(true);
  };

  return (
    <div>
      <nav className="navbar">
        <h1>GroupUp</h1>
        <div className="links">
          <a href="/opprett">Opprett gruppe</a>
          <a href="/arrangement" onClick={onClick}>
            {' '}
            Opprett arrangement
          </a>
          <a href="/innlogging" onClick={onClick}>
            tilbake
          </a>
          <button onClick={onClick}>Logg Inn</button>
          <button onClick={handleEventClick}>Arrangement</button>
        </div>
      </nav>

      {showCreate && <CreateEvent />}

      {showLogin && <Login />}
    </div>
  );
};

export default Navbar;
