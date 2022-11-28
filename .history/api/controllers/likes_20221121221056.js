import { db } from "../connect.js"
import jwt from "jsonwebtoken"

export const getLikes = (req, res) => {
     
 const q = "SELECT userId from likes WHERE postId = ?";    
     
       db.query(q, [values], (err,data)=>{
         if (err) return res.status(500).json(err);
     return res.status(200).json(data)
       });
   
    }