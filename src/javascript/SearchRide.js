import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import RideCard from './RideCard';
import '../Styles/SearchRide.css';
import SearchBox from './SearchBox';
import Filter from './Filter';

const sampleRides = [
    {
        startTime: '16:30',
        duration: '4h 30m',
        endTime: '21:00',
        startLocation: 'Chennai',
        endLocation: 'Hosur',
        driverName: 'Murali',
        driverRating: '4.5',
        bookingType: 'Instant Booking',
        price: '700',
    },
    {
        startTime: '17:00',
        duration: '6h 20m',
        endTime: '23:20',
        startLocation: 'Chennai',
        endLocation: 'Bangalore',
        driverName: 'Dilip',
        driverRating: '4.9',
        bookingType: 'Instant Booking',
        price: '900',
    },
    {
        startTime: '09:00',
        duration: '5h 00m',
        endTime: '14:00',
        startLocation: 'Chennai',
        endLocation: 'Coimbatore',
        driverName: 'Ravi',
        driverRating: '4.7',
        bookingType: 'Advance Booking',
        price: '800',
    },
    {
        startTime: '12:00',
        duration: '3h 45m',
        endTime: '15:45',
        startLocation: 'Chennai',
        endLocation: 'Salem',
        driverName: 'Kumar',
        driverRating: '4.6',
        bookingType: 'Instant Booking',
        price: '600',
    },
    {
        startTime: '14:00',
        duration: '7h 15m',
        endTime: '21:15',
        startLocation: 'Chennai',
        endLocation: 'Madurai',
        driverName: 'Anand',
        driverRating: '4.8',
        bookingType: 'Advance Booking',
        price: '1000',
    },
    {
        startTime: '18:30',
        duration: '4h 45m',
        endTime: '23:15',
        startLocation: 'Chennai',
        endLocation: 'Tiruchirappalli',
        driverName: 'Suresh',
        driverRating: '4.3',
        bookingType: 'Instant Booking',
        price: '750',
    },
    {
        startTime: '20:00',
        duration: '6h 30m',
        endTime: '02:30',
        startLocation: 'Chennai',
        endLocation: 'Thanjavur',
        driverName: 'Mani',
        driverRating: '4.4',
        bookingType: 'Advance Booking',
        price: '850',
    },
    {
        startTime: '22:00',
        duration: '5h 00m',
        endTime: '03:00',
        startLocation: 'Chennai',
        endLocation: 'Nagercoil',
        driverName: 'Vijay',
        driverRating: '4.5',
        bookingType: 'Instant Booking',
        price: '950',
    },
    {
        startTime: '08:00',
        duration: '4h 00m',
        endTime: '12:00',
        startLocation: 'Chennai',
        endLocation: 'Erode',
        driverName: 'Rajesh',
        driverRating: '4.6',
        bookingType: 'Advance Booking',
        price: '700',
    },
    {
        startTime: '06:00',
        duration: '5h 30m',
        endTime: '11:30',
        startLocation: 'Chennai',
        endLocation: 'Kanyakumari',
        driverName: 'Prakash',
        driverRating: '4.7',
        bookingType: 'Instant Booking',
        price: '1000',
    },
    {
        startTime: '10:30',
        duration: '4h 30m',
        endTime: '15:00',
        startLocation: 'Chennai',
        endLocation: 'Trichy',
        driverName: 'Vijay',
        driverRating: '4.5',
        bookingType: 'Instant Booking',
        price: '850',
    },
    {
        startTime: '11:00',
        duration: '5h 00m',
        endTime: '16:00',
        startLocation: 'Chennai',
        endLocation: 'Vellore',
        driverName: 'Ramesh',
        driverRating: '4.8',
        bookingType: 'Advance Booking',
        price: '900',
    },
    {
        startTime: '13:00',
        duration: '6h 00m',
        endTime: '19:00',
        startLocation: 'Chennai',
        endLocation: 'Kumbakonam',
        driverName: 'Sundar',
        driverRating: '4.7',
        bookingType: 'Instant Booking',
        price: '950',
    },
    {
        startTime: '15:00',
        duration: '3h 45m',
        endTime: '18:45',
        startLocation: 'Chennai',
        endLocation: 'Thiruvannamalai',
        driverName: 'Karthik',
        driverRating: '4.6',
        bookingType: 'Advance Booking',
        price: '750',
    },
    {
        startTime: '18:00',
        duration: '5h 30m',
        endTime: '23:30',
        startLocation: 'Chennai',
        endLocation: 'Tuticorin',
        driverName: 'Kannan',
        driverRating: '4.9',
        bookingType: 'Instant Booking',
        price: '1050',
    },
    {
        startTime: '20:30',
        duration: '7h 00m',
        endTime: '03:30',
        startLocation: 'Chennai',
        endLocation: 'Pondicherry',
        driverName: 'Saravanan',
        driverRating: '4.3',
        bookingType: 'Advance Booking',
        price: '800',
    },
];

function SearchRide() {
    const location = useLocation();
    const sampleRides = location.state?.rides||[];
    const [rides, setRides] = useState(sampleRides);
    const [filters, setFilters] = useState({
        driverName: '',
        minRating: '',
        startDate: '',
        maxPrice: '',
        bookingType: ''
    });
    const { state } = location;

    useEffect(() => {
        if (state) {
            const filteredRides = sampleRides.filter(ride =>
                (!state.leavingFrom || ride.startLocation.toLowerCase().includes(state.leavingFrom.toLowerCase())) &&
                (!state.goingTo || ride.endLocation.toLowerCase().includes(state.goingTo.toLowerCase())) &&
                (!state.startDate || new Date(ride.startTime).toDateString() === new Date(state.startDate).toDateString())
            );
            setRides(filteredRides);
        }
    }, [state]);

    useEffect(() => {
        const filteredRides = sampleRides.filter(ride =>
            (!filters.driverName || ride.driverName.toLowerCase().includes(filters.driverName.toLowerCase())) &&
            (!filters.minRating || ride.driverRating >= filters.minRating) &&
            (!filters.bookingType || ride.bookingType === filters.bookingType) &&
            (!filters.maxPrice || ride.price <= filters.maxPrice)
        );
        setRides(filteredRides);
    }, [filters]);

    return (
        <div className="search-ride-container">
            <Navbar /><br/>
            <SearchBox />
            <div className="content-container">
                <Filter filters={filters} setFilters={setFilters} />
                <div className="ride-list">
                    {rides.map((ride, index) => (
                        <RideCard key={index} ride={ride} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchRide;
