// comments.js

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/', commentController.createComment);
router.get('/', commentController.getComments);

// Add more routes as needed

module.exports = router;
