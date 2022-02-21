import axios from 'axios';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const EventFilter = () => {
  const [tagOptions, setTagOptions] = useState([]);

  useEffect(() => {
    getTags();
  }, []);

  const getTags = () => {
    axios.get('http://localhost:8000/tag').then((response) => {
      setTagOptions(response.data);
    });
  };

  return <Select placeholder="Emneknagger" isMulti options={tagOptions} />;
};

export default EventFilter;
