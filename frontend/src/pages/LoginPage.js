import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import the updated styles

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      // Navigate to welcome page after login
      navigate('/welcome');
    } else {
      alert('Please fill in both fields.');
    }
  };

  const handleGoogleLogin = () => {
    // Logic for Google Sign-In (Placeholder for now)
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
