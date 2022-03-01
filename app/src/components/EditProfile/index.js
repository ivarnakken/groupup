import { Text, Modal, Button, Input, Spacer } from '@nextui-org/react';
import { useState } from 'react';
import ImageUploadButton from '../ImageUploadButton';
import axios from 'axios';
import { useSelector } from 'react-redux';

const EditProfile = () => {
  const [visible, setVisible] = useState(true);
  const { user: currentUser } = useSelector((state) => state.auth);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };

  const [formValue, setFormValue] = useState({
  });

  const handleImage = (profile) => {
    setFormValue({
      ...formValue,
      image: profile.target.files[0],
    });
  };

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };


  //endre denne
  const handleSubmit = async (profile) => {
    profile.preventDefault();
    try {
      const formData = new FormData();
      formData.append('user', JSON.stringify(currentUser) );
      if (formValue.username) {
        formData.append('username', formValue.username);
      }
      if (formValue.location) {
        formData.append('location', formValue.location);
      }
      if (formValue.password) {
        formData.append('password', formValue.password);
      }
      if (formValue.image) {
        formData.append('image', formValue.image);
      }
      // TODO: Use fetch instad of axios
      await axios.put('http://localhost:8000/user/', formData);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div>
      <form id="editProfileForm" onSubmit={handleSubmit}>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Rediger profil
          </Text>
        </Modal.Header>
        <Modal.Body>
        <Spacer y={1} />
          <Input
            clearable
            underlined
            onChange={handleChange}
            labelPlaceholder="Name"
            form="editProfileForm"
            initialValue={currentUser.username}
            name="username"
            type="text"
        
          />
          <Spacer y={1} />
          <Input
            clearable
            underlined
            onChange={handleChange}
            labelPlaceholder="Lokasjon"
            form="editProfileForm"
            initialValue={currentUser.location}
            name="location"
            type="text"
            
          />
          <Spacer y={1} />
          <Input
            clearable
            underlined
            onChange={handleChange}
            form="editProfileForm"
            labelPlaceholder="Passord"
            name="password"
            type="password"
            
          />
          <Button auto type="submit" form="editProfileForm">
            Ok
          </Button>
          <ImageUploadButton name="image" onChange={handleImage} />
        </Modal.Body>
      </Modal>
      </form>
    </div>
  );
};

export default EditProfile;
