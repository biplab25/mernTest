const express = require("express");
const postController = require("../controller/postController");

const postRouter = express.Router();

postRouter.get("/getAllPosts", postController.getAllPosts);
postRouter.post("/createPost", postController.createPost);
postRouter.delete("/deletePost/:id", postController.deletePost);

module.exports = postRouter;
