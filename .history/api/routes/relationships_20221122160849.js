import express from "express";
import { getLikes,addLike,deleteLike } from "../controllers/relations.js";

const router = express.Router()

router.get("/", getRelationShips)
router.post("/", addRelationShip)
router.delete("/", deleteRelationShip)

export default router