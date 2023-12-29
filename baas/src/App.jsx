import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Profile from "./Components/Profile"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
