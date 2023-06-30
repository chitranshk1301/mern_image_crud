const Post = require("../models/post");
const cloudinary = require("../utils/cloudinary");

const getAllPosts = async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
}

const createPost = async (req, res) => {
    const result = await cloudinary.uploader.upload(req.file.path);
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        imageUrl: result.secure_url,
        cloudinary_id: result.public_id
    });
    await post.save();
    res.json(post);
}

module.exports = {
    getAllPosts,
    createPost
}