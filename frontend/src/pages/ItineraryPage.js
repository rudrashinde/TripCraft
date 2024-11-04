// // src/pages/ItineraryPage.js
// import React, { useState } from 'react';
// import AgeSelector from '../components/AgeSelector';
// import DestinationSelector from '../components/DestinationSelector';
// import TravelModeSelector from '../components/TravelModeSelector';
// import Itinerary from '../components/Itinerary';
// import './ItineraryPage.css'; // Import the CSS file here

// const ItineraryPage = () => {
//   const [numberOfPeople, setNumberOfPeople] = useState(1);
//   const [peopleAges, setPeopleAges] = useState(['']); // Array to hold ages
//   const [destination, setDestination] = useState('');
//   const [travelMode, setTravelMode] = useState('');
//   const [budget, setBudget] = useState(''); // Budget state

//   // Handle the change of the number of people
//   const handlePeopleCountChange = (e) => {
//     const count = parseInt(e.target.value, 10);
//     setNumberOfPeople(count);
//     setPeopleAges(new Array(count).fill('')); // Initialize ages array
//   };

//   // Handle age change for a specific person
//   const handleAgeChange = (index, age) => {
//     const updatedAges = [...peopleAges];
//     updatedAges[index] = age; // Set the specific age at the index
//     setPeopleAges(updatedAges);
//   };

//   // Handle budget selection
//   const handleBudgetChange = (event) => {
//     setBudget(event.target.value);
//   };

//   return (
//     <div className="itinerary-page">
//       <div className="itinerary-content">
//         <h1 className="itinerary-title">Plan Your Custom Itinerary</h1>
//         <div className="input-section">
//           <label>
//             Number of People:
//             <input
//               type="number"
//               min="1"
//               value={numberOfPeople}
//               onChange={handlePeopleCountChange}
//             />
//           </label>
//           {/* Render AgeSelector for each person */}
//           <div className="age-selectors">
//             {[...Array(numberOfPeople)].map((_, index) => (
//               <AgeSelector
//                 key={index}
//                 index={index}
//                 setAgeGroup={(age) => handleAgeChange(index, age)} // Update age for each person
//               />
//             ))}
//           </div>
//           <label>
//             Budget:
//             <select onChange={handleBudgetChange}>
//               <option value="">Select Budget...</option>
//               <option value="low">Low</option>
//               <option value="medium">Medium</option>
//               <option value="high">High</option>
//             </select>
//           </label>
//           <DestinationSelector setDestination={setDestination} />
//           {destination && (
//             <TravelModeSelector
//               ages={peopleAges}
//               budget={budget}
//               setTravelMode={setTravelMode}
//             />
//           )}
//           {travelMode && (
//             <Itinerary
//               ageGroup={peopleAges}
//               destination={destination}
//               travelMode={travelMode}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItineraryPage;




// src/pages/ItineraryPage.js
// import React, { useState } from 'react';
// import AgeSelector from '../components/AgeSelector';
// import DestinationSelector from '../components/DestinationSelector';
// import TravelModeSelector from '../components/TravelModeSelector';
// import Itinerary from '../components/Itinerary';
// import './ItineraryPage.css'; // Import the CSS file here

// const ItineraryPage = () => {
//   const [numberOfPeople, setNumberOfPeople] = useState(1);
//   const [peopleAges, setPeopleAges] = useState(['']); // Array to hold ages
//   const [destination, setDestination] = useState('');
//   const [travelMode, setTravelMode] = useState('');
//   const [budget, setBudget] = useState(''); // Budget state
//   const [lat, setLat] = useState(null); // Latitude state
//   const [lon, setLon] = useState(null); // Longitude state

//   // Handle the change of the number of people
//   const handlePeopleCountChange = (e) => {
//     const count = parseInt(e.target.value, 10);
//     setNumberOfPeople(count);
//     setPeopleAges(new Array(count).fill('')); // Initialize ages array
//   };

//   // Handle age change for a specific person
//   const handleAgeChange = (index, age) => {
//     const updatedAges = [...peopleAges];
//     updatedAges[index] = age; // Set the specific age at the index
//     setPeopleAges(updatedAges);
//   };

//   // Handle budget selection
//   const handleBudgetChange = (event) => {
//     setBudget(event.target.value);
//   };

//   // Handle destination change and set coordinates
//   const handleDestinationChange = (selectedDestination, latitude, longitude) => {
//     setDestination(selectedDestination);
//     setLat(latitude); // Set latitude
//     setLon(longitude); // Set longitude
//   };

//   return (
//     <div className="itinerary-page">
//       <div className="itinerary-content">
//         <h1 className="itinerary-title">Plan Your Custom Itinerary</h1>
//         <div className="input-section">
//           <label>
//             Number of People:
//             <input
//               type="number"
//               min="1"
//               value={numberOfPeople}
//               onChange={handlePeopleCountChange}
//             />
//           </label>
//           {/* Render AgeSelector for each person */}
//           <div className="age-selectors">
//             {[...Array(numberOfPeople)].map((_, index) => (
//               <AgeSelector
//                 key={index}
//                 index={index}
//                 setAgeGroup={(age) => handleAgeChange(index, age)} // Update age for each person
//               />
//             ))}
//           </div>
//           <label>
//             Budget:
//             <select onChange={handleBudgetChange}>
//               <option value="">Select Budget...</option>
//               <option value="low">Low</option>
//               <option value="medium">Medium</option>
//               <option value="high">High</option>
//             </select>
//           </label>
//           <DestinationSelector
//             setDestination={handleDestinationChange}
//           />
//           {destination && (
//             <TravelModeSelector
//               ages={peopleAges}
//               budget={budget}
//               setTravelMode={setTravelMode}
//             />
//           )}
//           {travelMode && (
//             <Itinerary
//               ageGroup={peopleAges}
//               destination={destination}
//               travelMode={travelMode}
//               lat={lat} // Pass latitude to Itinerary
//               lon={lon} // Pass longitude to Itinerary
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItineraryPage;

import React, { useState, useEffect } from 'react';
import './ItineraryPage.css';

const ItineraryPage = () => {
  const [mustSeePlaces, setMustSeePlaces] = useState([]); // Initialize as an empty array
  const [itineraries, setItineraries] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    const fetchItineraries = async () => {
      try {
        const response = await fetch('YOUR_API_URL'); // Replace with your API endpoint
        const data = await response.json();
        
        setItineraries(data.itineraries || []); // Set itineraries from fetched data
        setMustSeePlaces(data.mustSeePlaces || []); // Set must-see places
      } catch (error) {
        console.error('Error fetching itineraries:', error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchItineraries();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div className="itinerary-container">
      <h1 className="itinerary-title">Your Perfect Itinerary</h1>

      <div className="must-see-places">
        <h2>Must-See Places</h2>
        <div className="places-grid">
          {mustSeePlaces.map((place) => (
            <div className="place-card" key={place.id}>
              <img src={place.image} alt={place.name} />
              <h3>{place.name}</h3>
              <p>{place.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="itineraries">
        <h2>Predefined Itineraries</h2>
        <ul>
          {itineraries.map((itinerary) => (
            <li key={itinerary.id}>
              <h3>{itinerary.title}</h3>
              <p>{itinerary.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItineraryPage;
