// import React from 'react';
// import { Link } from 'react-router-dom';
// import './HomePage.css'; // Make sure to import your CSS file
// import homePageImage from '../assets/home-page-image.png'; // Import your image
// import tokyoImage from '../assets/tokyo.jpg'; // Import Tokyo image
// import sydneyImage from '../assets/sydney.jpg'; // Import Sydney image
// import parisImage from '../assets/paris.jpg'; // Import Paris image
// import baliImage from '../assets/bali.jpg'; // Import Bali image

// const HomePage = () => {
//   return (
//     <div className="home-container">
//       <div className="hero-section">
//         <div className="content-wrapper">
//           <h1 className="main-title">Best Destinations Around the World</h1>
//           <p className="subtitle">Travel, enjoy and live a new and full life</p>
//           <p className="description">
//             Effortlessly plan and customize your perfect trip. Discover top destinations and organize every detail from flights to accommodations. Start your adventure today.
//           </p>
//           <Link to="/itinerary">
//             <button className="cta-button">Find Out More</button>
//           </Link>
//         </div>
//         <div className="image-wrapper">
//           <img src={homePageImage} alt="Travel Destination" className="home-page-image" />
//         </div>
//       </div>

//       {/* Destination Highlights Section */}
//       <div className="destination-highlights">
//         <h2 className="highlights-title">Explore Popular Destinations</h2>
//         <div className="destinations-grid">
//           <div className="destination-card">
//             <img src={tokyoImage} alt="Tokyo" className="destination-image" />
//             <h3 className="destination-name">Tokyo</h3>
//             <p className="destination-description">
//               Experience the bustling metropolis of Tokyo, where traditional temples meet cutting-edge technology.
//             </p>
//             <Link to="/itinerary" className="explore-button">Explore</Link>
//           </div>
//           <div className="destination-card">
//             <img src={sydneyImage} alt="Sydney" className="destination-image" />
//             <h3 className="destination-name">Sydney</h3>
//             <p className="destination-description">
//               Discover Sydney's iconic landmarks, from the Sydney Opera House to the beautiful Bondi Beach.
//             </p>
//             <Link to="/itinerary" className="explore-button">Explore</Link>
//           </div>
//           <div className="destination-card">
//             <img src={parisImage} alt="Paris" className="destination-image" />
//             <h3 className="destination-name">Paris</h3>
//             <p className="destination-description">
//               Enjoy the romance of Paris, with its stunning architecture, art, and cuisine.
//             </p>
//             <Link to="/itinerary" className="explore-button">Explore</Link>
//           </div>
//           <div className="destination-card">
//             <img src={baliImage} alt="Bali" className="destination-image" />
//             <h3 className="destination-name">Bali</h3>
//             <p className="destination-description">
//               Relax on the beautiful beaches of Bali and explore its rich culture and stunning landscapes.
//             </p>
//             <Link to="/itinerary" className="explore-button">Explore</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import your CSS file
import homePageImage from '../assets/home-page-image.png'; // Import your image
import tokyoImage from '../assets/tokyo.jpg'; // Import Tokyo image
import sydneyImage from '../assets/sydney.jpg'; // Import Sydney image
import parisImage from '../assets/paris.jpg'; // Import Paris image
import baliImage from '../assets/bali.jpg'; // Import Bali image
import UserSuccessStories from '../components/UserSuccessStories'; // Import the UserSuccessStories component
import SpecialOffers from '../components/SpecialOffers';

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

      {/* Destination Highlights Section */}
      <div className="destination-highlights">
        <h2 className="highlights-title">Explore Popular Destinations</h2>
        <div className="destinations-grid">
          <div className="destination-card">
            <img src={tokyoImage} alt="Tokyo" className="destination-image" />
            <h3 className="destination-name">Tokyo</h3>
            <p className="destination-description">
              Experience the bustling metropolis of Tokyo, where traditional temples meet cutting-edge technology.
            </p>
            <Link to="/itinerary" className="explore-button">Explore</Link>
          </div>
          <div className="destination-card">
            <img src={sydneyImage} alt="Sydney" className="destination-image" />
            <h3 className="destination-name">Sydney</h3>
            <p className="destination-description">
              Discover Sydney's iconic landmarks, from the Sydney Opera House to the beautiful Bondi Beach.
            </p>
            <Link to="/itinerary" className="explore-button">Explore</Link>
          </div>
          <div className="destination-card">
            <img src={parisImage} alt="Paris" className="destination-image" />
            <h3 className="destination-name">Paris</h3>
            <p className="destination-description">
              Enjoy the romance of Paris, with its stunning architecture, art, and cuisine.
            </p>
            <Link to="/itinerary" className="explore-button">Explore</Link>
          </div>
          <div className="destination-card">
            <img src={baliImage} alt="Bali" className="destination-image" />
            <h3 className="destination-name">Bali</h3>
            <p className="destination-description">
              Relax on the beautiful beaches of Bali and explore its rich culture and stunning landscapes.
            </p>
            <Link to="/itinerary" className="explore-button">Explore</Link>
          </div>
        </div>
      </div>

      {/* User Success Stories Section */}
      <UserSuccessStories /> {/* Add the UserSuccessStories component here */}
      <SpecialOffers/>
    </div>
  );
};

export default HomePage;
