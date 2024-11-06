// src/pages/WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Welcome to TripCraft!</h1>
        <p className="hero-subtitle">Discover and plan your perfect adventure with ease.</p>
        <Link to="/itinerary">
          <button className="start-planning-btn">Start Planning Your Trip</button>
        </Link>
      </section>

      {/* Highlights Section */}
      <section className="highlights">
        <h2 className="section-title">Why Choose TripCraft?</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <h3>Personalized Itineraries</h3>
            <p>Get custom-made travel plans tailored to your preferences and interests.</p>
          </div>
          <div className="highlight-card">
            <h3>Curated Destinations</h3>
            <p>Explore top-rated destinations and hidden gems recommended by experts.</p>
          </div>
          <div className="highlight-card">
            <h3>Seamless Planning</h3>
            <p>Enjoy an easy-to-use platform that takes the hassle out of travel planning.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="testimonial-card">
          <p className="testimonial-text">"TripCraft made my travel planning so simple and enjoyable. Highly recommend!"</p>
          <p className="testimonial-author">- Emma R.</p>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-text">"I found amazing destinations I never knew existed. Thank you, TripCraft!"</p>
          <p className="testimonial-author">- Michael K.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Start Your Adventure?</h2>
        <Link to="/itinerary">
          <button className="cta-btn">Plan Your Trip Now</button>
        </Link>
      </section>
    </div>
  );
};

export default WelcomePage;
