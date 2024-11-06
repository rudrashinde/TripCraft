// src/pages/SignUpPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Clear any previous messages
    setMessage('');

    // Basic validation for empty fields
    if (!username || !email || !password) {
      setMessage('All fields are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/api/auth/register', { // Adjusted API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // Removed email if not used in backend
      });
      const data = await response.json();
      if (response.ok) {
        // If registration is successful, navigate to the welcome page
        setMessage('Registration successful!');
        navigate('/welcome');
      } else {
        // Display error message from response if registration fails
        setMessage(data.message || 'Error occurred during registration.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Server error, please try again later.');
    }
  };

  return (
    <div className="signup-page">
      {/* Left section */}
      <div className="left-section"></div>

      {/* Right section with the signup form */}
      <div className="right-section">
        <div className="signup-container">
          <h1>Sign Up</h1>
          <form onSubmit={handleSignUp}>
            <div>
              <label>Username:</label>
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter username" 
                required 
              />
            </div>
            <div>
              <label>Email:</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter email" 
                required 
              />
            </div>
            <div>
              <label>Password:</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter password" 
                required 
              />
            </div>
            <button type="submit" className="signup-btn">Sign Up</button>
          </form>
          {message && <p className="message">{message}</p>} {/* Display success or error message */}
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
