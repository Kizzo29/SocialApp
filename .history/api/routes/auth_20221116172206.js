import express from "express";
import {  } from "../controllers/auth.js";

const router = express.Router()

router.get("login", login)
router.get("register", register)
router.get("login", login)


export default router