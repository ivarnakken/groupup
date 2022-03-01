import axios from 'axios';
import { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import ImageUploadButton from '../ImageUploadButton';
import { Button, Input, Text, Textarea } from '@nextui-org/react';
import './style.css';

const EventForm = () => {
  const [formValue, setFormValue] = useState({
    title: '',
    location: '',
    date: new Date(),
    description: '',
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
    event.preventDefault(); // The default is GET, and must be prevented
    try {
      // Images can't be sent via JSON (not without encoding), but they can be sent as form data
      const formData = new FormData();
      formData.append('title', formValue.title);
      formData.append('location', formValue.location);
      formData.append('date', formValue.date);
      formData.append('description', formValue.description);
      formData.append('image', formValue.image);
      formData.append('group', group._id);

      await axios.post('http://localhost:8000/event/', formData);
    } catch (err) {
      console.error(err);
    }
  };

  const [groups, setGroups] = useState([]);
  const [group, setGroup] = useState({});
  const [inputValue, setInputValue] = useState('');

  const getGroups = async () => {
    await axios.get('http://localhost:8000/group/').then((response) => {
      setGroups(response.data);
    });
  };

  useEffect(() => {
    getGroups();
  }, []);

  const filterUsers = (inputValue) => {
    return groups.filter((group) =>
      group.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(filterUsers(inputValue));
      }, 500)
    );
  return (
    <div className="content">
      <div className="header">
        <Text h1 size={40} color="primary" weight="bold" className="header">
          Opprett arrangement
        </Text>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <Input
            type="text"
            name="title"
            value={formValue.title}
            onChange={handleChange}
            labelPlaceholder="Tittel"
            clearable
            underlined
            required
          />
          <Input
            type="text"
            name="location"
            value={formValue.location}
            onChange={handleChange}
            labelPlaceholder="Sted"
            clearable
            underlined
            required
          />
          <Input
            type="date"
            name="date"
            value={formValue.date}
            onChange={handleChange}
            underlined
            required
          />
          <AsyncSelect
            placeholder="Gruppe"
            cacheOptions
            defaultOptions
            value={group}
            loadOptions={promiseOptions}
            onChange={(selectedOption) => setGroup(selectedOption)}
            onInputChange={setInputValue}
            getOptionLabel={(group) => group.name}
            getOptionValue={(group) => group._id}
          />
          <ImageUploadButton name="image" onChange={handleImage} />

          <Button type="submit" shadow color="primary">
            Opprett
          </Button>
        </div>
        <Textarea
          name="description"
          value={formValue.description}
          onChange={handleChange}
          labelPlaceholder="Arrangementbeskrivelse"
          helperText="Husk å legg til kontaktinformasjon"
          className="textarea"
          bordered
          required
        />
      </form>
    </div>
  );
};

export default EventForm;
