import {
  Text,
  Input,
  Button,
  Spacer,
  Checkbox,
  Textarea,
  Card,
  Text as CardText,
} from '@nextui-org/react';
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
    gold: false,
  });

  const [message, setMessage] = useState({ text: '', color: '' });

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
  const handleCheckbox = (event) => {
    setFormValue({
      ...formValue,
      gold: event.target.checked,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', formValue.name);
    formData.append('description', formValue.description);
    formData.append('gold', formValue.gold);
    formData.append('leader', currentUser.id);
    formData.append('members', JSON.stringify(members));
    formData.append('image', formValue.image);

    await axios
      .post('http://localhost:8000/group/', formData)
      .then((response) => {
        setMessage({
          text: `Suksess, "${response.data.name}" har blitt laget.`,
          color: 'success',
        });
        setFormValue({
          name: '',
          image: '',
        });
        setMembers([]);
      })
      .catch((err) => {
        console.error(err);
        setMessage({
          text: err.message,
          color: 'error',
        });
      });
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

      <Spacer />

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
          {message.text && (
            <Card color={message.color} width={100}>
              <CardText color="white">{message.text}</CardText>
            </Card>
          )}
        </div>

        <Spacer y={3} />

        <div>
          <Checkbox
            name="gold"
            checked={false}
            size="sm"
            value={formValue.gold}
            onChange={handleCheckbox}
          >
            Gullgruppe
          </Checkbox>
          <Spacer />
          <Text size={11}>
            Hvis du ønkser å være en gullgruppe vil andre grupper få opp
            forespørselen din om å bli med på arrangementet du ønsker. Er du en
            vanlig gruppe vil forespørselen være anonym. Du vil fortsatt kunne
            være en vanlig gruppe ved å være en gullgruppe!
          </Text>
          <Spacer y={2} />
          <Textarea
            name="description"
            value={formValue.description}
            onChange={handleChange}
            labelPlaceholder="Gruppebeskrivelse"
            helperText="Husk å legg til kontaktinformasjon"
            className="textarea"
            bordered
            required
          />
          <Spacer />
        </div>
        <Spacer />
        <img
          className="skygold"
          src="/nicegold2.png"
          height={300}
          width={450}
        />
      </form>
    </div>
  );
};

export default GroupForm;
