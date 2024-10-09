// import React from 'react';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//   return (
//     <div className="home-page">
//       <h1>Welcome to Your Custom Travel Planner</h1>
//       <p>
//         Tailor your travel experience based on your age, preferences, and physical capabilities.
//       </p>
//       <Link to="/itinerary">
//         <button className="start-planning-btn">Start Planning Your Trip</button>
//       </Link>
//     </div>
//   );
// };

// export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Make sure to import your CSS file
import homePageImage from '../assets/home-page-image.png'; // Import your image

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="content-wrapper">
          <h1 className="main-title">Best Destinations Around the World</h1>
          <p className="subtitle">Travel, enjoy and live a new and full life</p>
          <p className="description">
            Effortlessly plan and customize your perfect trip. Discover top destinations and organize every detail from flights to accommodations. Start your adventure today.
          </p>
          <Link to="/itinerary">
            <button className="cta-button">Find Out More</button>
          </Link>
        </div>
        <div className="image-wrapper">
          <img src={homePageImage} alt="Travel Destination" className="home-page-image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

