// commentControllers.js

const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
  try {
    const newComment = new Comment({
      thread: req.body.thread,
      coords: req.body.coords,
      timestamp: req.body.timestamp,
      // author: req.user.id, // remove or comment out this line
    });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    console.error('Error creating comment:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    console.error('Error fetching comments:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};