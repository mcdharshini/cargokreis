import React, { useState } from 'react';
import Filter from './Filter';
import RideCard from './RideCard';
import '../Styles/Layout.css';

const sampleRides = [
    {
        startTime: "04:00",
        endTime: "10:10",
        duration: "6h10m",
        startLocation: "Sultanpet",
        endLocation: "Bhovi Palya",
        driverName: "Giri",
        driverRating: 4.5,
        bookingType: "Instant Booking",
        price: 800
    },
    {
        startTime: "06:30",
        endTime: "13:20",
        duration: "6h50m",
        startLocation: "Karamadai",
        endLocation: "Bengaluru",
        driverName: "Prabhu",
        driverRating: 4.4,
        bookingType: "Max. 2 in the back",
        price: 790
    },
    {
        startTime: "08:00",
        endTime: "14:10",
        duration: "6h10m",
        startLocation: "Ooty",
        endLocation: "Mysore",
        driverName: "Ravi",
        driverRating: 4.8,
        bookingType: "Instant Booking",
        price: 850
    }
];

const Layout = () => {
    const [filters, setFilters] = useState({
        driverName: '',
        minRating: 0,
        startDate: '',
        maxPrice: '',
        bookingType: ''
    });

    const filteredRides = sampleRides.filter(ride => {
        return (
            (filters.driverName === '' || ride.driverName.toLowerCase().includes(filters.driverName.toLowerCase())) &&
            (filters.minRating === 0 || ride.driverRating >= filters.minRating) &&
            (filters.startDate === '' || new Date(ride.startDate).toDateString() === new Date(filters.startDate).toDateString()) &&
            (filters.maxPrice === '' || ride.price <= filters.maxPrice) &&
            (filters.bookingType === '' || ride.bookingType === filters.bookingType)
        );
    });

    return (
        <div className="main-layout">
            <div className="filter-section">
                <Filter filters={filters} setFilters={setFilters} />
            </div>
            <div className="rides-section">
                {filteredRides.map((ride, index) => (
                    <RideCard key={index} ride={ride} />
                ))}
            </div>
        </div>
    );
};

export default Layout;
