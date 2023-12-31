import React from "react";
import TextField from "@mui/material/TextField";
import PersonIcon from '@mui/icons-material/Person';
const Signup = () => {
  return (
    <div className="mt-10 w-full min-h-full p-12 flex flex-col gap-4 items-center  container-form">
      <h1 className="text-2xl font-semibold">
        Create Your Account with <span id="signup-heading">vNotes</span>
      </h1>
      <TextField className="w-2/5" id="outlined-basic" label="Username" variant="outlined" />{" "}
      <TextField className="w-2/5" id="outlined-basic" label="Email" variant="outlined" />{" "}
      <TextField className="w-2/5" id="outlined-basic" label="Password" variant="outlined" />{" "}
      <button className="bg-purple w-2/5 p-4 flex items-center justify-center gap-2 transition-all hover:scale-95 text-white font-bold hover:rounded-xl"><PersonIcon/>Signup</button>
      <h1>Or</h1>
      <button className="bg-slate-300 w-2/5 p-4 flex items-center justify-center gap-2 transition-all hover:scale-95  font-bold hover:rounded-xl"><img className="w-[20px] h-[20px]" src="https://cdn-icons-png.flaticon.com/128/281/281764.png"></img>Signup With Google</button>
    
    </div>
  );
};

export default Signup;
