import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const usershecma = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unquie: true },
    password: { type: String, required: true },
    pic: { type: String, default: "" }

})
// User.insertONe({ "name": "karan", "email": "dhimankaran", password: "134433" })
usershecma.pre("save", async function (next) {
    if (!this.isModified) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

usershecma.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


const User = mongoose.model('user', usershecma)
export default User