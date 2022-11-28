import Express from "express";
import userroutes from "./routes/users"

const app = Express()


app.listen(8800, ()=> {
    console.log("API working!")
})