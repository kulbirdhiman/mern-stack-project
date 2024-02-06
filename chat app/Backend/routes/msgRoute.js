import express from 'express'
import { sendmsg } from '../controllers/msgcontroller.js'
import authuser from '../midlewares/authmidleware.js'
const router = express.Router()

router.post("/", authuser, sendmsg)
export default router