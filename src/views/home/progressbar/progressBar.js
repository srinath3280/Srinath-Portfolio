// ProgressBar.js
import React from 'react';
import './progressBar.css';

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="progress-bar-container">
      <span className="progress-bar-span">{label} {percentage}%</span>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
