import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
    const [logs, setLogs] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const res = await axios.get('/api/logs/summary', {
                    headers: { Authorization: localStorage.getItem('token') }
                });
                setLogs(res.data);
            } catch (error) {
                console.error('Error fetching logs', error);
            }
        };
        fetchLogs();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {user.username}</p>
            <ul>
                {logs.map((log) => (
                    <li key={log._id}>
                        <h3>Shift ID: {log.shift_id}</h3>
                        <p>{log.log_details}</p>
                        <p>Issues: {log.issues}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
