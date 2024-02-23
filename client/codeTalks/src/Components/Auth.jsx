import React, { useState } from "react";
import axios from "axios";
import temp1 from "../assets/temp1.avif";
function Auth() {
  const [isSignUp, setisSignUp] = useState(true);
  return (
    <div className="form-container bg-blue-500 w-full h-full flex  items-center justify-center">
      <div className="form w-2/5 m-10 bg-white p-8 rounded-lg">
        <h1 className="font-bold mb-4 text-lg">
          {isSignUp ? "Sign Up" : "Sign in"}
        </h1>
        <form onSubmit={() => {}}>
          {isSignUp && (
            <div className="input-fields flex flex-col justify-center gap-1">
              <div className="mt-2 fullName flex flex-col">
                <label htmlFor="Full Name">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="border-lg p-2"
                />
              </div>
              <div className="mt-2 Username flex flex-col">
                <label htmlFor="UserName">UserName</label>
                <input
                  type="text"
                  placeholder="Enter userName"
                  className="border-lg p-2"
                />
              </div>

              <div className="mt-2 phoneNumber flex flex-col">
                <label htmlFor="Phone Number">Phone Number</label>
                <input
                  type="number"
                  placeholder="Enter Phone Number"
                  className="border-lg p-2"
                />
              </div>
              <div className="mt-2 avatarUrl flex flex-col">
                <label htmlFor="avatarUrl">avatarUrl</label>
                <input
                  type="text"
                  placeholder="Enter avatar Url"
                  className="border-lg p-2"
                />
              </div>
              <div className="mt-2 password flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="border-lg p-2"
                />
              </div>
              {/* <div className="mt-2 Confirmpassword flex flex-col">
                <label htmlFor="Confirmpassword">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border-lg p-2"
                />
              </div> */}
            </div>
          )}
        </form>
      </div>
      <div className="auth__form-container_image h-full w-4/5">
        <img
          src={temp1}
          alt=""
        />
      </div>
    </div>
  );
}

export default Auth;
