import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Group from '../Group';
import { Text } from '@nextui-org/react';
import './style.css';

const GroupList = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const [allGroups, setAllGroups] = useState([]);
  // const [likedGroups, setLikedGroups] = useState([]);

  useEffect(async () => {
    await axios.get('http://localhost:8000/group/').then((response) => {
      setAllGroups(response.data);
    });
  }, []);

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
              onClick={() => console.log(group._id)}
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
