import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Login';
import Home from './Home';
import UserProfile from './component/userProfile'


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={
                        <Home />
                } />
                <Route path="/userprofile" element={<UserProfile/>}/>
            </Routes>
        </Router>
    );
};

export default App;
