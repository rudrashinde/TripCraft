// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import the updated styles

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // State to store error or success messages
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      setMessage('Please fill in both fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/api/auth/login', { // Adjusted endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Login successful!');
        navigate('/welcome'); // Navigate to the welcome page upon successful login
      } else {
        setMessage(data.message || 'Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('Server error. Please try again later.');
    }
  };

  const handleGoogleLogin = () => {
    // Placeholder for Google Sign-In logic
    alert('Google Sign-In is not yet implemented!');
  };

  return (
    <div className="login-page">
      {/* Left section */}
      <div className="left-section"></div>

      {/* Right section with the login form */}
      <div className="right-section">
        <div className="login-container">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
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
              <label>Password:</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter password" 
                required 
              />
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
          {message && <p className="message">{message}</p>} {/* Display success or error message */}
          <div className="google-signin-container">
            <button className="google-signin-btn" onClick={handleGoogleLogin}>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
