import { Button, Input, Text, Textarea } from '@nextui-org/react';
import './style.css';
import axios from 'axios';
import { useState } from 'react';
import ImageUploadButton from '../ImageUploadButton';

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

  /* We handle the submit with Axios, instead of an action on the form itself because we don't want to be redirected to the post url (https://localhost:8000/event/) */
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
      // Make axios POST request
      await axios.post('http://localhost:8000/event/', formData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="content">
      <div className="header">
        <Text h1 size={40} color="primary" weight="medium" className="header">
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
