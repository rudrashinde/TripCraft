import React from 'react';
import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <section className="about-section">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-text">
          We are dedicated to inspiring travelers worldwide, helping them discover incredible destinations and curate personalized itineraries that turn travel dreams into reality. Our mission is to make travel planning easy, fun, and accessible for everyone.
        </p>
      </section>

      <section className="about-section">
        <h2 className="section-title">Our Story</h2>
        <p className="section-text">
          Founded in 2023, our platform was created by passionate travelers who wanted to simplify the planning process. What started as a small project has grown into a comprehensive tool, empowering users to explore the world in unique and meaningful ways.
        </p>
      </section>

      <section className="about-section">
        <h2 className="section-title">Our Values</h2>
        <ul className="values-list">
          <li className="value-item">🌍 Sustainability: We promote eco-friendly travel and responsible tourism practices.</li>
          <li className="value-item">❤️ Passion: Our team is driven by a love for travel and discovery.</li>
          <li className="value-item">💡 Innovation: Constantly evolving, we use cutting-edge technology to enhance travel experiences.</li>
          <li className="value-item">👥 Community: We believe in fostering a community of travel lovers who inspire each other.</li>
        </ul>
      </section>

      {/* New "Awards and Recognition" Section */}
      <section className="about-section">
        <h2 className="section-title">Awards and Recognition</h2>
        <p className="section-text">
          TripCraft is proud to have been recognized in the travel industry for its innovation and excellence. Here are some of the prestigious awards we’ve received:
        </p>
        <ul className="awards-list">
          <li className="award-item">🏆 Best Travel Planning Platform - Travel Tech Awards 2023</li>
          <li className="award-item">🥇 Most Innovative Travel App - Global Travel Summit 2023</li>
          <li className="award-item">🌍 Sustainability Leadership Award - Green Travel Expo 2023</li>
        </ul>
      </section>

      {/* New "What Makes Us Unique" Section */}
      <section className="about-section">
        <h2 className="section-title">What Makes Us Unique</h2>
        <p className="section-text">
          Unlike other travel platforms, TripCraft stands out because of our unique approach to travel planning. Here's what makes us different:
        </p>
        <ul className="unique-features-list">
          <li className="unique-feature-item">🌍 Global Destination Database: We offer in-depth guides and itineraries for destinations around the world, ensuring that every traveler can find their perfect trip.</li>
          <li className="unique-feature-item">💡 Tailored Itinerary Builder: Our platform allows users to create fully personalized itineraries based on their interests, budget, and time constraints.</li>
          <li className="unique-feature-item">📱 Real-Time Updates: Stay updated on weather, local events, and more with our real-time notifications feature to ensure your trip goes smoothly.</li>
          <li className="unique-feature-item">🌱 Eco-Friendly Practices: We're committed to promoting sustainable travel options and helping users make responsible choices during their travels.</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUsPage;
