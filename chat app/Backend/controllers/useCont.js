import mongoose from "mongoose";
import expressAsyncHandler from "express-async-handler";
import User from '../models/usershecma.js';
import genrateToken from '../Db/genrateToken.js'
import { json } from "express";
const registerUser = expressAsyncHandler(async (req, res) => {

    const { name, email, password, pic } = req.body;
    console.log(req.body)
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please Enter all the Feilds");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
        pic,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token: genrateToken(user._id),

        });
    } else {
        res.send(400);
        throw new Error("User not found");
    }
});
const login = expressAsyncHandler(async (req, res) => {


    const { email, password, } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token: genrateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
});


const alluser = expressAsyncHandler(async (req, res) => {
    const keyword = req.query.search ? {
        $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } }
        ]
    } : {};

    try {
        const users = await User.find(keyword).find({ _id: { $ne: req.user._id } })

        res.send(users);
        console.log(req.user._id)
        console.log(req)
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

export default alluser;


export { registerUser, login, alluser };
