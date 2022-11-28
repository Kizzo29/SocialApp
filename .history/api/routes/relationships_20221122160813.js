import express from "express";
import { getLikes,addLike,deleteLike } from "../controllers/likes.js";

const router = express.Router()

router.get("/", getLRelationS)
router.post("/", addRelationS)
router.delete("/", deleteRelationS)

export default router