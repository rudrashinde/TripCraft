const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

const mustSeePlaces = [
  {
    id: 1,
    name: 'Eiffel Tower',
    image: 'https://example.com/eiffel.jpg',
    description: 'An iconic symbol of France in Paris.',
  },
  {
    id: 2,
    name: 'Colosseum',
    image: 'https://example.com/colosseum.jpg',
    description: 'Ancient Roman arena in Rome.',
  },
  // Add more places as needed
];

const itineraries = [
  {
    id: 1,
    title: 'Paris Adventure',
    description: 'Explore the best sights of Paris in 3 days.',
  },
  {
    id: 2,
    title: 'Rome Highlights',
    description: 'A 2-day itinerary covering Rome’s historic spots.',
  },
  // Add more itineraries as needed
];

// GET endpoint to fetch itinerary data
router.get('/itinerary', (req, res) => {
  try {
    res.json({
      success: true,
      mustSeePlaces: mustSeePlaces,
      itineraries: itineraries,
    });
  } catch (error) {
    console.error('Error fetching itinerary data:', error);
    res.status(500).json({
      success: false,
      message: 'Server error: Unable to fetch itinerary data.',
    });
  }
});

// Travel suggestions route
router.get('/suggestions', async (req, res) => {
  const { lat, lon } = req.query;

  try {
    const response = await fetch(`https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname?lat=${lat}&lon=${lon}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com',
      },
    });

    if (!response.ok) throw new Error(`API error: ${response.statusText}`);

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching travel suggestions:', error);
    res.status(500).json({ message: 'Failed to fetch travel suggestions.' });
  }
});

module.exports = router;
