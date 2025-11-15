import React, { useState } from "react";
import "./App.css";
import Home from "./assets/Components/Home.jsx";
import Login from "./assets/Components/Login.jsx";
import StudentDashboard from "./assets/Components/StudentDashboard.jsx";
import InstructorDashboard from "./assets/Components/InstructorDashboard.jsx";
import AdministratorDashboard from "./assets/Components/AdministratorDashboard.jsx";
import ContentCreatorDashboard from "./assets/Components/ContentCreatorDashboard.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);

  const handleNavigateToLogin = () => {
    setCurrentPage('login');
  };

  const handleLogin = (email, password, role) => {
    setUser({
      name: 'Alex Johnson',
      email: email,
      role: role
    });
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  const renderDashboard = () => {
    if (!user) return null;

    switch(user.role) {
      case 'Student':
        return <StudentDashboard user={user} onLogout={handleLogout} />;
      case 'Instructor':
        return <InstructorDashboard user={user} onLogout={handleLogout} />;
      case 'Administrator':
        return <AdministratorDashboard user={user} onLogout={handleLogout} />;
      case 'Content Creator':
        return <ContentCreatorDashboard user={user} onLogout={handleLogout} />;
      default:
        return <StudentDashboard user={user} onLogout={handleLogout} />;
    }
  };

  return (
    <div className="App">
      {currentPage === 'home' && <Home onNavigateToLogin={handleNavigateToLogin} />}
      {currentPage === 'login' && (
        <Login onLogin={handleLogin} onBackToHome={handleBackToHome} />
      )}
      {currentPage === 'dashboard' && renderDashboard()}
    </div>
  );
}

export default App;
