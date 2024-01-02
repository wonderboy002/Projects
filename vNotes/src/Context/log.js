import {createContext,useContext} from "react";
export const log_context=createContext({
    logged : false,
    loggedIn : ()=>{},
    loggedOut : ()=>{}
})
export const LogProvider=log_context.Provider;
export default function useLog(){
    return useContext(log_context);
}