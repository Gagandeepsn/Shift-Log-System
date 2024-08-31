const mongoose = require('mongoose');
const User = require('../models/User'); // Assuming User model is in models/User.js

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/shiftlog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Sample user data
const userData = {
    username: "john_doe",
    password: "password123",  // The plain text password will be hashed before saving
    role: "Operator"
};

// Insert the user into the database
const user = new User(userData);
user.save()
    .then(() => {
        console.log("User saved successfully!");
        mongoose.connection.close(); // Close the connection after saving
    })
    .catch(err => {
        console.error("Error saving user:", err);
    });
