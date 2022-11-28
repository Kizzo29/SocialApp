import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext()

export const AuthContextProvider =({children}) => {
   const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
    );

  const login = async () => {
  const res = axios.post("http://localhost:8800/api/auth/login", inputs,{
    withCredentials:true,
  });
  }

   useEffect(() => {
    
     localStorage.setItem("currentUser", JSON.stringify(currentUser))
   }, [currentUser])
   
return(
    <AuthContext.Provider value={{currentUser, login}}>
    {children}
    </AuthContext.Provider>
)

}