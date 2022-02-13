import { Button, Input, Text, Textarea } from '@nextui-org/react';
import './style.css';

const CreateEvent = () => {
  return (
    <div className="CreateEvent">
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
          <Button type="submit" shadow color="gradient">
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
