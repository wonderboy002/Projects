// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";//setting authentication in project

const firebaseConfig = {
  apiKey: "AIzaSyBrMPpUFeyTX_9MBtQQQ-3FUIvb7MO6fYQ",
  authDomain: "baas-f.firebaseapp.com",
  projectId: "baas-f",
  storageBucket: "baas-f.appspot.com",
  messagingSenderId: "261228118636",
  appId: "1:261228118636:web:ea933b969d8fdcd2544e49",
  measurementId: "G-SXWVZ6GMH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);//set the auth service in our app
export const gProvider=new GoogleAuthProvider();