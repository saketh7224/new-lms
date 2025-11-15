import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin, onBackToHome }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email, password, role);
    }
  };

  return (
    <div className="login-container">
      <button className="back-btn" onClick={onBackToHome}>
        ← Back to Home
      </button>
      
      <div className="login-card">
        <div className="login-header">
          <div className="logo-icon-small">
            <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="30" fill="#3B82F6"/>
              <path d="M30 15L20 25H26V40H34V25H40L30 15Z" fill="white"/>
              <rect x="18" y="42" width="24" height="3" fill="white"/>
            </svg>
          </div>
          <h2>Welcome to LearnHub</h2>
          <p>Sign in to your learning management system</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email or Username</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Login as</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="Student">Student</option>
              <option value="Instructor">Instructor</option>
              <option value="Administrator">Administrator</option>
              <option value="Content Creator">Content Creator</option>
            </select>
          </div>

          <button type="submit" className="login-submit-btn">
            Login
          </button>

          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
