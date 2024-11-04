// import React from 'react';
// import './UserSuccessStories.css'; // Import your CSS file
// import userPhoto1 from '../assets/user-photo1.jpg'; // Import user photo 1
// import userPhoto2 from '../assets/user-photo2.jpg'; // Import user photo 2
// import userPhoto3 from '../assets/user-photo3.jpg'; // Import user photo 3

// const UserSuccessStories = () => {
//   const stories = [
//     {
//       name: 'Alice',
//       photo: userPhoto1,
//       testimonial: 'I had an amazing trip to Bali! The itinerary made everything so easy and enjoyable.',
//     },
//     {
//       name: 'John',
//       photo: userPhoto2,
//       testimonial: 'Thanks to this planner, I was able to visit all the top spots in Tokyo without any hassle!',
//     },
//     {
//       name: 'Emily',
//       photo: userPhoto3,
//       testimonial: 'The travel planning process was a breeze! Highly recommend for anyone looking to travel.',
//     },
//   ];

//   return (
//     <div className="user-stories-section">
//       <h2 className="stories-title">User Success Stories</h2>
//       <div className="stories-grid">
//         {stories.map((story, index) => (
//           <div key={index} className="story-card">
//             <img src={story.photo} alt={story.name} className="user-photo" />
//             <h3 className="user-name">{story.name}</h3>
//             <p className="user-testimonial">"{story.testimonial}"</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserSuccessStories;
import React from 'react';
import './UserSuccessStories.css'; // Import your CSS file
import userPhoto1 from '../assets/user-photo1.jpg'; // Import user photo 1
import userPhoto2 from '../assets/user-photo2.jpg'; // Import user photo 2
import userPhoto3 from '../assets/user-photo3.jpg'; // Import user photo 3
import userPhoto4 from '../assets/user-photo4.jpg'; // Import user photo 4

const UserSuccessStories = () => {
  const stories = [
    {
      name: 'Alice',
      photo: userPhoto1,
      testimonial: 'I had an amazing trip to Bali! The itinerary made everything so easy and enjoyable.',
    },
    {
      name: 'John',
      photo: userPhoto2,
      testimonial: 'Thanks to this planner, I was able to visit all the top spots in Tokyo without any hassle!',
    },
    {
      name: 'Emily',
      photo: userPhoto3,
      testimonial: 'The travel planning process was a breeze! Highly recommend for anyone looking to travel.',
    },
    {
      name: 'Michael',
      photo: userPhoto4,
      testimonial: 'My trip to Sydney was unforgettable! This planner helped me make the most of my time there.',
    },
  ];

  return (
    <div className="user-stories-section">
      <h2 className="stories-title">User Success Stories</h2>
      <div className="stories-grid">
        {stories.map((story, index) => (
          <div key={index} className="story-card">
            <img src={story.photo} alt={story.name} className="user-photo" />
            <h3 className="user-name">{story.name}</h3>
            <p className="user-testimonial">"{story.testimonial}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSuccessStories;
