import express from "express";
import { getLikes,addLike,deleteLike } from "../controllers/likes.js";

const router = express.Router()

router.get("/", getLi)
router.post("/", addL)
router.delete("/", deleteL)

export default router