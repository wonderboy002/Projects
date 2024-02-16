import React, { useContext, useEffect } from 'react';
import { UserContext } from '../Contexts/UserContext';
import Register from '../Components/Register';

const Routes = () => {
    const {name,id}=useContext(UserContext);
    useEffect(()=>{
        console.log(id);
        console.log(name);
    })

    
    if (name){
        return "logged in";
    }
  return (
    <div>
      <Register/>
    </div>
  );
}

export default Routes;
