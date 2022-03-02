import { Text, Modal, Button, Input, Spacer } from '@nextui-org/react';
import { useState } from 'react';
import ImageUploadButton from '../ImageUploadButton';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../actions/editUser';

const EditProfile = () => {
  const [visible, setVisible] = useState(true);
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const closeHandler = () => {
    setVisible(false);
  };

  const [formValue, setFormValue] = useState({});

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
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editUser(formValue)).then(() => {
      window.location.reload();
    });
  };

  return (
    <>
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
            <ImageUploadButton name="image" onChange={handleImage} />
            <Button
              auto
              type="submit"
              form="editProfileForm"
              onClick={closeHandler}
            >
              Ok
            </Button>
          </Modal.Body>
        </Modal>
      </form>
    </>
  );
};

export default EditProfile;
