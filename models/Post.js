const { model, Schema } = require("mongoose")

const postSchema = new Schema({
    body: String,
    username: String,
    createdAt: String
}
)

const user = model("Post", postSchema)

module.exports = user