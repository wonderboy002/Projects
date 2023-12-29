import React, { useState } from 'react';
import { account } from "../Appwrite/appwrite";
//for creating accounts of users
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [user,setUser]=useState({
    email : "",
    password : ""
  })

  const navigate=useNavigate();

  const loginUser=async ()=>{
    try {
     await account.createEmailSession(user.email,user.password);
     alert("User Successfully logged in");
     navigate("/Profile");
    }
    catch(e){

    }
  }
  return (
    <div className='w-full mt-40 h-full flex flex-col gap-6 items-center justify-center'>
      <h1 className='text-4xl font-extrabold'>Login Form</h1>
        <input
        type="email"
        name="email"
        placeholder="Enter Email"
        className="p-4 border-md"
        value={user.email}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
      />
      <input
        type="password"
        name="password"
        placeholder="Enter Password "
        className="p-4 border-md"
        value={user.password}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
      />
       <button
        className="p-4 bg-emerald-500 w-1/5 rounded-xl font-bold mx-auto"
        onClick={loginUser}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
