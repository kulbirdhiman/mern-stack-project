import expressAsyncHandler from "express-async-handler";
import Jwt from "jsonwebtoken";
import User from '../models/usershecma.js'
const authuser = expressAsyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];

            //decodes token id
            const decoded = Jwt.verify(token, "karan");

            req.user = await User.findById(decoded.id).select("-password");

            next()
        } catch (error) {
            console.log(error)
        }
    }
    if (!token) {
        throw new Error('no Token')
    }
})
export default authuser