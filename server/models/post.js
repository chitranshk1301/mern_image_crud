const mongoose = require('../db');
require('dotenv').config();

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            unique: true,
        },
        description: {
            type: String,
            required: [true, 'Description is required']
        },
        views: {
            type: Number,
            default: 0
        },
        imageUrl: {
            type: String,
            required: [true, 'Image is required']
        },
        cloudinary_id: {
            type: String,
            required: [true, 'Cloudinary ID is required']
        }
    },
    {
        timestamps: true
    }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;

