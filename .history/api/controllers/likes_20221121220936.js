import { db } from "../connect.js"
import jwt from "jsonwebtoken"

export const getLikes = (req, res) => {
     
 const q = "SELECT INTO comments(`desc`, `created`, `userId`, `postId`) VALUES (?)";
       
       const values = [
         req.body.desc,
         moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
         userInfo.id,
         req.body.postId
      ]
         
     
       db.query(q, [values], (err,data)=>{
         if (err) return res.status(500).json(err);
     return res.status(200).json("Comment created")
       });
   
    });
   
}