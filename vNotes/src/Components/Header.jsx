import React from "react";

const Header = () => {
  return (
    <div className="w-full Header bg-red-500 flex flex-col text-white p-8 h-[450px]">
      <div className="navigation flex items-center">
        <h1 className="text-3xl font-bold" id="title">
          vNotes
        </h1>
        <div className="navs mx-auto flex font-semibold text-lg gap-6 justify-center">
          <div className="cursor-pointer hover:scale-105">Home</div>
          <div className="cursor-pointer hover:scale-105">Notes</div>
          <div className="cursor-pointer hover:scale-105">Project Management</div>
        </div>
      </div>
      <div className="punchline  my-auto flex flex-col gap-6 mx-auto">
        <h1 className="text-3xl">
          Take Your Productivity to next steps using our notes app
        </h1>
        <div className="buttons mx-auto flex gap-4">
          <button className="signup p-4 rounded-xl transition-all hover:bg-black hover:scale-95">
             Sign up
          </button>
          <button className="login p-4 roundex-xl transition-all hover:bg-white hover:rounded-xl hover:text-black hover:scale-95">Login</button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
