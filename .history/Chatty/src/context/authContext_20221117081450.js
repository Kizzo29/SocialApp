import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider =({children}) => {
   const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
    );

  const login = () => {
    //To DosetCurrentUser({id:1,name:"Black Kasema", profilePic:""})
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