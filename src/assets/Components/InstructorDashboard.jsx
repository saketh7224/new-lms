import React, { useState } from 'react';
import './InstructorDashboard.css';

function InstructorDashboard({ user, onLogout }) {
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const courses = [
    {
      id: 1,
      title: 'Introduction to React',
      students: 45,
      avgGrade: 'B+',
      pendingAssignments: 12,
      status: 'Active'
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      students: 32,
      avgGrade: 'A-',
      pendingAssignments: 8,
      status: 'Active'
    },
    {
      id: 3,
      title: 'Web Development Bootcamp',
      students: 68,
      avgGrade: 'B',
      pendingAssignments: 24,
      status: 'Active'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      student: 'Sarah Mitchell',
      action: 'Submitted assignment',
      course: 'Introduction to React',
      time: '15 minutes ago'
    },
    {
      id: 2,
      student: 'John Davis',
      action: 'Asked a question',
      course: 'Advanced JavaScript',
      time: '1 hour ago'
    },
    {
      id: 3,
      student: 'Emily Chen',
      action: 'Completed quiz',
      course: 'Web Development Bootcamp',
      time: '2 hours ago'
    }
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
          <span className="role-badge role-instructor">{user.role}</span>
        </div>
        <div className="nav-right">
          <div className="notification-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
            </svg>
            <span className="notification-badge">8</span>
          </div>
          <div className="user-menu">
            <button 
              className="user-avatar" 
              onClick={() => setShowAccountMenu(!showAccountMenu)}
            >
              <img src="https://ui-avatars.com/api/?name=Alex+Johnson&background=10b981&color=fff" alt="User" />
            </button>
            {showAccountMenu && (
              <div className="account-dropdown">
                <div className="dropdown-header">
                  <img src="https://ui-avatars.com/api/?name=Alex+Johnson&background=10b981&color=fff" alt="User" />
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
          <div className="welcome-banner instructor-banner">
            <h1>Welcome back, Instructor {user.name.split(' ')[0]}!</h1>
            <p>You have 44 pending submissions to review across 3 courses.</p>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon" style={{backgroundColor: '#dcfce7'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-label">Active Courses</div>
                <div className="stat-value">3</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" style={{backgroundColor: '#dbeafe'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-label">Total Students</div>
                <div className="stat-value">145</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" style={{backgroundColor: '#fef3c7'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-label">Pending Reviews</div>
                <div className="stat-value">44</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" style={{backgroundColor: '#e9d5ff'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a855f7">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-label">Avg. Rating</div>
                <div className="stat-value">4.8</div>
              </div>
            </div>
          </div>

          {/* My Courses Section */}
          <div className="courses-section">
            <h2>My Teaching Courses</h2>
            <p className="section-subtitle">Manage your courses and track student progress</p>
            
            <div className="courses-list">
              {courses.map(course => (
                <div key={course.id} className="course-card instructor-card">
                  <div className="course-header">
                    <h3>{course.title}</h3>
                    <span className={`status-badge ${course.status.toLowerCase()}`}>{course.status}</span>
                  </div>
                  <div className="course-stats-row">
                    <div className="course-stat">
                      <span className="stat-icon">👥</span>
                      <span>{course.students} Students</span>
                    </div>
                    <div className="course-stat">
                      <span className="stat-icon">📊</span>
                      <span>Avg: {course.avgGrade}</span>
                    </div>
                    <div className="course-stat">
                      <span className="stat-icon">📝</span>
                      <span>{course.pendingAssignments} Pending</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <button className="manage-btn">Manage Course</button>
                    <button className="review-btn">Review Submissions</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          {/* Recent Activity */}
          <div className="sidebar-section">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Recent Activity
            </h3>
            <div className="activity-list">
              {recentActivity.map(activity => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-header">
                    <span className="activity-student">{activity.student}</span>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                  <p className="activity-action">{activity.action}</p>
                  <span className="activity-course">{activity.course}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="sidebar-section">
            <h3>Quick Actions</h3>
            <div className="quick-actions">
              <button className="action-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                </svg>
                Create New Course
              </button>
              <button className="action-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
                Grade Assignments
              </button>
              <button className="action-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                Schedule Office Hours
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default InstructorDashboard;
