import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Group from '../Group';
import { Text, Input, Row, Spacer } from '@nextui-org/react';
import './style.css';

const GroupList = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const [allGroups, setAllGroups] = useState([]);
  const [wordFilterValue, setWordFilterValue] = useState('');
  // const [likedGroups, setLikedGroups] = useState([]);

  useEffect(async () => {
    await axios.get('http://localhost:8000/group/').then((response) => {
      setAllGroups(response.data);
    });
  }, []);

  const handleWordFilterChange = (event) => {
    setWordFilterValue(event.target.value);
  };

  const filterGroups = (group) =>
    (group.description + group.name + group.leader.username)
      .toLowerCase()
      .includes(wordFilterValue.toLowerCase());

  return (
    <div className="groupList">
      <div className="header">
        <Text h1 size={40} color="primary" weight="bold">
          Grupper
        </Text>
      </div>
      <Spacer />
      <Row justify="center">
        <Input
          type="text"
          name="name"
          labelPlaceholder="Søk i grupper"
          value={wordFilterValue}
          onChange={handleWordFilterChange}
          clearable
          underlined
        />
      </Row>

      <div className="list">
        {allGroups
          .filter(filterGroups)
          .map((group) => {
            return (
              <Group
                key={group._id}
                id={group._id}
                name={group.name}
                leader={group.leader}
                members={group.members}
                image={group.image}
                description={group.description}
                className="groups"
                onClick={() => console.log(group._id)}
              />
            );
          })
          .reduce(
            (previousValue, currentValue, currentIndex, array) => array,
            <Text>Ingen grupper her :(</Text>
          )}
      </div>

      {isLoggedIn && (
        <Link to="create" className="createBtn">
          <div className="plusIcon">
            <box-icon name="plus" color="white" size="lg" />
          </div>
        </Link>
      )}
    </div>
  );
};

export default GroupList;
