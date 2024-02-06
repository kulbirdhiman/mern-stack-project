import mongoose from "mongoose";
let msgschema = mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    content: { type: true, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "chat" }

}, {
    timestamp: true
})
const Message = mongoose.model("msg", msgschema)
export default Message