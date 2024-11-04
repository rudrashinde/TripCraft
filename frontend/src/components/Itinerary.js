// import React from 'react';

// const Itinerary = ({ ageGroup, destination, travelMode }) => {
//   return (
//     <div>
//       <h2>Your Itinerary</h2>
//       <h3>Participants:</h3>
//       <ul>
//         {ageGroup.map((age, index) => (
//           <li key={index}>{`Person ${index + 1}: ${age}`}</li>
//         ))}
//       </ul>
//       <p>Destination: {destination}</p>
//       <p>Travel Mode Suggestions:</p>
//       <pre>{travelMode}</pre>
//     </div>
//   );
// };

// export default Itinerary;
// src/components/Itinerary.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Itinerary = ({ ageGroup, destination, travelMode, lat, lon }) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (lat && lon) {
        const options = {
          method: 'GET',
          url: `https://opentripmap-places-v1.p.rapidapi.com/en/places/radius`,
          params: {
            lat: lat,
            lon: lon,
            radius: '10000', // Radius in meters
            limit: '10', // Limit the number of results
            offset: '0',
            categories: destination // Pass the selected destination as a category filter
          },
          headers: {
            'X-RapidAPI-Key': 'YOUR_API_KEY', // Replace with your OpenTripMap API key
            'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com',
          },
        };

        try {
          const response = await axios.request(options);
          const places = response.data.features;

          // Extract the place names and descriptions
          const suggestionsList = places.map(place => ({
            name: place.properties.name,
            description: place.properties.description || 'No description available',
          }));

          setSuggestions(suggestionsList);
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      }
    };

    fetchSuggestions();
  }, [lat, lon, destination]); // Fetch new suggestions whenever lat, lon, or destination changes

  return (
    <div>
      <h2>Your Itinerary</h2>
      <p>Travel Mode: {travelMode}</p>
      <h3>Suggestions for {destination}:</h3>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>
            <strong>{suggestion.name}</strong>: {suggestion.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Itinerary;
