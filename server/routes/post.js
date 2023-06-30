const upload = require('../utils/multer');
const router = require('express').Router();
const { getAllPosts, createPost } = require('../controllers/post');

router.get('/posts', getAllPosts);
router.post('/post', upload.single('image'), createPost);

module.exports = router;