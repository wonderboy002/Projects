import React, { useEffect } from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/config";
import { google } from "../firebase/config";
import useLog from "../Context/log";
const Signup = () => {
  const navigate = useNavigate();
  const { logged, loggedIn, loggedOut } = useLog();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  useEffect(()=>{
    console.log(logged,"this is this");
  },[logged])
  const googleSignin = async () => {
    try {
      await signInWithPopup(auth, google);
      alert("user created");
      navigate("/Profile");
    } catch (e) {
      console.log("something went wrong signing in with google");
      console.log(e);
    }
  };
  const signin = async (e) => {
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      alert("user created");
      loggedIn();
      // navigate("/Login");
    } catch (e) {
      console.log("something went wrong signing in");
      console.log(e);
    }
  };
  return (
    <div className="mt-10 w-full min-h-full p-12 flex flex-col gap-4 items-center  container-form">
      <h1 className="text-2xl font-semibold">
        Create Your Account with <span id="signup-heading">vNotes</span>
      </h1>

      <TextField
        className="w-2/5"
        id="outlined-basic"
        label="Email"
        name="email"
        type="email"
        variant="outlined"
        value={user.email}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
      />
      <TextField
        className="w-2/5"
        id="outlined-basic"
        label="Password"
        type="password"
        name="password"
        variant="outlined"
        value={user.password}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
      />
      <button
        onClick={signin}
        className="bg-purple w-2/5 p-4 flex items-center justify-center gap-2 transition-all hover:scale-95 text-white font-bold hover:rounded-xl"
      >
        <PersonIcon />
        Signup
      </button>
      <h1>Or</h1>
      <button
        onClick={googleSignin}
        className="bg-slate-300 w-2/5 p-4 flex items-center justify-center gap-2 transition-all hover:scale-95  font-bold hover:rounded-xl"
      >
        <img
          className="w-[20px] h-[20px]"
          src="https://cdn-icons-png.flaticon.com/128/281/281764.png"
          alt="Google Icon"
        />
        Signup With Google
      </button>
    </div>
  );
};

export default Signup;
