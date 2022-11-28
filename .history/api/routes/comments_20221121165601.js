import express from "express";
import {getComments, ad  } from "../controllers/comments.js";

const router = express.Router()

router.get("/", getComments)
router.get("/", addComment)

export default router