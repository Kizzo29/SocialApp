import express from "express";
import {getPosts,addPosts} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts)
router.get("/", getPosts)


export default router