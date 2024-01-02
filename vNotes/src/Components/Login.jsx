import React from "react";
import TextField from "@mui/material/TextField";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import {signInWithEmailAndPassword} from "firebase/auth";

const Login = () => {
  const navigate=useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginUser=async ()=>{
    try {
      await signInWithEmailAndPassword(auth,user.email,user.password);
      alert('successfully logged in');
      navigate("/Profile");
    }
    catch(e){
      alert("error logging in : ");
      console.log(e);
    }
  }
  
  return (
    <div className="mt-32 login-parent w-full min-h-full flex flex-col gap-4 items-center">
      <h1 className="text-2xl font-bold">
        Login With <span id="signup-heading">vNotes</span>
      </h1>
      <TextField
        className="w-2/5"
        id="outlined-basic"
        label="Email"
        variant="outlined"
        name="email"
        value={user.email}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
      />{" "}
      <TextField
        className="w-2/5"
        id="outlined-basic"
        type="password"
        label="Password"
        name="password"
        variant="outlined"
        onChange={(e) =>
          setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
      />{" "}
      <button  
      onClick={loginUser}
      className="bg-purple w-2/5 p-4 flex items-center justify-center gap-2 transition-all hover:scale-95 text-white font-bold hover:rounded-xl">
        <VerifiedUserIcon />
        Login
      </button>
    </div>
  );
};

export default Login;
