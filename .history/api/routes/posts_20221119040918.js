import express from "express";
import {getPosts,addPosts} from "../controllers/posts.js";

const router = express.Router();

router.get("/posts", getPosts);
router.post("/", addPosts);


export default router