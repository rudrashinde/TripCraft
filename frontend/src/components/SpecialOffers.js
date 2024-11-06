import React, { useState, useEffect } from 'react';
import './SpecialOffers.css'; // Import your CSS file

const SpecialOffers = () => {
  // Set initial countdown time (e.g., 2 hours, 15 minutes)
  const targetTime = new Date().getTime() + (2 * 60 * 60 * 1000) + (15 * 60 * 1000); // 2 hours and 15 minutes

  // State for the remaining time
  const [timeLeft, setTimeLeft] = useState(targetTime - new Date().getTime());

  // Update the countdown every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTimeLeft = targetTime - new Date().getTime();
      if (newTimeLeft <= 0) {
        clearInterval(intervalId);
        setTimeLeft(0);
      } else {
        setTimeLeft(newTimeLeft);
      }
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  // Function to format the time (HH:MM:SS)
  const formatTime = (time) => {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  };

  return (
    <div className="special-offers-section">
      <h2 className="offers-title">Special Offers & Promotions</h2>
      <div className="offers-grid">
        {/* Current Deals */}
        <div className="offer-card">
          <h3 className="offer-title">Summer Getaway Sale!</h3>
          <p className="offer-description">Save up to 30% on select destinations when you book this summer.</p>
          <span className="offer-expiration">Offer ends: <strong>August 31, 2024</strong></span>
        </div>

        {/* Limited-Time Promotion */}
        <div className="offer-card">
          <h3 className="offer-title">Last Minute Deals</h3>
          <p className="offer-description">Book now and save 15% on trips departing within 7 days!</p>
          <div className="countdown-timer">
            <span>Hurry! Time left:</span>
            <strong>{formatTime(timeLeft)}</strong>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="offer-card">
          <h3 className="offer-title">Subscribe for Exclusive Deals!</h3>
          <p className="offer-description">Sign up for our newsletter and never miss an offer!</p>
          <input type="email" placeholder="Enter your email" className="newsletter-input" />
          <button className="newsletter-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;