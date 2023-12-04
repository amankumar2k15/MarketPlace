const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: { type: String, required: true, },
    email: { type: String, required: true, },
    password: { type: String, required: true, },
    repeatPassword: { type: String, required: true, },
})

const UserModelMP = mongoose.model("UserModelMP", userSchema)

module.exports = UserModelMP