import React from "react";
import TextField from "@mui/material/TextField";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
const Login = () => {
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
      />{" "}
      <TextField
        className="w-2/5"
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />{" "}
      <button className="bg-purple w-2/5 p-4 flex items-center justify-center gap-2 transition-all hover:scale-95 text-white font-bold hover:rounded-xl"><VerifiedUserIcon/>Login</button>
    </div>
  );
};

export default Login;
