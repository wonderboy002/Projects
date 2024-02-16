import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../Contexts/UserContext";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setname,setId}=useContext(UserContext);
  async function registerUser(e) {
    e.preventDefault();
    try {
      const {data} = await axios.post("/register", { username, password });
      setname(username);
      setId(data.id);
      console.log("Registration successful:", data);
      // Handle success response
    } catch (error) {
      console.error("Registration failedddddd:", error);
      // Handle error response
    }
  }

  return (
    <div className="registerDiv flex flex-col justify-center flex-wrap items-center bg-slate-200 h-screen w-full">
      <h1 className="font-bold text-2xl block text-blue">
        A Mern Stack Based Chat Application
      </h1>
      <form className="w-80 mx-auto p-3" onSubmit={registerUser}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Username"
          className="block w-full p-3 mb-2 border"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="pwd"
          placeholder="Enter Password"
          className="block w-full p-3 mb-2 border"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue text-white block w-full rounded-md p-2">
          Regsiter
        </button>
      </form>
    </div>
  );
};

export default Register;
