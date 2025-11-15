import React, { useState } from 'react';
import './StudentDashboard.css';

function StudentDashboard({ user, onLogout }) {
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const courses = [
    {
      id: 1,
      title: 'Introduction to React',
      instructor: 'Dr. Sarah Johnson',
      category: 'Programming',
      level: 'Intermediate',
      progress: 75,
      lessons: '18/24',
      deadline: '9/25/2025'
    },
    {
      id: 2,
      title: 'Data Structures & Algorithms',
      instructor: 'Prof. Michael Chen',
      category: 'Computer Science',
      level: 'Advanced',
      progress: 40,
      lessons: '13/32',
      deadline: '9/28/2025'
    },
    {
      id: 3,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Emma Rodriguez',
      category: 'Design',
      level: 'Beginner',
      progress: 90,
      lessons: '14/16',
      deadline: '9/23/2025'
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy',
      instructor: 'James Wilson',
      category: 'Marketing',
      level: 'Intermediate',
      progress: 25,
      lessons: '5/20',
      deadline: '10/1/2025'
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'urgent',
      title: 'Assignment Due Soon',
      message: 'React Components Assignment due in 2 days',
      time: '10 minutes ago'
    },
    {
      id: 2,
      type: 'info',
      title: 'New Course Material',
      message: 'New videos added to Algorithm Analysis module',
      time: '2 hours ago'
    },
    {
      id: 3,
      type: 'success',
      title: 'Grade Posted',
      message: 'Your Design Project has been graded: A-',
      time: '1 day ago'
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
          <span className="role-badge">{user.role}</span>
        </div>
        <div className="nav-right">
          <div className="notification-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
            </svg>
            <span className="notification-badge">3</span>
          </div>
          <div className="user-menu">
            <button 
              className="user-avatar" 
              onClick={() => setShowAccountMenu(!showAccountMenu)}
            >
              <img src="https://ui-avatars.com/api/?name=Alex+Johnson&background=3B82F6&color=fff" alt="User" />
            </button>
            {showAccountMenu && (
              <div className="account-dropdown">
                <div className="dropdown-header">
                  <img src="https://ui-avatars.com/api/?name=Alex+Johnson&background=3B82F6&color=fff" alt="User" />
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
          <div className="welcome-banner">
            <h1>Welcome back, {user.name.split(' ')[0]}!</h1>
            <p>You have 2 assignments due this week. Keep up the great work!</p>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon" style={{backgroundColor: '#dbeafe'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-label">Enrolled Courses</div>
                <div className="stat-value">4</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" style={{backgroundColor: '#dcfce7'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-label">Completed</div>
                <div className="stat-value">1</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" style={{backgroundColor: '#fed7aa'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-label">Study Hours</div>
                <div className="stat-value">42h</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" style={{backgroundColor: '#e9d5ff'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a855f7">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-label">Avg. Grade</div>
                <div className="stat-value">A-</div>
              </div>
            </div>
          </div>

          {/* My Courses Section */}
          <div className="courses-section">
            <h2>My Courses</h2>
            <p className="section-subtitle">Continue your learning journey</p>
            
            <div className="courses-list">
              {courses.map(course => (
                <div key={course.id} className="course-card">
                  <div className="course-header">
                    <h3>{course.title}</h3>
                    <p className="course-instructor">by {course.instructor}</p>
                  </div>
                  <div className="course-badges">
                    <span className="badge badge-category">{course.category}</span>
                    <span className="badge badge-level">{course.level}</span>
                  </div>
                  <div className="course-progress">
                    <div className="progress-header">
                      <span>Progress: {course.lessons} lessons</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: `${course.progress}%`}}></div>
                    </div>
                  </div>
                  <div className="course-footer">
                    <span className="course-deadline">📅 Next deadline: {course.deadline}</span>
                    <button className="continue-btn">Continue</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          {/* Notifications */}
          <div className="sidebar-section">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
              </svg>
              Notifications
            </h3>
            <div className="notifications-list">
              {notifications.map(notif => (
                <div key={notif.id} className={`notification-item notification-${notif.type}`}>
                  <div className="notification-header">
                    <span className="notification-title">{notif.title}</span>
                    {notif.type === 'urgent' && <span className="urgent-badge">Urgent</span>}
                  </div>
                  <p className="notification-message">{notif.message}</p>
                  <span className="notification-time">{notif.time}</span>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                Browse Courses
              </button>
              <button className="action-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                View Schedule
              </button>
              <button className="action-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                Study Groups
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default StudentDashboard;
