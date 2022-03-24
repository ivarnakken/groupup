import { Button } from '@nextui-org/react';
import { useRef, useState } from 'react';
import './style.css';
import PropTypes from 'prop-types';

const ImageUploadButton = (props) => {
  const [uploaded, setUploaded] = useState(false);
  const uploadImage = (event) => {
    event.preventDefault();
    hiddenFileInput.current.click();
  };

  const hiddenFileInput = useRef(null);
  return (
    <div>
      <input
        type="file"
        onChange={(evt) => {
          props.onChange(evt);
          setUploaded(true);
        }}
        accept="image/*"
        name={props.name}
        ref={hiddenFileInput}
        hidden
      />
      <Button
        color={uploaded ? 'success' : 'primary'}
        bordered
        ghost
        onClick={uploadImage}
      >
        {uploaded ? 'Bilde lastet opp!' : 'Last opp bilde'}
      </Button>
    </div>
  );
};

ImageUploadButton.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default ImageUploadButton;
