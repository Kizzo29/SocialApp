import Express from "express";
import userRoutes from "./routes/users.js"

const app = Express()

app.use("/api")

app.listen(8800, ()=> {
    console.log("API working!")
})