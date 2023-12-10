import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,Route,RouterProvider} from "react-router-dom";
import {Layout,Footer,Navbar} from "./Components/index.js";
import HomePage from './Pages/HomePage.jsx';

const router=createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
        path : "/",
        element : <HomePage/>
      },
     {
      path : "/Login",
      element : <h1>Login Up Here</h1>
     },
     {
      path : "/Signup",
      element : <h1>Sign Up Here</h1>
     },
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
