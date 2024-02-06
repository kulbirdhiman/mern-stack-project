import express from "express";
import { registerUser, login, alluser, } from '../controllers/useCont.js'
import authuser from "../midlewares/authmidleware.js"
const router = express.Router()
router.post("/signup", registerUser)
router.post("/login", login)
router.get('/', authuser, alluser)

export default router