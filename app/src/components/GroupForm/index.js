import { Text, Input, Button } from '@nextui-org/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AsyncSelect from 'react-select/async';
import ImageUploadButton from '../ImageUploadButton';
import './style.css';

const GroupForm = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  const [formValue, setFormValue] = useState({
    name: '',
    image: '',
  });

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  const handleImage = (event) => {
    setFormValue({
      ...formValue,
      image: event.target.files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', formValue.name);
      formData.append('leader', currentUser.id);
      formData.append('members', JSON.stringify(members));
      formData.append('image', formValue.image);

      await axios.post('http://localhost:8000/group/', formData);
    } catch (err) {
      console.error(err);
    }
  };

  const [users, setUsers] = useState([]);
  const [members, setMembers] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const getUsers = async () => {
    await axios.get('http://localhost:8000/user/').then((response) => {
      setUsers(response.data);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const filterUsers = (inputValue) => {
    return users.filter((user) =>
      user.username.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(filterUsers(inputValue));
      }, 500)
    );

  return (
    <div className="groupForm">
      <Text h1 size={40} color="primary" weight="bold" className="header">
        Opprett gruppe
      </Text>

      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <Input
            type="text"
            name="name"
            labelPlaceholder="Gruppenavn"
            value={formValue.name}
            onChange={handleChange}
            clearable
            underlined
            required
          />
          <AsyncSelect
            placeholder="Medlemmer"
            isMulti
            cacheOptions
            defaultOptions
            value={members}
            loadOptions={promiseOptions}
            onChange={(selectedOptions) => setMembers(selectedOptions)}
            onInputChange={setInputValue}
            getOptionLabel={(user) => user.username}
            getOptionValue={(user) => user._id}
          />
          <ImageUploadButton name="image" onChange={handleImage} />
          <Button type="submit" shadow color="primary">
            Opprett
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GroupForm;
