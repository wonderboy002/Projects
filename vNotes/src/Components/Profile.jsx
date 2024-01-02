import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import {signOut} from "firebase/auth";

//for creating accounts of users
import { useNavigate, useSearchParams } from "react-router-dom";
import useLog from "../Context/log";
const Profile = () => {
  const navigate = useNavigate();
  const [ud, setUd] = useState(null);
  const {logged,loggedIn,loggedOut}=useLog();

  const logoutUser = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully");
      loggedOut();
      setUd(null);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUd(user);
        console.log(user.email);
      } else {
        console.log("No user is currently signed in");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div>This is a profile page</div>
      {ud && <button onClick={logoutUser} className="bg-red-500 p-4 rounded-lg">Logout</button>}
    </>
  );
};

export default Profile;
