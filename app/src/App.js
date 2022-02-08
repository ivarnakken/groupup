import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home/index";

import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <div className="App">
      <Navbar/>
      <Home/>
      </div>
    </NextUIProvider>
  );
}

export default App
