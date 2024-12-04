import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './GuestDashboard.css'; // Import the CSS file for styling

const GuestDashboard = () => {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem('token');

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Welcome to the Guest Dashboard</h1>
      </div>
      <div className="dashboard-cards">
        <div className="card">
          <h3 className="card-title">Quote of the Day</h3>
          <p className="card-content">"Success is not the key to happiness. Happiness is the key to success." - Albert Schweitzer</p>
        </div>
        <div className="card">
          <h3 className="card-title">Today's Updates</h3>
          <p className="card-content">Tech stocks soar as major companies report higher-than-expected earnings.</p>
        </div>
        <div className="card">
          <h3 className="card-title">Weather Update</h3>
          <p className="card-content">Cloudy with a chance of rain. High of 20°C, low of 14°C. Wind speed: 10 km/h.</p>
        </div>
        <div className="card">
          <h3 className="card-title">To-Do</h3>
          <ul className="todo-list">
            <li>Complete documentation for the new feature</li>
            <li>Review code submitted by team members</li>
            <li>Prepare for client presentation at 4:00 PM</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="card-title">Must-See Places</h3>
          <ul className="places-list">
            <li>Mount Everest</li>
            <li>Colosseum</li>
            <li>Great Barrier Reef</li>
            <li>Mount Fuji</li>
          </ul>
        </div>
      </div>

      {/* Logout Button */}
      <div className="logout-btn-container">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default GuestDashboard;
