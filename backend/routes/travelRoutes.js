// // backend/routes/travelRoutes.js
// const express = require('express');
// const { getTravelSuggestions } = require('../controllers/travelApi');
// const router = express.Router();

// router.get('/suggestions', getTravelSuggestions);

// module.exports = router;
// backend/routes/travelRoutes.js
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY; // Use the API key from .env

// Endpoint to get destinations based on geoname
router.get('/destinations', async (req, res) => {
    const { lat, lon } = req.query; // Get latitude and longitude from query parameters

    try {
        const response = await axios.get('https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname', {
            headers: {
                'X-RapidAPI-Key': RAPIDAPI_KEY,
                'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com',
                'Content-Type': 'application/json',
            },
            params: {
                lat,
                lon,
            },
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching destinations:', error);
        res.status(500).json({ message: 'Error fetching destinations' });
    }
});

module.exports = router;
