import express from "express";
import { getRelationships,addRelationship,deleteRelationship } from "../controllers/relationship.js";

const router = express.Router()

router.get("/", getRelationships)
router.post("/", addRelationShip)
router.delete("/", deleteRelationShip)

export default router