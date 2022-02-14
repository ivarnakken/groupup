import Navbar from './components/Navbar';
import EventList from './components/EventList';
import { NextUIProvider } from '@nextui-org/react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <NextUIProvider>
      <Navbar />
      <Outlet />
    </NextUIProvider>
  );
}

export default App;
