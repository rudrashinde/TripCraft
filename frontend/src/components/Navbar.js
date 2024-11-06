// // src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css'; // Assuming you have some styles for the Navbar

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h1>TripCraft</h1>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/itinerary">Itinerary</Link></li>
//         <li><Link to="/login">Login</Link></li> {/* Link to Login */}
//         <li><Link to="/signup">Sign Up</Link></li> {/* Link to Sign Up */}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the updated styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}> {/* Wrap the logo with Link */}
          TripCraft
        </Link>
      </h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/itinerary">Itinerary</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;