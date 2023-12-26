import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import audiot from "../audio/thala.mp3";
import moye from "../audio/moye_moye.mp3";
import gali from "../audio/gali.mp3";


const CustomD = ({ open, IMG}) => {
    const [flag,setFlag]=useState(open);
    const thala = new Audio(gali);

    useEffect(()=>{
        if (open){
            thala.play();
        }
    },[open])
 
  const handleClickOpen = () => {
    setFlag(true);
  };

  const handleClose = () => {
    setFlag(false);
  };

  
  return (
    <div>
      <Dialog
        open={flag}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="dialog p-4 md:w-[350px] rounded-md h-[400px]">
          <img
            src={IMG}
            className="h-full w-full"
            alt=""
          />
        </div>
        <DialogActions>
          <button autoFocus onClick={handleClose}>
            Disagree
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomD;
