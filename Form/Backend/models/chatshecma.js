import mongoose from "mongoose";
const chatShecma = mongoose.Schema({
    chatName: { type: String, trim: true },
    isGroup: { type: Boolean, default: false },
    Users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
    latestMsg: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "msg"
    },
    GroupAdmin: { type: mongoose.Schema.Types.ObjectId }

},
    {
        timestamps: true
    }
)
const chat = mongoose.model("chat", chatShecma)
export default chat