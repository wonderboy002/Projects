import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Navbar,Footer} from "./Components/index"


function App() {

  return (
    <>
      <div className="App h-screen relative flex flex-col">
       <Navbar/>
       <Footer/>
      </div>
    </>
  );
}

export default App;
