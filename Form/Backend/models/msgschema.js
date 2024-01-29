import mongoose from "mongoose";
let msgschema = mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    content: { type: true, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "chat" }

}, {
    timestamp: true
})
const msg = mongoose.model("msg", msgschema)
export default msg