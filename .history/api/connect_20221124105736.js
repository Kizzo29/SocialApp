import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user:"root@localhost",
    password:"Black99!",
    database:"social"
})