import { db } from "../connect";

export const getUser = (req, res) => {
const userId = req.params.userId;
const q = "SELECT * FROM users WHERE id=?";

db.query(q, [userId], (err,data)=>{
    if(err) return res.status(500).json
})
}