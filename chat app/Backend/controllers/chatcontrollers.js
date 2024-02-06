import expressAsyncHandler from 'express-async-handler';
import Chat from '../models/chatshecma.js'
import User from "../models/usershecma.js";
import { json } from 'express';
const accessChat = expressAsyncHandler(async (req, res) => {
    try {
        const { userId } = req.body;

        if (!userId) {
            return res.status(400).send({ message: "UserId parameter not sent with request" });
        }

        let isChat = await Chat.find({
            isGroupChat: false,
            $and: [
                { users: { $elemMatch: { $eq: req.user._id } } },
                { users: { $elemMatch: { $eq: userId } } },
            ],
        }).populate("users", "-password").populate("latestMessage");

        isChat = await User.populate(isChat, {
            path: "latestMessage.sender",
            select: "name pic email",
        });

        if (isChat.length > 0) {
            res.send(isChat[0]);
        } else {
            const chatData = {
                chatName: "sender",
                isGroupChat: false,
                users: [req.user._id, userId],
            };

            const createdChat = await Chat.create(chatData);
            const fullChat = await Chat.findOne({ _id: createdChat._id }).populate(
                "users", "-password"
            );
            res.status(200).json(fullChat);
        }
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});
const fecthChat = expressAsyncHandler(async (req, res) => {
    try {
        const data = await Chat.find({ users: { $eq: req.user._id } }).populate({
            path: 'users',
            select: "name emial pic "
        }).populate("groupAdmin").populate("latestMessage").sort({ updatedAt: -1 })
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})
const createGrp = expressAsyncHandler(async (req, res) => {
    if (!req.body.users || !req.body.name) {
        return res.status(400).send({ message: "Please Fill all the feilds" });
    }

    var users = JSON.parse(req.body.users);

    if (users.length < 2) {
        return res
            .status(400)
            .send("More than 2 users are required to form a group chat");
    }

    users.push(req.user);
    console.log(req.user)
    try {
        const groupChat = await Chat.create({
            chatName: req.body.name,
            users: users,
            isGroupChat: true,
            groupAdmin: req.user,
        });

        const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
            .populate("users", "-password")
            .populate("groupAdmin", "-password");

        res.status(200).json(fullGroupChat);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

const renamegrp = expressAsyncHandler(async (req, res) => {
    const { grpId, chatName } = req.body
    const updatedChat = await Chat.findByIdAndUpdate(
        grpId,
        {
            chatName: chatName,
        },
        {
            new: true,
        }
    )
        .populate("users", "-password")
        .populate("groupAdmin", "-password");

    if (!updatedChat) {
        res.status(404);
        throw new Error("Chat Not Found");
    } else {
        res.json(updatedChat);
    }
})
const removegrp = expressAsyncHandler(async (req, res) => {
    const { grpId, userId } = req.body
    const remove = Chat.findByIdAndUpdate(
        grpId, {
        $pull: { users: userId }
    }, {
        new: true
    }
    ).populate("users", "-password").populate("groupAdmin", "-password")
    if (!remove) {
        console.log("something wrong")
    }
    res.send(remove)
})
const addUser = expressAsyncHandler(async (req, res) => {
    const { chatId, userId } = req.body;

    // check if the requester is admin

    const added = await Chat.findByIdAndUpdate(
        chatId,
        {
            $push: { users: userId },
        },
        {
            new: true,
        }
    )
        .populate("users", "-password")
        .populate("groupAdmin", "-password");

    if (!added) {
        res.status(404);
        throw new Error("Chat Not Found");
    } else {
        res.json(added);
    }
})
export { accessChat, createGrp, renamegrp, removegrp, addUser, fecthChat };
