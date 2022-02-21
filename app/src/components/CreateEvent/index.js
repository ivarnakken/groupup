import { Button, Input, Text, Textarea } from '@nextui-org/react';

import './style.css';

const CreateEvent = () => {
  return (
    <div className="CreateEvent">
      <div className="overskrift">
        <Text h1 size={40} color="primary" weight="light" className="header">
          Opprett arrangement
        </Text>
      </div>

      <form method="POST" action="http://localhost:8000/event">
        <div className="inputs">
          <Input
            type="text"
            name="title"
            labelPlaceholder="Tittel"
            clearable
            underlined
            required
          />
          <Input
            type="text"
            name="location"
            labelPlaceholder="Sted"
            clearable
            underlined
            required
          />
          <Input type="date" name="date" underlined required />
          <Button type="submit" color="primary">
            Opprett
          </Button>
        </div>

        <Textarea
          name="description"
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

export default CreateEvent;
