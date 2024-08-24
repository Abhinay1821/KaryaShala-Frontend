import React from 'react';
import './LoadingScreen.css'; // Ensure this CSS file is imported
const LoadingScreen = () => {
  return (
    <div className="loading-overlay">
        <img src={'/logo-2.png'} alt="logo" style={{ width: '100px', height: '100px' , filter: 'brightness(0) invert(1)'}} ></img>
    </div>
  );
};

export default LoadingScreen;
