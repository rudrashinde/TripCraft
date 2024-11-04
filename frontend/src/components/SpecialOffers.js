// src/components/SpecialOffers.js

import React from 'react';
import './SpecialOffers.css'; // Import your CSS file

const SpecialOffers = () => {
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
            <strong>02:15:00</strong> {/* Example countdown */}
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
