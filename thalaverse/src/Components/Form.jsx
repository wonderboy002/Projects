import React from "react";
import TextField from "@mui/material/TextField";
import SportsCricketIcon from '@mui/icons-material/SportsCricket';

const Form = () => {
  return <div className="Form mx-auto flex flex-col gap-4 bg-white p-12 rounded-md">
       <TextField id="outlined-basic" label="Write Something" variant="outlined" />
       <button className="submit flex gap-3 justify-center hover:scale-110 transition-all bg-dark text-white font-bold p-3 rounded-lg"><SportsCricketIcon/>Check</button>
  </div>;
};

export default Form;
