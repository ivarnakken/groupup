import axios from 'axios';

const register = async (username, password, passwordCopy, birthdate) => {
  try {
    await axios.post(`http://localhost:8000/auth/signup/`, {
      username,
      password,
      passwordCopy,
      birthdate,
    });
  } catch (err) {
    console.error(err);
  }
};

const login = async (username, password) => {
  try {
    await axios
      .post('http://localhost:8000/auth/signin', {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  } catch (err) {
    console.error(err);
  }
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout,
};
