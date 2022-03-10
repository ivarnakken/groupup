import { useEffect, useState } from 'react';
import Group from '../Group';
import axios from 'axios';
import './style.css';
import { Text } from '@nextui-org/react';

const GroupList = () => {
  const [setAllGroups] = useState([]);
  const [outGroups, setOutGroups] = useState([]);

  useEffect(() => {
    getAllGroups();
  }, []);

  const getAllGroups = async () => {
    await axios.get('http://localhost:8000/group/').then((response) => {
      setAllGroups(response.data);
      setOutGroups(response.data);
    });
  };

  return (
    <div className="groupList">
      <div className="header">
        <Text h1 size={40} color="primary" weight="bold">
          Grupper
        </Text>
      </div>
      <div className="list">
        {outGroups.map((group) => {
          return (
            <Group
              key={group._id}
              id={group._id}
              name={group.name}
              leader={group.leader}
              members={group.members}
              image={group.image}
              className="groups"
            />
          );
        })}
      </div>
    </div>
  );
};

export default GroupList;
