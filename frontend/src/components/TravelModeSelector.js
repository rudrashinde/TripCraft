// import React from 'react';

// const TravelModeSelector = ({ ages, budget, setTravelMode }) => {
//   const suggestTransportMode = () => {
//     const ageCounts = {
//       children: 0,
//       teenagers: 0,
//       adults: 0,
//       seniors: 0,
//     };

//     ages.forEach(age => {
//       if (age === 'child') ageCounts.children++;
//       else if (age === 'teen') ageCounts.teenagers++;
//       else if (age === 'adult') ageCounts.adults++;
//       else if (age === 'senior') ageCounts.seniors++;
//     });

//     let suggestions = [];

//     if (budget === 'low') {
//       suggestions.push(
//         'Economy Flight: Affordable for longer distances. Consider booking in advance for lower rates.',
//         'Family Minivan (Rental): Cost-effective for road trips. Spacious for families and gear.'
//       );
//     } else if (budget === 'medium') {
//       suggestions.push(
//         'Premium Economy Flight: More comfort and amenities compared to Economy.',
//         'Private Coach/Bus: Shared cost among the group for affordability.'
//       );
//     } else if (budget === 'high') {
//       suggestions.push(
//         'First-Class Flight: Maximum comfort and amenities.',
//         'Luxury Minivan or SUV (Rental): High-end features for comfort during road trips.'
//       );
//     }

//     setTravelMode(`For your group of ${ageCounts.adults} adults, ${ageCounts.teenagers} teenagers, ${ageCounts.children} children and ${ageCounts.seniors} seniors, considering your budget of ${budget}, we recommend:\n\n` + suggestions.join('\n'));
//   };

//   return (
//     <div>
//       <button onClick={suggestTransportMode}>Get Transport Suggestions</button>
//     </div>
//   );
// };

// export default TravelModeSelector;

// import React, { useState } from 'react';

// const TravelModeSelector = ({ lat, lon }) => {
//   const [suggestions, setSuggestions] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchSuggestions = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`/api/travel/suggestions?lat=${lat}&lon=${lon}`);
//       const data = await response.json();
//       setSuggestions(data);
//     } catch (error) {
//       console.error('Error fetching suggestions:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <button onClick={fetchSuggestions} disabled={loading}>
//         {loading ? 'Loading...' : 'Get Transport Suggestions'}
//       </button>
//       {suggestions && (
//         <ul>
//           {suggestions.map((item, index) => (
//             <li key={index}>{item.name || item.title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TravelModeSelector;

import React, { useState } from 'react';

const TravelModeSelector = ({ ages, budget, setTravelMode, latitude, longitude }) => {
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async () => {
    if (!latitude || !longitude) {
      console.error('Latitude and longitude are required for fetching suggestions');
      return;
    }

    try {
      const response = await fetch(`https://opentripmap-places-v1.p.rapidapi.com/en/places/radius?radius=1000&lon=${longitude}&lat=${latitude}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY, // Your RapidAPI key from .env
          'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSuggestions(data.features); // Adjust according to API response structure
      displaySuggestions(data.features);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const displaySuggestions = (data) => {
    const suggestionsText = data.map((place, index) => `${index + 1}. ${place.properties.name}`).join('\n');
    setTravelMode(`Based on your group and budget, we recommend these travel options near your destination:\n\n${suggestionsText}`);
  };

  return (
    <div>
      <button onClick={fetchSuggestions}>Get Transport Suggestions</button>
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion.properties.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TravelModeSelector;
