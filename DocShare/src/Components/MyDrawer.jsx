import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const MyDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="ml-auto md:hidden block">
      <button
        onClick={handleToggleDrawer}
        className="md:hidden border border-white ml-auto text-white rounded-full p-2 border-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <Drawer anchor="left" open={open} onClose={handleToggleDrawer}>
        <div className="draw-links w-[350px] flex flex-col items-center gap-8 justify-center text-black p-6">
          <h1 className="font-bold text-3xl">DocShare</h1>

          <Link
            className="font-bold hover:bg-purp p-4 hover:text-white rounded-full w-full text-center"
            to="/"
          >
            Home
          </Link>
          <Link
            className="font-bold hover:bg-purp p-4 hover:text-white rounded-full w-full text-center"
            to="/Signup"
          >
            Signup
          </Link>
          <Link
            className="font-bold hover:bg-purp p-4 hover:text-white rounded-full w-full text-center"
            to="/Login"
          >
            Login
          </Link>
          <Link
            className="font-bold hover:bg-purp p-4 hover:text-white rounded-full w-full text-center"
            to="/"
          >
            Inventory
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default MyDrawer;
