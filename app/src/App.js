import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import './App.css';

const theme = createTheme({
  type: 'light',
  theme: {
    colors: {
      // brand colors
      primaryLight: '#368D93', //lighter
      primary: '#206C7A', //dark green/blue
      //primaryDark: '$green600',
      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#FB7085', //can switch, its pink<3
      nicewhite: '#F4F4F4', // background and text
      white: '#ffffff',
      black: '#000000',
      logofarge: '#F5A623',

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

function App() {
  return (
    <NextUIProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Footer />
          <Outlet />
        </div>
      </Provider>
    </NextUIProvider>
  );
}

export default App;
