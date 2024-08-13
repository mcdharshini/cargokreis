
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';

const NavbarDriver = ({ onOfferRideClick }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const styles = {
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            backgroundColor: 'white',
            color: '#77a5d6',
            position: 'fixed',
            width: '98%',
            top: 0,
            zIndex: 1000,
        },
        logo: {
            height: '50px',
        },
        nav: {
            display: 'flex',
            alignItems: 'center',
        },
        navItem: {
            margin: '0 15px',
            cursor: 'pointer',
            color: '#77a5d6',
            textDecoration: 'none',
            fontSize: '16px',
        },
    };

    return (
        <header style={styles.header}>
            <Link to={'/'}>
                <img src={logo} alt='logo' style={styles.logo} />
            </Link>
            <nav style={styles.nav}>
                <span onClick={onOfferRideClick} style={styles.navItem}>Offer Ride</span>
                <Link to="/myriders" style={styles.navItem}>My Ride</Link>
                <Link to="/VechileReg" style={styles.navItem}>Vehicle Registration</Link>
                <Link to="/aboutdr" style={styles.navItem}>About</Link>
            </nav>
        </header>
    );
};

export default NavbarDriver;
