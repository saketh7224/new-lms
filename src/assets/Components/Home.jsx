import React from 'react';
import './Home.css';

function Home({ onNavigateToLogin }) {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="logo-container">
          <div className="logo-icon">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="30" fill="#3B82F6"/>
              <path d="M30 15L20 25H26V40H34V25H40L30 15Z" fill="white"/>
              <rect x="18" y="42" width="24" height="3" fill="white"/>
            </svg>
          </div>
          <h1 className="brand-name">LearnHub</h1>
        </div>
        <button className="login-btn" onClick={onNavigateToLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Home;
