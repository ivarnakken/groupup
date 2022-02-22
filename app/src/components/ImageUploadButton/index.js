import { Button } from '@nextui-org/react';
import { useRef } from 'react';
import './style.css';
import PropTypes from 'prop-types';

const ImageUploadButton = (props) => {
  const uploadImage = (event) => {
    event.preventDefault();
    hiddenFileInput.current.click();
  };

  const hiddenFileInput = useRef(null);
  return (
    <div>
      <input
        type="file"
        onChange={props.onChange}
        accept="image/*"
        name={props.name}
        ref={hiddenFileInput}
        hidden
      />
      <Button shadow color="gradient" onClick={uploadImage}>
        Last opp bilde
      </Button>
    </div>
  );
};

ImageUploadButton.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default ImageUploadButton;
