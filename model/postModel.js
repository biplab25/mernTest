const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    content: {
        type: String,
        maxlength: 70,
        required: [true, "Post must have some content"],
    },
});

const Post = new mongoose.model("Post", postSchema);

module.exports = Post;
