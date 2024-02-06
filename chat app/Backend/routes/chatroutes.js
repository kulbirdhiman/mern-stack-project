import express from 'express'
import { accessChat, createGrp, renamegrp, removegrp, addUser, fecthChat } from '../controllers/chatcontrollers.js'
import authuser from '../midlewares/authmidleware.js'
const router = express.Router()
router.post("/", authuser, accessChat)
router.get("/fecth", authuser, fecthChat)
router.post("/creategroup", authuser, createGrp)
router.put("/rename", authuser, renamegrp)
router.put("/remove", authuser, removegrp)
router.put("/adduser", authuser, addUser)
export default router