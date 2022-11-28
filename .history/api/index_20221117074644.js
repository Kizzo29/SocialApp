import express from "express";

const app = express()

import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/posts.js"
import commentRoutes from "./routes/comments.js"
import likeRoutes from "./routes/likes.js"
import cookieParser from "cookie-parser";
import cors from "cors"

//middlewares
app.use(express.json());

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(cookieParser())


app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/likes", likeRoutes)

app.listen(8800, ()=> {
    console.log("API working!")
})