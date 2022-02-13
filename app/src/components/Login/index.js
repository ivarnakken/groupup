import './style.css';

const Login = () => {
  return (
    <div className={'login'}>
      <h2>Logg inn!</h2>

      <input type="text" placeholder="Brukernavn..." />

      <input type="text" placeholder="Passord..." />

      <button>Logg inn</button>
    </div>
  );
};

export default Login;
