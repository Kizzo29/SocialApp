import Express from "express";
import userroutes from "./routes/"

const app = Express()


app.listen(8800, ()=> {
    console.log("API working!")
})