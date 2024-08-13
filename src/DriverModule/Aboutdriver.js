import React, { useState } from 'react';
import PopularHubs from '../javascript/PopularHubs';
import Delivery from '../javascript/Delivery';
import Footer from '../javascript/Footer';
// import { Link } from 'react-router-dom';
// import logo from './Assets/logo.jpg';
// import profileIcon from '../src/Assets/profileb1.png'; // Update this path to your profile icon image
import NavbarDriver from './NavbarDriver';

export default function Aboutdriver() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div>
      <NavbarDriver />
      <PopularHubs />
      <Delivery />
      <Footer />
    </div>
  )
}