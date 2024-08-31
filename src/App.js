import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LogEntry from './pages/LogEntry';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/log-entry" 
            element={
              <PrivateRoute>
                <LogEntry />
              </PrivateRoute>
            } 
          />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

// PrivateRoute component to protect routes
function PrivateRoute({ children }) {
  const { user } = React.useContext(AuthContext);
  return user ? children : <Navigate to="/login" replace />;
}

export default App;

