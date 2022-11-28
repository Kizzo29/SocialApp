import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment/moment.js";

export const getPosts = (req,res) =>{
  
 const token = req.cookies.accessToken;
 if(!token) return res.status(401).json("Not logged in");

 jwt.verify(token, "secretkey", (err, userInfo)=>{
    if(err) return res.status(403).json("Token is not valid");

    const q = `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) 
   LEFT JOIN relationships AS r ON (p.userId = r.followedId) WHERE r.followerId=? OR p.userId=?
   ORDER BY p.created DESC`;  
  
    db.query(q, [userInfo.id, userInfo.id], (err,data)=>{
      if (err) return res.status(500).json(err);
  return res.status(200).json(data)
    });

 });

}

export const addPost = (req,res) =>{
  
  const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in");
   
    jwt.verify(token, "secretkey", (err, userInfo)=>{
       if(err) return res.status(403).json("Token is not valid");
   
       const q = `INSERT INTO posts ("desc","img","created","userId") VALUES ?`;
       
       const values = [
         req.body.desc,
         req.body.img,
         moment(Date.now()),
      ]
         
     
       db.query(q, [userInfo.id, userInfo.id], (err,data)=>{
         if (err) return res.status(500).json(err);
     return res.status(200).json(data)
       });
   
    });
   
   }