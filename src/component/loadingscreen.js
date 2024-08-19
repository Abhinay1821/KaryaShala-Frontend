import React from 'react';
import './LoadingScreen.css'; // Ensure this CSS file is imported

const LoadingScreen = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingScreen;
