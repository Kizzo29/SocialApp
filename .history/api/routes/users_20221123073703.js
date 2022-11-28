import express from "express";
import { getUser, update } from "../controllers/user.js";

const router = express.Router()

router.get("/find/:userId", getUser)
router.put("/", updateUser)

export default router