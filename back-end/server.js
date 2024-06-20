// server.js

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Enable CORS for client-side
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello Hack-O-Ween!');
});

// Use Comment Routes
const commentRoutes = require('./routes/comments');
app.use('/api/comments', commentRoutes);

// Use User Routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

// Use Crowd Map Routes
const crowdMapRoutes = require('./routes/crowdmaps');
app.use('/api/crowd-map', crowdMapRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
