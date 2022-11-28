import { db } from "../connect"

export const register = (req, res) => {

    //check user if exists
 const q = "SELECT FROM users WHERE username = ?"

 db.query(q, )
    //create a new user
       //hash the password
}

export const login = (req, res) => {
    
}

export const logout = (req, res) => {
    
}