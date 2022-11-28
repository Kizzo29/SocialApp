import express from "express";
import { getLikes,addLike,deleteLike } from "../controllers/likes.js";

const router = express.Router()

router.get("/", getL)
router.post("/", add)
router.delete("/", delete)

export default router