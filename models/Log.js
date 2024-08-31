const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
    shift_id: { type: String, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    log_details: { type: String, required: true },
    issues: { type: String },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Log', LogSchema);
