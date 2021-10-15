const { model, Schema } = require("mongoose")

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String
})

const user = model("User", userSchema)

module.exports = user