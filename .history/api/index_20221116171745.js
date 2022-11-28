import Express from "express";
import userRoutes from "./routes/users.js"
import userRoutes from "./routes/users.js"
import userRoutes from "./routes/users.js"
import userRoutes from "./routes/users.js"
import userRoutes from "./routes/users.js"

const app = Express()

app.use("/api/users", userRoutes)

app.listen(8800, ()=> {
    console.log("API working!")
})