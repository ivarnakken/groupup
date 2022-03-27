import axios from 'axios';

const editUser = async (data) => {
  try {
    const formData = new FormData();
    formData.append('user', localStorage.getItem('user'));
    if (data.username) {
      formData.append('username', data.username);
    }
    if (data.location) {
      formData.append('location', data.location);
    }
    if (data.password) {
      formData.append('password', data.password);
    }
    if (data.image) {
      formData.append('image', data.image);
    }
    // TODO: Use fetch instad of axios
    await axios
      .put('http://localhost:8000/user/', formData)
      .then((response) => {
        // Oppdater user
        localStorage.setItem(
          'user',
          JSON.stringify({
            ...JSON.parse(localStorage.getItem('user')),
            ...response.data,
          })
        );
        return response.data;
      });
  } catch (err) {
    console.error(err);
  }
};

export default { editUser };
