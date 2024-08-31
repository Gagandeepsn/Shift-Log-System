import React, { useState } from 'react';
import axios from 'axios';

const LogEntry = () => {
    const [shiftId, setShiftId] = useState('');
    const [logDetails, setLogDetails] = useState('');
    const [issues, setIssues] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/logs', { shift_id: shiftId, log_details: logDetails, issues }, {
                headers: { Authorization: localStorage.getItem('token') }
            });
            alert('Log created successfully');
        } catch (error) {
            console.error('Error creating log', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={shiftId} onChange={(e) => setShiftId(e.target.value)} placeholder="Shift ID" />
            <textarea value={logDetails} onChange={(e) => setLogDetails(e.target.value)} placeholder="Log Details"></textarea>
            <textarea value={issues} onChange={(e) => setIssues(e.target.value)} placeholder="Issues"></textarea>
            <button type="submit">Submit Log</button>
        </form>
    );
};

export default LogEntry;
