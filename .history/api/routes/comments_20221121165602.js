import express from "express";
import {getComments, addComment  } from "../controllers/comments.js";

const router = express.Router()

router.get("/", getComments)
router.get("/", addComment)

export default router