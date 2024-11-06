// src/pages/ItineraryPage.js
import React, { useState, useEffect } from 'react';
import './ItineraryPage.css';

const ItineraryPage = () => {
  const [mustSeePlaces, setMustSeePlaces] = useState([]);
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    const fetchItineraries = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/travel/itinerary'); // Update to your API endpoint
        if (!response.ok) throw new Error('Failed to fetch itineraries'); // Handle non-200 responses

        const data = await response.json();
        setItineraries(data.itineraries || []);
        setMustSeePlaces(data.mustSeePlaces || []);
      } catch (error) {
        console.error('Error fetching itineraries:', error);
        setError('Unable to load itineraries. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchItineraries();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error-message">{error}</div>; // Display error message if fetch fails

  return (
    <div className="itinerary-container">
      <h1 className="itinerary-title">Your Perfect Itinerary</h1>

      {/* Must-See Places Section */}
      <div className="must-see-places">
        <h2>Must-See Places</h2>
        <div className="places-grid">
          {mustSeePlaces.length > 0 ? (
            mustSeePlaces.map((place) => (
              <div className="place-card" key={place.id}>
                <img src={place.image || 'default-image-url.jpg'} alt={place.name} />
                <h3>{place.name}</h3>
                <p>{place.description || 'No description available.'}</p>
              </div>
            ))
          ) : (
            <p>No must-see places available.</p>
          )}
        </div>
      </div>

      {/* Predefined Itineraries Section */}
      <div className="itineraries">
        <h2>Predefined Itineraries</h2>
        {itineraries.length > 0 ? (
          <ul>
            {itineraries.map((itinerary) => (
              <li key={itinerary.id}>
                <h3>{itinerary.title}</h3>
                <p>{itinerary.description || 'No description available.'}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No itineraries available.</p>
        )}
      </div>
    </div>
  );
};

export default ItineraryPage;
