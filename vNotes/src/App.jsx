import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "./Components/index";
import { Login, Signup, Profile } from "./Components/index.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { LogProvider } from "./Context/log.js";
function App() {
  const [logged, setLogged] = useState(false);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Header />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Profile" element={<Profile />} />
      </>
    )
  );

  useEffect(()=>{
    console.log(logged);
  },[logged])

  const loggedIn = () => {
    setLogged(true);
    localStorage.setItem("logState",JSON.stringify(true));
  };
  const loggedOut = () => {
    setLogged(false);
    localStorage.setItem("logState",JSON.stringify(false));
  };

  return (

    <LogProvider value={{ logged, loggedIn, loggedOut }}>
    <div className="App">
     
        <RouterProvider router={router} />
     
    </div>
    </LogProvider>
  );
}

export default App;
