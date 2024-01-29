import express from "express";
import { registerUser, login } from '../controlers/useCont.js'
const router = express.Router()
router.post("/all", registerUser).post("/login", login)
export default router