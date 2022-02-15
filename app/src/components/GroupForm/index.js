import {Text, Input, Button} from '@nextui-org/react';
//import './style.css';
import axios from 'axios';
import { useState } from 'react';


const GroupForm = () => {

    const [formValue, setFormValue] = useState({
        groupname: '',
        groupleader: '',
        members: '',
      });
    
      const handleChange = (event) => {
        setFormValue({
          ...formValue,
          [event.target.name]: event.target.value,
        });
      };
    
      /* We handle the submit with Axios, instead of an action on the form itself because we don't want to be redirected to the post url (https://localhost:8000/event/) */
      const handleSubmit = async (event) => {
        event.preventDefault(); // The default is GET, and must be prevented
        try {
          // Make axios POST request
          await axios.post('http://localhost:8000/group/', formValue);
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
            className="header">
                Opprett gruppe
            </Text>


        
        <form onSubmit={handleSubmit}>
            <div className="inputs">
            <Input
            type = "text"
            name = "name"
            labelPlaceholder = "Gruppenavn"
            value={formValue.name}
            onChange={handleChange}
            clearable
            underlined
            required
            />
            <Input
            type = "text"
            name = "leader"
            labelPlaceholder = "Gruppeleder"
            value={formValue.leader}
            onChange={handleChange}
            clearable
            underlined
            required
            />
            <Input
            type = "text"
            name = "members"
            labelPlaceholder = "Medlemmer"
            value={formValue.members}
            onChange={handleChange}
            clearable
            underlined
            required
            />
            <Button type="submit" shadow color="gradient">
                Opprett
            </Button>
            </div>
        </form>
        </div>
    )
}

export default GroupForm;