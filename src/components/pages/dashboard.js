// components/pages/dashboard.js
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header">
        <h1>Welcome to the Dashboard</h1>
        <Link to="/profile" className="profile-link">Profile</Link>
      </header>
      <main className="dashboard-content">
        <p>This is your main content area. You can add charts, stats, or features here.</p>
      </main>
    </div>
  );
};

export default Dashboard;
