import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// Example Components
import Login from './Login';
import Home from './Home';


const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            navigate('/login'); // Redirect to login if no token
        }
    }, [navigate]);

    return children;
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                } />
            </Routes>
        </Router>
    );
};

export default App;
