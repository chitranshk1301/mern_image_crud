const upload = require('../utils/multer');
const router = require('express').Router();
const { getAllPosts, createPost, getPostById } = require('../controllers/post');

router.get('/posts', getAllPosts);
router.post('/post', upload.single('image'), createPost);
router.get('/post/:id', getPostById);

module.exports = router;