import { Button, Input, Text, Textarea } from '@nextui-org/react';
import './style.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const EventForm = () => {
  const [formValue, setFormValue] = useState({
    title: '',
    location: '',
    date: new Date(),
    description: '',
    tags: [],
  });

  const [tagOptions, setTagOptions] = useState([]);

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

  const handleSelectChange = (selectedOptions) => {
    setFormValue({
      ...formValue,
      tags: selectedOptions.map((option) => option.value),
    });
  };

  /* We handle the submit with Axios, instead of an action on the form itself because we don't want to be redirected to the post url (https://localhost:8000/event/) */
  const handleSubmit = async (event) => {
    event.preventDefault(); // The default is GET, and must be prevented
    try {
      // Make axios POST request
      await axios.post('http://localhost:8000/event/', formValue);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="content">
      <Text
        h1
        size={40}
        css={{
          textGradient: '45deg, $blue500 -20%, $pink500 50%',
        }}
        weight="bold"
        className="header"
      >
        Opprett arrangement
      </Text>

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
            isMulti
            onChange={handleSelectChange}
          />
          <Button type="submit" shadow color="gradient">
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
