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
import * as math from "mathjs";
import audiot from "../audio/thala.mp3";
import moye from "../audio/moye_moye.mp3";
import gali from "../audio/gali.mp3";

const Form = () => {
  const [flag, setflag] = useState(false);
  const [open, setopen] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [text, setText] = useState("");
  const [IMG, setIMG] = useState("");
  const [audio, setAudio] = useState(null);

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

    const cleanedText = text.replace(/[^0-9+\-*/]/g, "");
    try {
      if (
        math.evaluate(cleanedText) === 7 ||
        cleanedText.indexOf("7") !== -1 ||
        text.length === 7
        || text.split(/\s+/).filter(word => word.length > 0).length===7
      ) {
        setAudio(audiot);
        setIMG(
          "https://media4.giphy.com/media/WDNszsLbxgVtE8Entw/giphy.webp?cid=ecf05e47k9h4o5srwdlykcrvzpoiuy6xiqibyv206f6zj7v7&ep=v1_gifs_search&rid=giphy.webp&ct=g"
        );
      }
      else if (text==="virat captain>dhoni captain" || text==="dhoni hot pics" || text==="dhoni is gay"){
        setAudio(gali);
        setIMG("https://i.pinimg.com/474x/78/23/21/7823211d2e22d9b905fd7c024d71f2df.jpg");
      }
       else {
        setAudio(moye);
        setIMG(
          "https://media2.giphy.com/media/TB5qs3ZlVXIfD9TfLb/giphy.webp?cid=ecf05e471vr5uxzga5d195uf86v8jfo414aw4abhakulcaul&ep=v1_gifs_search&rid=giphy.webp&ct=g"
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="Form mx-auto flex flex-col gap-4 bg-white p-12 rounded-md">
      {confetti && <Confetti width="700px" className="w-full" height="600px" />}
      <TextField
        id="outlined-basic"
        label="Write Something"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleButtonClick}
        className="submit flex gap-3 justify-center hover:scale-110 transition-all bg-dark text-white font-bold p-3 rounded-lg"
      >
        <SportsCricketIcon />
        Check
      </button>
      {open && <CustomD open={open} IMG={IMG} audio={audio} />}
    </div>
  );
};

export default Form;
