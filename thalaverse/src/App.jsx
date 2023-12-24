import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { motion } from "framer-motion";
import Header from "./Components/Header";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App flex w-full flex-col gap-4">
     <Header/>
     <div className="punchline mx-auto flex flex-col text-white text-3xl items-center">
        <h1>Everything happens because of a reason</h1>
        <h1>That reason is usually thala</h1>
     </div>
     <Form/>

    </div>
  );
}

export default App;
