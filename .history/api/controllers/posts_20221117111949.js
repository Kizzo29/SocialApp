import { db } from "../connect.js";
import Jwt from "jsonwebtoken";

export const getPosts =(req,res) =>{
  const q = `SELECT p.*,u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) 
  JOIN relationships AS r ON (p.userId = r.followedUserId AND r.followerUserId = ?)`;  

  db.query(q, (err,data)=>{
    if (err) return res.status(500).json(err);
return res.status(200).json(data)
  })
}