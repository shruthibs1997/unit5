import { createContext, useState } from "react";

export const AuthContext = createContext({token:'',handleclick:()=>{}});

function AuthContextProvider({children}){
    const [token , setToken ]=useState('');


    const handleclick = ()=>{
        setToken("personloggedin");
    }
    
    return(
        <AuthContext.Provider value={{token,handleclick}}>{children}</AuthContext.Provider>
    )
}
export default AuthContextProvider;