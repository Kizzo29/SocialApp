import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider =({children}) => {
   const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
    );

  const login = async () => {
  const res = axios.post("http://localhost:8800/api/auth/login", in)
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