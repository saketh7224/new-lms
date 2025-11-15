import React, { useState } from 'react';
import './AdministratorDashboard.css';

function AdministratorDashboard({ user, onLogout }) {
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const systemStats = [
    { label: 'Total Users', value: '2,543', icon: '👥', color: '#dbeafe', iconColor: '#3b82f6' },
    { label: 'Active Courses', value: '187', icon: '📚', color: '#dcfce7', iconColor: '#10b981' },
    { label: 'Revenue (MTD)', value: '$45.2K', icon: '💰', color: '#fef3c7', iconColor: '#f59e0b' },
    { label: 'System Health', value: '98%', icon: '⚡', color: '#e9d5ff', iconColor: '#a855f7' }
  ];

  const recentUsers = [
    { name: 'Emily Rodriguez', role: 'Student', joined: '2 hours ago', status: 'Active' },
    { name: 'Michael Chen', role: 'Instructor', joined: '5 hours ago', status: 'Active' },
    { name: 'Sarah Williams', role: 'Content Creator', joined: '1 day ago', status: 'Pending' }
  ];

  const systemAlerts = [
    { type: 'warning', message: 'Server maintenance scheduled for Saturday 2 AM', time: '1 hour ago' },
    { type: 'info', message: 'New course approval request from Dr. James', time: '3 hours ago' },
    { type: 'success', message: 'Database backup completed successfully', time: '6 hours ago' }
  ];

  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
      <nav className="dashboard-nav">
        <div className="nav-left">
          <div className="nav-logo">
            <svg width="32" height="32" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="30" fill="#3B82F6"/>
              <path d="M30 15L20 25H26V40H34V25H40L30 15Z" fill="white"/>
              <rect x="18" y="42" width="24" height="3" fill="white"/>
            </svg>
          </div>
          <span className="nav-brand">LearnHub</span>
          <span className="role-badge role-admin">{user.role}</span>
        </div>
        <div className="nav-right">
          <div className="notification-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
            </svg>
            <span className="notification-badge">12</span>
          </div>
          <div className="user-menu">
            <button 
              className="user-avatar" 
              onClick={() => setShowAccountMenu(!showAccountMenu)}
            >
              <img src="https://ui-avatars.com/api/?name=Alex+Johnson&background=ef4444&color=fff" alt="User" />
            </button>
            {showAccountMenu && (
              <div className="account-dropdown">
                <div className="dropdown-header">
                  <img src="https://ui-avatars.com/api/?name=Alex+Johnson&background=ef4444&color=fff" alt="User" />
                  <div>
                    <div className="dropdown-name">{user.name}</div>
                    <div className="dropdown-role">{user.role}</div>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  Profile
                </button>
                <button className="dropdown-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  Settings
                </button>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item logout-item" onClick={onLogout}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                  </svg>
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
          <div className="welcome-banner admin-banner">
            <h1>Welcome, Administrator {user.name.split(' ')[0]}!</h1>
            <p>System running smoothly. All services operational.</p>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            {systemStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon" style={{backgroundColor: stat.color, fontSize: '24px'}}>
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-value">{stat.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Users Section */}
          <div className="courses-section">
            <h2>Recent User Registrations</h2>
            <p className="section-subtitle">Manage and approve new users</p>
            
            <div className="users-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Joined</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((u, index) => (
                    <tr key={index}>
                      <td>
                        <div className="user-cell">
                          <img src={`https://ui-avatars.com/api/?name=${u.name}&background=random`} alt={u.name} />
                          <span>{u.name}</span>
                        </div>
                      </td>
                      <td><span className="role-tag">{u.role}</span></td>
                      <td>{u.joined}</td>
                      <td>
                        <span className={`status-badge ${u.status.toLowerCase()}`}>{u.status}</span>
                      </td>
                      <td>
                        <button className="action-link">View</button>
                        <button className="action-link">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          {/* System Alerts */}
          <div className="sidebar-section">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
              System Alerts
            </h3>
            <div className="alerts-list">
              {systemAlerts.map((alert, index) => (
                <div key={index} className={`alert-item alert-${alert.type}`}>
                  <p className="alert-message">{alert.message}</p>
                  <span className="alert-time">{alert.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="sidebar-section">
            <h3>Admin Tools</h3>
            <div className="quick-actions">
              <button className="action-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                </svg>
                Add New User
              </button>
              <button className="action-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
                View Analytics
              </button>
              <button className="action-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                System Settings
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default AdministratorDashboard;