import express from "express";
import {getComments  } from "../controllers/comments.js";

const router = express.Router()

router.get("/", getComments)
router.get("/", add)

export default router