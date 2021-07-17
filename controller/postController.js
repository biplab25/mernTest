const Post = require("../model/postModel");

exports.getAllPosts = async function (req, res, next) {
    const posts = await Post.find();
    console.log(posts);
    res.status(200).json({
        status: "success",
        posts,
    });
};

exports.createPost = async function (req, res, next) {
    const newPost = await Post.create({ content: req.body.content });
    res.status(200).json({
        status: "success",
        message: "post created",
        newPost,
    });
};

exports.deletePost = async function (req, res, next) {
    await Post.findOneAndDelete({ _id: req.params.id });
    res.status(204).json({
        status: "success",
        message: "Post deleted",
    });
};
