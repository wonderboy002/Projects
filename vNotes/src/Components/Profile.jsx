import React from "react";
import { useEffect, useState } from "react";
import { account } from "../appwrite/appwrite";
//for creating accounts of users
import { useNavigate, useSearchParams } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const [ud, setUd] = useState(null);
  useEffect(() => {
    const data = account.get();
    data.then(
      function (response) {
        if (response) {
          setUd(response);
        }
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const logoutUser = async () => {
    try {
      await account.deleteSession("current");
      alert("User logged out successfully");
      navigate("/Signup");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(ud);
    const existingAccount =  account.get({ email: "nipunkup@gmail.com" });
    console.log("Existing Account:", existingAccount);

  }, [ud]);
  return (
    <>
      <div>This is a profile page</div>
      <button onClick={logoutUser} className="bg-red-400 p-4 hover:bg-red-600">Logout</button>
    </>
  );
};

export default Profile;
