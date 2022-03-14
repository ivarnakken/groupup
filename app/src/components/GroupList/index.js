import { useEffect, useState } from 'react';
import Group from '../Group';
import axios from 'axios';
import './style.css';
import { Text } from '@nextui-org/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const GroupList = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [allGroups, setAllGroups] = useState([]);

  useEffect(() => {
    getAllGroups();
  }, []);

  const getAllGroups = async () => {
    await axios.get('http://localhost:8000/group/').then((response) => {
      setAllGroups(response.data);
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
        {allGroups.map((group) => {
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
