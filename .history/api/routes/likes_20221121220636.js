import express from "express";
import {  } from "../controllers/likes.js";

const router = express.Router()

router.get("/", getLikes)

export default router