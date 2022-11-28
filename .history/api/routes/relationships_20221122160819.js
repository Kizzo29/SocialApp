import express from "express";
import { getLikes,addLike,deleteLike } from "../controllers/likes.js";

const router = express.Router()

router.get("/", getRelationShips)
router.post("/", addRelationShips)
router.delete("/", deleteRelationShips)

export default router