import Navbar from './components/Navbar';
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
