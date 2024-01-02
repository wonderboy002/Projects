import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhUN2PZ-jTUXsOKTWzptQt13pi7-ivg-Y",
  authDomain: "vnotes-34069.firebaseapp.com",
  projectId: "vnotes-34069",
  storageBucket: "vnotes-34069.appspot.com",
  messagingSenderId: "1022536861798",
  appId: "1:1022536861798:web:6682b07d100f7dc39385a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);//set the auth service in our app
export const google=new GoogleAuthProvider();