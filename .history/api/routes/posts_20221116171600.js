import express from "express";
import {  } from "../controllers/posts.js";

const router = express.Router()

router.get("/find/:userId", getUser)

export default router