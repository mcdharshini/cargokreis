import React, { useState } from 'react';
import PopularHubs from './PopularHubs';
import Delivery from './Delivery';
import Footer from './Footer';
// import { Link } from 'react-router-dom';
// import logo from './Assets/logo.jpg';
// import profileIcon from '../src/Assets/profileb1.png'; // Update this path to your profile icon image
import Navbar from './Navbar';

export default function About() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div>
      <Navbar/>
      <PopularHubs />
      <Delivery />
      <Footer />
    </div>
  )
}