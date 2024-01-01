import { useEffect, useState } from "react";
import { auth } from "./firebase-conf";
import { createUserWithEmailAndPassword, signInWithPopup ,signOut} from "firebase/auth";
import { gProvider } from "./firebase-conf";
function App() {
  const[flag,setflag]=useState(false);
  const signin = async (e) => {
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      alert("user created");
      setflag(true);
    } catch (e) {
      console.log("something went wrong signing in");
      console.log(e);
    }
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const googleSignin = async () => {
    try {
      await signInWithPopup(auth, gProvider);
      alert("user created");
      console.log(auth?.currentUser?.email);
      setflag(true);
    } catch (e) {
      console.log("something went wrong signing in with google");
      console.log(e);
    }
  };
  const logoutUser=async ()=>{
    try {
      await signOut(auth);
      alert("Logged out successfully");
      setflag(false);
    } catch (e) {
      console.log("something went wrong signing");
      console.log(e);
    }
  }
  useEffect(() => {
    console.log(auth?.currentUser?.email);
  },[flag,user]);
  return (
    <>
      <div className="form">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="enter email"
          value={user.email}
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />
        <input
          type="password"
          name="password"
          id="pwd"
          placeholder="enter your password"
          value={user.password}
          onChange={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />
        <button onClick={signin}>Sign in</button>
        <button onClick={googleSignin}>Sign in with google</button>
        {flag && <button onClick={logoutUser}>Logout</button>}
      </div>
    </>
  );
}

export default App;
