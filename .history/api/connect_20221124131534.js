import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user:"ro",
    password:"Black99!",
    database:"social"
})