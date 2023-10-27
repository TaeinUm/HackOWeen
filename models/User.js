// User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  // other fields
});

const User = mongoose.model('User', userSchema);

module.exports = User;
