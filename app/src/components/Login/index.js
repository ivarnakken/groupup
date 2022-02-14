import './style.css';
import axios from 'axios';
import { useState } from 'react';
import { Input } from '@nextui-org/react';

const Login = () => {
  const [username, setUsername] = useState('');

  const handleChange = (event) => {
    setUsername(event.target.value);
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
    <div className={'login'}>
      <h2>Logg inn!</h2>

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          labelPlaceholder="Tittel"
          clearable
          underlined
          required
        />
        <button type="submit">Lag bruker</button>
      </form>
    </div>
  );
};

export default Login;
