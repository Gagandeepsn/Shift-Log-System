const mongoose = require('mongoose');
const Log = require('../models/Log'); // Assuming Log model is in models/Log.js

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/shiftlog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Sample log data
const logData = {
    shift_id: "SHIFT12345",
    user_id: "66d2acbc9d1a8d82f4880cbc",  // Replace with a valid ObjectId from your User collection
    log_details: "Completed regular maintenance on all equipment. No major issues detected.",
    issues: "Minor oil leakage found on pump 2. Scheduled for repair in the next shift.",
    created_at: new Date("2024-08-29T14:30:00Z")
};

// Insert the log into the database
const log = new Log(logData);
log.save()
    .then(() => {
        console.log("Log saved successfully!");
        mongoose.connection.close(); // Close the connection after saving
    })
    .catch(err => {
        console.error("Error saving log:", err);
    });
