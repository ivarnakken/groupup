import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Text as CardText } from '@nextui-org/react';
import Select from 'react-select';
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
    tags: [],
    image: '',
    invitedGroups: [],
  });

  const [tagOptions, setTagOptions] = useState([]);
  const [message, setMessage] = useState({ text: '', color: '' });

  useEffect(() => {
    getTags();
  }, []);

  const getTags = () => {
    axios.get('http://localhost:8000/tag').then((response) => {
      setTagOptions(response.data);
    });
  };

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleTagSelectChange = (selectedOptions) => {
    setFormValue({
      ...formValue,
      tags: selectedOptions,
    });
  };
  //tags: selectedOptions.map((option) => option.value),

  const handleInviteSelectChange = (selectedOptions) => {
    setFormValue({
      ...formValue,
      invitedGroups: selectedOptions,
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

    // Images can't be sent via JSON (not without encoding), but they can be sent as form data
    const formData = new FormData();
    formData.append('title', formValue.title);
    formData.append('location', formValue.location);
    formData.append('date', formValue.date);
    formData.append('description', formValue.description);
    formData.append(
      'tags',
      JSON.stringify(formValue.tags.map((option) => option.value))
    );
    formData.append('image', formValue.image);
    formData.append('group', group._id);
    formData.append(
      'invitedGroups',
      JSON.stringify(formValue.invitedGroups.map((option) => option._id))
    );

    await axios
      .post('http://localhost:8000/event/', formData)
      .then((response) => {
        setMessage({
          text: `Suksess, "${response.data.title}" har blitt laget.`,
          color: 'success',
        });
        setFormValue({
          title: '',
          location: '',
          date: new Date(),
          description: '',
          tags: [],
          image: '',
          invitedGroups: [],
        });
        setGroup({});
        setInputValue('');
      })
      .catch((err) => {
        console.error(err);
        setMessage({
          text: err.message,
          color: 'error',
        });
      });
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
    <div className="eventForm">
      <div className="header">
        <Text h1 size={40} color="primary" weight="bold">
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
          <Select
            placeholder="Emneknagger"
            options={tagOptions}
            value={formValue.tags}
            isMulti
            onChange={handleTagSelectChange}
          />
          <Select
            placeholder="Inviterbare"
            options={groups}
            value={formValue.invitedGroups}
            getOptionLabel={(group) => group.name}
            getOptionValue={(group) => group._id}
            isMulti
            onChange={handleInviteSelectChange}
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
          {message.text && (
            <Card color={message.color} width={100}>
              <CardText color="white">{message.text}</CardText>
            </Card>
          )}
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
