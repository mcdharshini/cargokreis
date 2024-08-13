import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Driversignup.css';
import truckyImage from './Assets/girldriver2.avif'; // Make sure to import your image

function DriverSignup() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    // <div className="App1">
      <div className="container">
        <div className="text-container">
          <h1>Become a captain,<br/> join our network.</h1>
          <p className="caption">
            Drive with ShareTruck and be a leader. Maximize earnings, faster and easier than ever before!
            You are just a click away.
          </p>
          <button className="signup  -button" onClick={() => navigate('/signup')}>
            Driver sign up
          </button>
        </div>
        <div className="image-container">
          <img src={truckyImage} alt="Trukky" />
        </div>
      </div>
    // </div>
  );
}

export default DriverSignup;
