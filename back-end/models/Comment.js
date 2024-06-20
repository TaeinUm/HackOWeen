// Comment.js

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  thread: { type: String, required: true },
  coords: {
    accuracy: { type: Number },
    altitude: { type: Number },
    altitudeAccuracy: { type: Number },
    heading: { type: Number },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    speed: { type: Number },
  },
  timestamp: { type: Number, required: true },
  //author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
