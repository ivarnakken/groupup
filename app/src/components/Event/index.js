import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AsyncSelect from 'react-select/async';
import {
  useModal,
  Card,
  Col,
  Text,
  Loading,
  Row,
  Button,
  Modal,
  Spacer,
} from '@nextui-org/react';
import './style.css';

const Event = (props) => {
  const { user: currentUser } = useSelector((state) => state.auth);

  const getDate = (dateString) => {
    const locale = 'no';
    const options = {
      dateStyle: 'medium',
    };
    return Intl.DateTimeFormat(locale, options).format(new Date(dateString));
  };

  const [isLoading, setLoading] = useState(false); // Boolean indicating whether a loading indicator should be present
  const [requestSent, setRequestSent] = useState(false); // Boolean indicating whether a request has been sent or not

  const sendRequest = async (event, eventId) => {
    event.preventDefault();
    setLoading(true);
    await axios
      .post('http://localhost:8000/request/', {
        group: group._id,
        event: eventId,
      })
      .then(() => {
        setRequestSent(true);
      })
      .catch((err) => {
        console.err(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const { setVisible, bindings } = useModal();

  const [groups, setGroups] = useState([]);
  const [group, setGroup] = useState({});
  const [inputValue, setInputValue] = useState('');

  const getGroups = async () => {
    await axios
      .get('http://localhost:8000/group/', {
        params: { user: currentUser?.id },
      })
      .then((response) => {
        setGroups(response.data);
      });
  };

  useEffect(() => {
    getGroups();
  }, []);

  const filterUsers = (inputValue) => {
    return groups.filter((group) =>
      group.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(filterUsers(inputValue));
      }, 500)
    );

  return (
    <>
      <Modal {...bindings}>
        <Modal.Header>
          <Text h3 color="primary">
            {props.title}
          </Text>
        </Modal.Header>

        <Modal.Body>
          <Text>{props.description}</Text>
          <Spacer y={0.4} />
          <Row>
            <box-icon name="map"></box-icon>
            <Text>{props.location}</Text>
          </Row>
          {currentUser && (
            <form
              onSubmit={() => sendRequest(event, props.id)}
              className="requestForm"
            >
              <AsyncSelect
                placeholder="Gruppe"
                className="groupLeaderSelect"
                isRequired
                cacheOptions
                defaultOptions
                value={group}
                loadOptions={promiseOptions}
                onChange={(selectedOption) => {
                  setRequestSent(false), setGroup(selectedOption);
                }}
                onInputChange={setInputValue}
                getOptionLabel={(group) => group.name}
                getOptionValue={(group) => group._id}
              />
              {requestSent ? (
                <Text
                  color="success"
                  size={15}
                  weight="bold"
                  transform="uppercase"
                >
                  Forespørsel sendt
                </Text>
              ) : (
                <Button
                  auto
                  rounded
                  color="primary"
                  type="submit"
                  className="requestBtn"
                  disabled={Object.keys(group).length === 0}
                >
                  {isLoading && <Loading size="sm" color="white" />}
                  <Spacer x={0.3} />
                  <Text
                    css={{ color: 'inherit' }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Send forespørsler
                  </Text>
                </Button>
              )}
            </form>
          )}
        </Modal.Body>
      </Modal>
      <Card cover css={{ bgColor: '$primaryLight' }} className="event">
        <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
          <Col>
            <Row justify="space-between">
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#ffffffAA"
              >
                {props.group?.name}
              </Text>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#ffffffAA"
              >
                {getDate(props.date)}
              </Text>
            </Row>
            <Text h3 color="white">
              {props.title}
            </Text>
          </Col>
        </Card.Header>
        <Card.Body>
          <Card.Image src={props.image} width="100%" height={400} />
        </Card.Body>
        <Card.Footer
          blur
          css={{
            position: 'absolute',
            bgBlur: '#0f1114',
            borderTop: '$borderWeights$light solid rgba(250, 250, 250, 0.2)',
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Row>
                <Col>
                  <Text color="#d1d1d1" size={12} className="description">
                    {props.description}
                  </Text>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button
                  flat
                  auto
                  rounded
                  css={{ color: '#94f9f0', bg: '#94f9f026' }}
                  onClick={() => setVisible(true)}
                >
                  <Text
                    css={{ color: 'inherit' }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Les mer
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};

Event.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  group: PropTypes.object,
};

export default Event;
