import React, { useEffect, useState } from "react";
import { account } from "../Appwrite/appwrite";
//for creating accounts of users
import { useNavigate, useSearchParams } from "react-router-dom";
function Profile() {
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

  useEffect(() => {
    console.log(ud);
  }, [ud]);
  const logoutUser = async () => {
    try {
      await account.deleteSession("current");
      alert("User logged out successfully");
      navigate("/Signup");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="h-full w-full flex flex-col gap-6 items-center justify-center">
      <h1 className="font-extrabold text-3xl">User Details</h1>
       {
        ud && <div>
          hello {ud.name}
          <button onClick={logoutUser} className="p-4 text-white bg-red-600">Logout</button>
        </div>
      
       }
    </div>
  );
}

export default Profile;
