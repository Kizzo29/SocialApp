import express from "express";
import {  } from "../controllers/comments.js";

const router = express.Router()

router.get("/", getComments)

export default router