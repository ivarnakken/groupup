import * as React from 'react';
import styles from './style.css';
import Login from '../Login/index';

const Navbar = () => {
  const [showLogin, setShowLogin] = React.useState(false);

  const onClick = () => {
    console.log(showLogin);
    setShowLogin(true);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <h1>GroupUp</h1>
        <div className={styles.links}>
          <a href="/opprett">Opprett Gruppe</a>
          <a href="/innlogging" onClick={onClick}>
            Logg Inn
          </a>
          <button onClick={onClick}>Logg Inn</button>
        </div>
      </nav>
      {showLogin && <Login />}
    </>
  );
};

export default Navbar;
