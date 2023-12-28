import { useState } from "react";
import { motion } from "framer-motion";
import {Header} from "./Components/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
