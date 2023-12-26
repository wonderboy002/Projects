import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
// import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import CustomD from "./CustomD";
import * as math from 'mathjs';


const Form = () => {
  const [flag, setflag] = useState(false);
  const [open, setopen] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [text,setText]=useState("");
  const [IMG,setIMG]=useState("");
  

  // const { width, height } = useWindowSize();
  const handleClickOpen = () => {
    setopen(true);
  };

  const handleClose = () => {
    setopen(false);
  };

  const handleButtonClick = () => {
    setopen(!open);
    setConfetti(!confetti);
    setIMG("https://i.pinimg.com/474x/78/23/21/7823211d2e22d9b905fd7c024d71f2df.jpg")
    try {
       if (math.evaluate(text)==7 || text.indexOf("7")!==-1){
        alert("belongs to thalaverse")
       }
    
       else {
        alert("does not belong to thalaverse");
       }
    }
    catch(e){
      console.log(e);
    }
  };

  return (
    <div className="Form mx-auto flex flex-col gap-4 bg-white p-12 rounded-md">
      {confetti && <Confetti width="700px" className="w-full" height="675px" />}
      <TextField
        id="outlined-basic"
        label="Write Something"
        variant="outlined"
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />
      <button
        onClick={handleButtonClick}
        className="submit flex gap-3 justify-center hover:scale-110 transition-all bg-dark text-white font-bold p-3 rounded-lg"
      >
        <SportsCricketIcon />
        Check
      </button>
      {open && (
        <CustomD open={open} IMG={IMG}/>
      )}
    </div>
  );
};

export default Form;
