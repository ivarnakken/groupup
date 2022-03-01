import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import GroupForm from './components/GroupForm';
import Profile from './components/Profile';
import Home from './components/Home';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="events" element={<EventList />} />
        <Route path="events/create" element={<EventForm />} />
        <Route path="group" element={<GroupForm />} />
        <Route path="profile" element={<Profile />} />
        <Route
          path="*"
          element={
            <main>
              <p>There is nothing here :(</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
