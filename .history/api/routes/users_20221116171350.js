import express from "express";
import { getUser } from "../controllers/user";

const router = express.Router()

router.get("/test", getUser)

export default router