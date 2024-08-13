import React from 'react';
import '../Styles/PopularHubs.css';

const hubs = [
  { name: "Bangalore Transport", img: "Banga.jpeg",ResizeObserverSize:"100" },
  { name: "Mumbai Transport", img: "Mumbai.png" },
  { name: "Delhi Transport", img: "Delhi.png" },
  { name: "Chennai Transport", img: "Chenai.jpeg" },
  { name: "Kolkata Transport", img: "kokataa.jpeg" },
  { name: "Hyderabad Transport", img: "Hyder.jpeg" },
  { name: "Ahmedabad Transport", img: "Aha.jpeg" },
  { name: "Dharmapuri Transport", img: "dharmapuri.jpg" },
  { name: "Coimbatore Transport", img: "coimbatore.jpg" },
];

const PopularHubs = () => {
  return (
    <div className="popular-hubs">
      <h2 style={{padding:'5px'}}>Popular Hubs</h2>
      <div className="hubs-container">
        {hubs.map((hub, index) => (
          <div key={index} className="hub-card">
            <img src={hub.img} alt={hub.name} className="hub-image" />
            <p>{hub.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularHubs;
