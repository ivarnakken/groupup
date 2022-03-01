import axios from 'axios';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import './style.css';

const EventFilter = ({ allEvents, setOutEvents }) => {
  const [tagOptions, setTagOptions] = useState([]);

  useEffect(() => {
    getTags();
  }, []);

  const handleSelectChange = (selectedOptions) => {
    if (selectedOptions.length) {
      setOutEvents(
        allEvents.filter((event) => {
          for (let option of selectedOptions) {
            if (!event.tags.includes(option.value)) {
              return false;
            }
          }
          return true;
        })
      );
    } else {
      setOutEvents(allEvents);
    }
  };

  const getTags = () => {
    axios.get('http://localhost:8000/tag').then((response) => {
      setTagOptions(response.data);
    });
  };

  return (
    <Select
      placeholder="Emneknagger"
      options={tagOptions}
      isMulti
      onChange={handleSelectChange}
    />
  );
};

EventFilter.propTypes = {
  allEvents: PropTypes.arrayOf(PropTypes.object),
  setOutEvents: PropTypes.func,
};

export default EventFilter;
