import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Example Components
import Login from './Login';
import Home from './Home';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={
                        <Home />
                } />
            </Routes>
        </Router>
    );
};

export default App;
