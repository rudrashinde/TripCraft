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
//         <label>
//           Number of People:
//           <input
//             type="number"
//             min="1"
//             value={numberOfPeople}
//             onChange={handlePeopleCountChange}
//           />
//         </label>
//         {/* Render AgeSelector for each person */}
//         {[...Array(numberOfPeople)].map((_, index) => (
//           <AgeSelector
//             key={index}
//             index={index}
//             setAgeGroup={(age) => handleAgeChange(index, age)} // Update age for each person
//           />
//         ))}
//         <label>
//           Budget:
//           <select onChange={handleBudgetChange}>
//             <option value="">Select Budget...</option>
//             <option value="low">Low</option>
//             <option value="medium">Medium</option>
//             <option value="high">High</option>
//           </select>
//         </label>
//         <DestinationSelector setDestination={setDestination} />
//         {destination && <TravelModeSelector ages={peopleAges} budget={budget} setTravelMode={setTravelMode} />}
//         {travelMode && (
//           <Itinerary ageGroup={peopleAges} destination={destination} travelMode={travelMode} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default ItineraryPage;

// src/pages/ItineraryPage.js
import React, { useState } from 'react';
import AgeSelector from '../components/AgeSelector';
import DestinationSelector from '../components/DestinationSelector';
import TravelModeSelector from '../components/TravelModeSelector';
import Itinerary from '../components/Itinerary';
import './ItineraryPage.css'; // Import the CSS file here

const ItineraryPage = () => {
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [peopleAges, setPeopleAges] = useState(['']); // Array to hold ages
  const [destination, setDestination] = useState('');
  const [travelMode, setTravelMode] = useState('');
  const [budget, setBudget] = useState(''); // Budget state

  // Handle the change of the number of people
  const handlePeopleCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setNumberOfPeople(count);
    setPeopleAges(new Array(count).fill('')); // Initialize ages array
  };

  // Handle age change for a specific person
  const handleAgeChange = (index, age) => {
    const updatedAges = [...peopleAges];
    updatedAges[index] = age; // Set the specific age at the index
    setPeopleAges(updatedAges);
  };

  // Handle budget selection
  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  return (
    <div className="itinerary-page">
      <div className="itinerary-content">
        <h1 className="itinerary-title">Plan Your Custom Itinerary</h1>
        <div className="input-section">
          <label>
            Number of People:
            <input
              type="number"
              min="1"
              value={numberOfPeople}
              onChange={handlePeopleCountChange}
            />
          </label>
          {/* Render AgeSelector for each person */}
          <div className="age-selectors">
            {[...Array(numberOfPeople)].map((_, index) => (
              <AgeSelector
                key={index}
                index={index}
                setAgeGroup={(age) => handleAgeChange(index, age)} // Update age for each person
              />
            ))}
          </div>
          <label>
            Budget:
            <select onChange={handleBudgetChange}>
              <option value="">Select Budget...</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
          <DestinationSelector setDestination={setDestination} />
          {destination && (
            <TravelModeSelector
              ages={peopleAges}
              budget={budget}
              setTravelMode={setTravelMode}
            />
          )}
          {travelMode && (
            <Itinerary
              ageGroup={peopleAges}
              destination={destination}
              travelMode={travelMode}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItineraryPage;
