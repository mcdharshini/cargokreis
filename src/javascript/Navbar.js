import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import profileIcon from '../Assets/profileb1.png';  // Ensure the path is correct
import '../Styles/Navbar.css';  // Ensure to create a CSS file if not existing

const Navbar = ({ onLoginClick }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <header className="header-nav">
            <Link to={'/'}>
                <div className="logo"><img src={logo} alt='logo' style={{ height: '50px'}} /></div>
            </Link>
            <nav className="nav">
                <Link to="/searchride" className='search1'>Find Ride</Link>
                <Link to="/myride" className='search1'>My Ride</Link>
                <Link to="/about" className='search1'>About</Link>
                <div className="profile-menu" onClick={toggleDropdown}>
                    <img src={profileIcon} alt="Profile" className="profile-icon" />
                    {dropdownVisible && (
                        <div className="dropdown-menu">
                            <Link onClick={onLoginClick}>Login</Link>
                            <Link to="/logout">Logout</Link>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
