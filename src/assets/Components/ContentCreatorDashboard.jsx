import React, { useState } from 'react';
import './ContentCreatorDashboard.css';

function ContentCreatorDashboard({ user, onLogout }) {
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const myContent = [
    { id: 1, title: 'React Hooks Deep Dive', type: 'Video Course', status: 'Published', views: 1243, rating: 4.8, revenue: '$450' },
    { id: 2, title: 'JavaScript ES6+ Guide', type: 'Tutorial Series', status: 'Published', views: 876, rating: 4.6, revenue: '$320' },
    { id: 3, title: 'CSS Grid & Flexbox Mastery', type: 'Video Course', status: 'In Review', views: 0, rating: 0, revenue: '$0' }
  ];

  const recentFeedback = [
    { user: 'Emma Wilson', comment: 'Excellent explanation of hooks!', rating: 5, course: 'React Hooks Deep Dive' },
    { user: 'James Brown', comment: 'Very helpful tutorial series', rating: 5, course: 'JavaScript ES6+ Guide' },
    { user: 'Lisa Chen', comment: 'Clear and concise content', rating: 4, course: 'React Hooks Deep Dive' }
  ];

  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
      <nav className="dashboard-nav">
        <div className="nav-left">
          <div className="nav-logo">
            <svg width="32" height="32" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="30" fill="#3B82F6" />
              <path d="M30 15L20 25H26V40H34V25H40L30 15Z" fill="white" />
              <rect x="18" y="42" width="24" height="3" fill="white" />
            </svg>
          </div>
          <span className="nav-brand">LearnHub</span>
          <span className="role-badge role-creator">{user.role}</span>
        </div>

        <div className="nav-right">
          <div className="notification-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 
                2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 
                1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="notification-badge">5</span>
          </div>

          <div className="user-menu">
            <button
              className="user-avatar"
              onClick={() => setShowAccountMenu(!showAccountMenu)}
            >
              <img src="https://ui-avatars.com/api/?name=Alex+Johnson&background=f59e0b&color=fff" alt="User" />
            </button>

            {showAccountMenu && (
              <div className="account-dropdown">
                <div className="dropdown-header">
                  <img src="https://ui-avatars.com/api/?name=Alex+Johnson&background=f59e0b&color=fff" alt="User" />
                  <div>
                    <div className="dropdown-name">{user.name}</div>
                    <div className="dropdown-role">{user.role}</div>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item">
                  Profile
                </button>
                <button className="dropdown-item">
                  Settings
                </button>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item logout-item" onClick={onLogout}>
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-content">
          {/* Welcome Banner */}
          <div className="welcome-banner creator-banner">
            <h1>Welcome back, Creator {user.name.split(' ')[0]}!</h1>
            <p>Your content has reached 2,119 learners this month. Keep creating!</p>
          </div>

          {/* Stats Cards */}
          {/* (unchanged code here) */}

          {/* My Content Section */}
          <div className="courses-section">
            <h2>My Content</h2>
            <p className="section-subtitle">Manage and track your created content</p>

            <div className="courses-list">
              {myContent.map(content => (
                <div key={content.id} className="course-card creator-card">
                  <div className="course-header">
                    <div>
                      <h3>{content.title}</h3>
                      <p className="content-type">{content.type}</p>
                    </div>
                    <span className={`status-badge ${content.status.toLowerCase().replace(' ', '-')}`}>
                      {content.status}
                    </span>
                  </div>
                  <div className="content-stats">
                    <div className="content-stat">
                      <span className="stat-label">Views</span>
                      <span className="stat-number">{content.views}</span>
                    </div>
                    <div className="content-stat">
                      <span className="stat-label">Rating</span>
                      <span className="stat-number">
                        {content.rating > 0 ? `⭐ ${content.rating}` : 'N/A'}
                      </span>
                    </div>
                    <div className="content-stat">
                      <span className="stat-label">Revenue</span>
                      <span className="stat-number">{content.revenue}</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <button className="edit-btn">Edit Content</button>
                    <button className="analytics-btn">View Analytics</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        {/* (unchanged code here) */}
      </main>
    </div>
  );
}

export default ContentCreatorDashboard;
