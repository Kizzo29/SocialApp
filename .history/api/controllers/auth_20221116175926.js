import { db } from "../connect"
import bcrypt from "bcryptjs"

export const register = (req, res) => {

    //check user if exists
 const q = "SELECT FROM users WHERE username = ?"

 db.query(q, [req.body.username], (err, data)=> {
    if(err) return res.status(500).json(err)
    if(data.length) return res.status(409).json("user already exists")
 })
    //create a new user
       //hash the password
const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(req.body.password, salt)

const qI = "INSERT INTO users(`username`,`email`,`password`,`name`) VALUES (?)"

const values = [req.body.username,req.body.email,hashedPassword,req.body.name]

db.query(qI, [values], (err,data) => {
    if(err) return res.status(500).json.err;
 return res.status(200).json("User ")
})

}

export const login = (req, res) => {
    
}

export const logout = (req, res) => {
    
}