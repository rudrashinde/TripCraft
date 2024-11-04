// // frontend/src/api/travelApi.js
// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/travel';  // URL to backend server

// export async function fetchTravelSuggestions(ageGroup, numPeople, budget) {
//     try {
//         const response = await axios.get(`${API_URL}/suggestions`, {
//             params: { ageGroup, numPeople, budget },
//         });
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching travel suggestions:", error.message);
//         return { error: "Failed to fetch travel suggestions" };
//     }
// }

// backend/travelApi.js
const fetch = require('node-fetch');

const getSuggestions = async (lat, lon) => {
  const url = `https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname?lat=${lat}&lon=${lon}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY, // Use the key from .env
        'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com',
      },
    });

    if (!response.ok) throw new Error(`Error: ${response.statusText}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

module.exports = getSuggestions;
