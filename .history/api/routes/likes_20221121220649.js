import express from "express";
import { get } from "../controllers/likes.js";

const router = express.Router()

router.get("/", getLikes)

export default router