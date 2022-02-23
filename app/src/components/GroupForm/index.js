import { Text, Input, Button } from '@nextui-org/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';

const GroupForm = () => {
  const [formValue, setFormValue] = useState({
    name: '',
    leader: '',
  });

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // TODO: Use fetch instad of axios
      await axios.post('http://localhost:8000/group/', {
        ...formValue,
        members,
      });
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

  const handleSelectChange = (selectedOptions) => {
    setMembers(selectedOptions);
  };

  return (
    <div className="content">
      <div className="header">
        <Text h1 size={40} color="primary" weight="medium" className="header">
          Opprett gruppe
        </Text>
      </div>

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
          <Input
            type="text"
            name="leader"
            labelPlaceholder="Gruppeleder"
            value={formValue.leader}
            onChange={handleChange}
            clearable
            underlined
            required
          />
          <AsyncSelect
            isMulti
            cacheOptions
            defaultOptions
            value={members}
            loadOptions={promiseOptions}
            onChange={handleSelectChange}
            onInputChange={setInputValue}
            getOptionLabel={(user) => user.username}
            getOptionValue={(user) => user._id}
          />
          <Button type="submit" shadow color="primary">
            Opprett
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GroupForm;
