// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import HomePage from './pages/HomePage'; // Ensure the path is correct
// // import ItineraryPage from './pages/ItineraryPage'; // Ensure the path is correct
// // import Navbar from './components/Navbar'; // Ensure the path is correct
// // import './styles/App.css'; // Ensure the path is correct

// // function App() {
// //   return (
// //     <Router>
// //       <div>
// //         <Navbar />
// //         <Routes>
// //           <Route path="/" element={<HomePage />} />
// //           <Route path="/itinerary" element={<ItineraryPage />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;

// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change Switch to Routes
// import Navbar from './components/Navbar';
// import HomePage from './pages/HomePage';
// import ItineraryPage from './pages/ItineraryPage';
// import LoginPage from './pages/LoginPage';
// import SignUpPage from './pages/SignUpPage';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes> {/* Change Switch to Routes */}
//         <Route path="/" element={<HomePage />} /> {/* Use element prop for rendering components */}
//         <Route path="/itinerary" element={<ItineraryPage />} />
//         <Route path="/login" element={<LoginPage />} /> {/* Login route */}
//         <Route path="/signup" element={<SignUpPage />} /> {/* Sign-up route */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ItineraryPage from './pages/ItineraryPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import WelcomePage from './pages/WelcomePage'; // Import WelcomePage
import Footer from './components/Footer'; // Ensure the path is correct


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/itinerary" element={<ItineraryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/welcome" element={<WelcomePage />} /> {/* Add WelcomePage route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
