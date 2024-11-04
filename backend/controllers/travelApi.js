// backend/controllers/travelApi.js
const axios = require('axios');

// Function to fetch travel destinations based on parameters
async function getTravelSuggestions(req, res) {
    const { ageGroup, numPeople, budget } = req.query;

    try {
        // Call to the external travel API, e.g., OpenTripMap
        const response = await axios.get(`https://api.opentripmap.com/0.1/en/places/geoname`, {
            params: {
                name: 'destination', // placeholder: adjust based on API's parameters
                key: process.env.TRAVEL_API_KEY, // Add API key to .env
                ageGroup,
                numPeople,
                budget,
            },
        });

        res.status(200).json(response.data); // Send response data to frontend
    } catch (error) {
        console.error("Error fetching travel data:", error.message);
        res.status(500).json({ error: "Failed to fetch travel suggestions" });
    }
}

module.exports = { getTravelSuggestions };
