import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPiggyBank, faMobileAlt, faStar, faShieldAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Delivery.css';

function Delivery() {
  const features = [
    {
      icon: faCalendarAlt,
      title: "Flexible Scheduling",
      description: "Say goodbye to long delivery windows. Set a time that works for you. Schedule a pickup 7 days a week between 5:00am-11:30pm."
    },
    {
      icon: faPiggyBank,
      title: "Affordable Pricing",
      description: "We use machine learning to give you a fair and accurate upfront price estimate. Save 50% compared to traditional providers."
    },
    {
      icon: faMobileAlt,
      title: "Convenience",
      description: "Our technology makes it easier than ever to book, track, communicate & pay. Request a Delivery Professional in one minute."
    },
    {
      icon: faStar,
      title: "Peer-Reviewed",
      description: "All delivery pros are reviewed by other customers like you. This helps us make sure you only get the best delivery professionals every time."
    },
    {
      icon: faShieldAlt,
      title: "You are Protected",
      description: "Your cargo is protected by our comprehensive cargo insurance and liability insurance policies."
    },
    {
      icon: faSearch,
      title: "Safe and Reliable",
      description: "All GoShare delivery professionals are licensed, insured, background checked and reviewed."
    },
  ];

  return (
    <div className="Appdata"><br></br>
      <h1 className='increase'>Why Choose ShareTruck</h1>
            <h4>for Last Mile Delivery and Moving Services?</h4>
      <div className="firstfeatures">
        {features.map((feature, index) => (
          <div key={index} className="featuredelivery">
            <div className="iconicon">
              <FontAwesomeIcon icon={feature.icon} size="40" color='#007bff' />
            </div>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
        <button className='search'>Free Estimate</button>
    </div>
  );
}

export default Delivery;
