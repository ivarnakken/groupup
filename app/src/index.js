import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import EventForm from './components/EventForm';
import EventList from './components/EventList';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="events" element={<EventList />} />
        <Route path="createevent" element={<EventForm />} />
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
