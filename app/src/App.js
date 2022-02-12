import Navbar from './components/Navbar';
import { NextUIProvider } from '@nextui-org/react';

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <Navbar />
      </div>
    </NextUIProvider>
  );
}

export default App;
