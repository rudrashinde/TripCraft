// src/pages/WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to TripCraft!</h1>
      <p>We're glad you're here. Start planning your trip now!</p>
      <Link to="/itinerary">
        <button className="start-planning-btn">Start Planning Your Trip</button>
      </Link>
    </div>
  );
};

export default WelcomePage;
