// src/SearchNext.js
import React from 'react';
import '../Styles/SearchNext.css'; // Update with your CSS file
import SearchBar from './SearchBar';
import RideCard from './RideCard';
import logo from '../Assets/logo.jpg'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const rides = [
    {
        startTime: '04:00',
        duration: '6h10',
        endTime: '10:10',
        startLocation: 'Sultanpet',
        endLocation: 'Bhovi Palya',
        driverImage: 'driver1.jpg', // Add your image path
        driverName: 'Giri',
        bookingType: 'Instant Booking',
        price: 800
    },
    {
        startTime: '06:30',
        duration: '6h50',
        endTime: '13:20',
        startLocation: 'Karamadai',
        endLocation: 'Bengaluru',
        driverImage: 'driver2.jpg', // Add your image path
        driverName: 'Prabhu',
        bookingType: 'Instant Booking',
        price: 790
    }
    // Add more rides as needed
];

function SearchNext() {
    return (
        <div className="App-search">
            <Navbar/>
            {/* <header>
            <Link to={'/'}><div className="logo"><img src={logo} alt='a' style={{height:'50px'}}/></div></Link>
                <img src="logo.png" alt="ShareTruck" className="logo-search" />
                <button className="publish-ride">Publish a ride</button>
                <div className="profile-icon">👤</div>
            </header> */}
            <SearchBar />
            <div className="rides">
                {rides.map((ride, index) => (
                    <RideCard key={index} ride={ride} />
                ))}
            </div>
        </div>
    );
}

export default SearchNext;
