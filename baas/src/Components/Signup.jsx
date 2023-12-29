import React, { useEffect, useState } from "react";
import { account } from "../Appwrite/appwrite";
//for creating accounts of users
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  //code to sign up the user
  const signUpUser = async () => {
    const promise = account.create(
      uuidv4(),
      user.email,
      user.password,
      user.name
    );
    promise.then(
      function (response) {
        console.log(response);
        navigate('/')
      },
      function (error) {
        console.log(error);
      }
    );
  };


  const google=()=>{
    account.createOAuth2Session('google');
  }

  return (
    <div className="mt-40 w-full h-full flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-extrabold">Signup Form</h1>
      <input
        type="text"
        name="name"
        placeholder="Enter User Name"
        className="p-4 border-md"
        value={user.name}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
      />
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
        onClick={signUpUser}
        className="p-4 bg-emerald-500 w-1/5 rounded-xl font-bold mx-auto"
      >
        Submit
      </button>
      <button onClick={google} className="w-[30px] h-[30px]"><img src="https://cdn-icons-png.flaticon.com/128/281/281764.png" alt="" /></button>
    </div>
  );
};

export default Signup;
