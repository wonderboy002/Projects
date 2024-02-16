import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./Components/Register";
import axios from "axios";
import Routes from "./Routes/Routes";
function App() {
  axios.defaults.baseURL = "http://localhost:3000/";
  axios.defaults.withCredentials = true;
  return (
    <div>
    
       <Routes/>
    </div>
  );
}

export default App;
