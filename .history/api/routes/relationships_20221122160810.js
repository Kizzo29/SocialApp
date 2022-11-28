import express from "express";
import { getLikes,addLike,deleteLike } from "../controllers/likes.js";

const router = express.Router()

router.get("/", getLRelation)
router.post("/", addRelation)
router.delete("/", deleteRelation)

export default router