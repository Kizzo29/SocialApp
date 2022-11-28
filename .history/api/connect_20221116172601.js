import mysql from "mysql"

export const db = mysql.createConnection({
    host: "local"
})