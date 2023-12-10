import React from "react";
import Logo from "../Images/Home.jpg";

const HomePage = () => {
  return (
    <div className="w-full p-8 gap-4 flex justify-center items-center homepage">
      <div className="left w-1/3">
        {" "}
        <img
          src="https://static.vecteezy.com/system/resources/previews/003/380/098/non_2x/professional-business-collaboration-free-vector.jpg"
          alt=""
          className="w-[350px] h-[350px]"
        />
      </div>
      <div className="right w-2/3 h-[350px] p-6 flex flex-wrap items-center justify-center">
           <h1 className="text-4xl">Elevate Your Productivity with Seamless Note-taking, Task Management, and File Organization</h1>
           <button className="get">Get Organised</button>
      </div>
    </div>
  );
};

export default HomePage;
