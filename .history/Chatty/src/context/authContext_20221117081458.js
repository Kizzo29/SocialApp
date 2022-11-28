import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider =({children}) => {
   const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
    );

  const login = () => {
  
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