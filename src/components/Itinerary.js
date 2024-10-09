import React from 'react';

const Itinerary = ({ ageGroup, destination, travelMode }) => {
  return (
    <div>
      <h2>Your Itinerary</h2>
      <h3>Participants:</h3>
      <ul>
        {ageGroup.map((age, index) => (
          <li key={index}>{`Person ${index + 1}: ${age}`}</li>
        ))}
      </ul>
      <p>Destination: {destination}</p>
      <p>Travel Mode Suggestions:</p>
      <pre>{travelMode}</pre>
    </div>
  );
};

export default Itinerary;
