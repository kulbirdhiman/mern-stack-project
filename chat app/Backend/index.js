import connectDb from "./Db/connectDb.js";
import express from 'express'
import userRoutes from './routes/userRoutes.js'
import chatroutes from './routes/chatroutes.js'
import msgRoute from './routes/msgRoute.js'
const app = express()
app.use(express.json())
const port = process.env.port || 5000
app.use('/api', userRoutes)
app.use("/chat", chatroutes)
app.use('/msg', msgRoute)
connectDb("mongodb://localhost:27017/movies")
app.listen(port, () => console.log(`server up on ${port} port`))