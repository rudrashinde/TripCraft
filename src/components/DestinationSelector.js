import React from 'react';

const DestinationSelector = ({ setDestination }) => {
  const handleChange = (event) => {
    setDestination(event.target.value);
  };

  return (
    <div>
      <label htmlFor="destination">Select Destination:</label>
      <select id="destination" onChange={handleChange}>
        <option value="">Select...</option>
        <option value="beach">Beach</option>
        <option value="mountains">Mountains</option>
        <option value="city">City</option>
        <option value="forest">Forest</option>
      </select>
    </div>
  );
};

export default DestinationSelector;
