import React, { useState } from 'react';
import './ItineraryPage.css';
import paris from '../assets/paris.jpg';
import greatwall from '../assets/greatwall.jpg';
import colosseum from '../assets/colosseum.jpg';
import machupicchu from '../assets/machupicchu.jpg';
import mountfuji from '../assets/mountfuji.jpg';
const ItineraryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Static data for must-see places and itineraries
  const mustSeePlaces = [
    {
      id: 1,
      name: 'Eiffel Tower',
      description: 'The iconic symbol of Paris, offering stunning views of the city.',
      image: paris
    },
    {
      id: 2,
      name: 'Great Wall of China',
      description: 'Discover the Great Wall of China, winding through landscapes and rich history.',
      image: greatwall
    },
    {
      id: 3,
      name: 'Colosseum',
      description: 'An ancient amphitheater in Rome with rich history and architecture.',
      image: colosseum
    },
    {
      id: 4,
      name: 'Machu Pichu',
      description: 'The mysterious Inca citadel in Peru, a UNESCO World Heritage site.',
      image: machupicchu
    },
    {
      id: 5,
      name: "Mount Fuji",
      description: "Japan's iconic peak, symbol of natural beauty and cultural heritage.",
      image: mountfuji
    }
  ];

  const itineraries = [
    {
      id: 1,
      title: 'Paris Highlights',
      description: 'A 3-day itinerary covering the best sights in Paris.',
      duration: '3 days',
      price: '$500',
    },
    {
      id: 2,
      title: 'Rome in 48 Hours',
      description: 'A fast-paced itinerary to experience the beauty of Rome in two days.',
      duration: '2 days',
      price: '$300',
    },
    {
      id: 3,
      title: 'Beijing Essentials',
      description: 'Explore Beijing’s top attractions over a 4-day itinerary.',
      duration: '4 days',
      price: '$700',
    },
    {
      id: 4,
      title: 'London Exploration',
      description: 'Discover the landmarks of London in a 5-day tour.',
      duration: '5 days',
      price: '$800',
    },
    {
      id: 5,
      title: 'Tokyo Adventure',
      description: 'A thrilling 4-day itinerary of the best experiences in Tokyo.',
      duration: '4 days',
      price: '$600',
    },
    {
      id: 6,
      title: 'Sydney Getaway',
      description: 'A relaxing 3-day trip to enjoy the sights and sounds of Sydney.',
      duration: '3 days',
      price: '$550',
    }
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter itineraries based on the search query
  const filteredItineraries = itineraries.filter((itinerary) =>
    itinerary.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="itinerary-container">
      <h1 className="itinerary-title">Your Perfect Itinerary</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search itineraries..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className="must-see-places">
        <h2>Must-See Places</h2>
        <div className="places-grid">
          {mustSeePlaces.map((place) => (
            <div className="place-card" key={place.id}>
              <img src={place.image} alt={place.name} />
              <h3>{place.name}</h3>
              <p>{place.description}</p>
              <button className="cta-button">Add to Itinerary</button>
            </div>
          ))}
        </div>
      </div>

      <div className="itineraries">
        <h2>Predefined Itineraries</h2>
        <div className="itinerary-cards">
          {filteredItineraries.map((itinerary) => (
            <div className="itinerary-card" key={itinerary.id}>
              <h3>{itinerary.title}</h3>
              <p>{itinerary.description}</p>
              <p><strong>Duration:</strong> {itinerary.duration}</p>
              <p><strong>Price:</strong> {itinerary.price}</p>
              <button className="cta-button">Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItineraryPage;