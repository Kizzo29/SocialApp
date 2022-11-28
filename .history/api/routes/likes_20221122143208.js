import express from "express";
import { getLikes } from "../controllers/likes.js";

const router = express.Router()

router.get("/", getLikes)
router.

export default router