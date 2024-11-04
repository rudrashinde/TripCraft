// import React from 'react';

// const AgeSelector = ({ setAgeGroup }) => {
//   const handleChange = (event) => {
//     setAgeGroup(event.target.value);
//   };

//   return (
//     <div>
//       <label htmlFor="age">Select Age Group:</label>
//       <select id="age" onChange={handleChange}>
//         <option value="">Select...</option>
//         <option value="child">Child</option>
//         <option value="teen">Teen</option>
//         <option value="adult">Adult</option>
//         <option value="senior">Senior</option>
//       </select>
//     </div>
//   );
// };

// export default AgeSelector;

import React from 'react';

const AgeSelector = ({ index, setAgeGroup }) => {
  const handleChange = (event) => {
    setAgeGroup(event.target.value); // Set age for the specific person
  };

  return (
    <div>
      <label htmlFor={`age-${index}`}>Select Age for Person {index + 1}:</label>
      <select id={`age-${index}`} onChange={handleChange}>
        <option value="">Select...</option>
        <option value="child">Child</option>
        <option value="teen">Teen</option>
        <option value="adult">Adult</option>
        <option value="senior">Senior</option>
      </select>
    </div>
  );
};

export default AgeSelector;
