const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const logRoutes = require('./routes/logs');

const app = express();

// Middleware
app.use(express.json());

// Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/shiftlog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Routes
app.use('/login/auth', authRoutes);
app.use('/summary/logs', logRoutes);

// Start Server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
