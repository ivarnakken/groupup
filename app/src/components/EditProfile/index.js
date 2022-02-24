import { Text, Modal, Button, Input } from '@nextui-org/react';
import { useState } from 'react';

const EditProfile = () => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };
  return (
    <div>
      <Button auto shadow onClick={handler}>
        Open modal
      </Button>
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
          <Input
            clearable
            underLined
            fullWidth
            color="primary"
            size="lg"
            placeholder="Navn"
          />
          <Input
            clearable
            underLined
            fullWidth
            color="primary"
            size="lg"
            placeholder="Lokasjon"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={closeHandler}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditProfile;
