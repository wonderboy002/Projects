import React from "react";
import {Link, NavLink} from "react-router-dom";
const Navbar = () => {
  return (
    <div className="p-8 bg-black text-white w-full flex items-center">
      <h1 className="font-bold text-3xl">DocShare</h1>

      <div className="links font-semibold gap-8 ml-auto flex">
        <button className="hover:bg-purp p-3 hover:rounded-full">
          <Link to="/">Home</Link>
        </button>
        <button className="hover:bg-purp p-3 hover:rounded-full">
          <Link to="/Login">Login</Link>
        </button>
        <button className="hover:bg-purp p-3 hover:rounded-full">
          <Link to="/Signup">Signup</Link>
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;