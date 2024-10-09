import React from 'react';

const TravelModeSelector = ({ ages, budget, setTravelMode }) => {
  const suggestTransportMode = () => {
    const ageCounts = {
      children: 0,
      teenagers: 0,
      adults: 0,
      seniors: 0,
    };

    ages.forEach(age => {
      if (age === 'child') ageCounts.children++;
      else if (age === 'teen') ageCounts.teenagers++;
      else if (age === 'adult') ageCounts.adults++;
      else if (age === 'senior') ageCounts.seniors++;
    });

    let suggestions = [];

    if (budget === 'low') {
      suggestions.push(
        'Economy Flight: Affordable for longer distances. Consider booking in advance for lower rates.',
        'Family Minivan (Rental): Cost-effective for road trips. Spacious for families and gear.'
      );
    } else if (budget === 'medium') {
      suggestions.push(
        'Premium Economy Flight: More comfort and amenities compared to Economy.',
        'Private Coach/Bus: Shared cost among the group for affordability.'
      );
    } else if (budget === 'high') {
      suggestions.push(
        'First-Class Flight: Maximum comfort and amenities.',
        'Luxury Minivan or SUV (Rental): High-end features for comfort during road trips.'
      );
    }

    setTravelMode(`For your group of ${ageCounts.adults} adults, ${ageCounts.teenagers} teenagers, ${ageCounts.children} children and ${ageCounts.seniors} seniors, considering your budget of ${budget}, we recommend:\n\n` + suggestions.join('\n'));
  };

  return (
    <div>
      <button onClick={suggestTransportMode}>Get Transport Suggestions</button>
    </div>
  );
};

export default TravelModeSelector;
