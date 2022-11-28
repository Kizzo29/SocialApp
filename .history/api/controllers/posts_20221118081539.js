import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getPosts =(req,res) =>{
  
 const token = req.cookies.accessToken;
 if(!token) return res.status(401).json("Not logged in")

 jwt.verify(token, "secretkey", (err, userInfo)=>{
    if(err) return res.status(403).json("Token is not valid")

 })


}