import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import axios from 'axios';

export const UserContext=createContext({});
//context for storing login information

export function UserContextProvider({children}){
    const [name,setname]=useState(null);
    const [id,setId]=useState(null);
    useEffect(()=>{
        axios.get('/profile',{withCredentials : true}).then(response=>{
            console.log("this is resposne : ",response);
        })
    },[])
    return <UserContext.Provider value={{name,setname,id,setId}}>
        {children}
    </UserContext.Provider>
}
