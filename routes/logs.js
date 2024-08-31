const express = require('express');
const Log = require('../models/Log');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Create Log
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { shift_id, log_details, issues } = req.body;
        const log = new Log({ shift_id, user_id: req.user.userId, log_details, issues });
        await log.save();
        res.status(201).json(log);
    } catch (error) {
        res.status(400).json({ error: 'Error creating log' });
    }
});

// Get Shift Overview
router.get('/summary', authMiddleware, async (req, res) => {
    try {
        const logs = await Log.find().sort({ created_at: -1 }).limit(1);
        res.json(logs);
    } catch (error) {
        res.status(400).json({ error: 'Error fetching logs' });
    }
});

module.exports = router;
