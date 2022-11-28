import express from "express";
import { getLikes } from "../controllers/likes.js";

const router = express.Router()

router.get("/", getLikes)
router.post("/", addLikes)
router.delete("/", g)

export default router