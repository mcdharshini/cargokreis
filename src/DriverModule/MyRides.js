import React from 'react';
import { useNavigate } from "react-router-dom";
import Footer from "../javascript/Footer";
import MyRideCard from "../javascript/MyRidecard";  // Correct component import
import NavbarDriver from './NavbarDriver';

const myrides = [
    {
        id: 1,
        departureTime: '11:00',
        arrivalTime: '21:30',
        departure: 'Coimbatore',
        arrival: 'Bangalore',
        duration: '10h30m',
        drivername: 'Ram',
        status: 'Delivered',
        image: '/images/image5.png',  // Correct image path
    },
    {
        id: 2,
        departureTime: '11:00',
        arrivalTime: '21:30',
        departure: 'Mumbai',
        arrival: 'Bengaluru',
        duration: '10h30m',
        drivername: 'Ram',
        status: 'Yet to Start',
        image: '/images/image2.png',  // Correct image path
    },
    {
        id: 3,
        departureTime: '11:00',
        arrivalTime: '21:30',
        departure: 'Mumbai',
        arrival: 'Chennai',
        duration: '10h30m',
        drivername: 'Ram',
        status: 'Delivered',
        image: '/images/image4.png',  // Correct image path
    },
    {
        id: 4,
        departureTime: '11:00',
        arrivalTime: '21:30',
        departure: 'Mumbai',
        arrival: 'Bengaluru',
        duration: '10h30m',
        drivername: 'Ram',
        status: 'In Transit',
        image: '/images/image5.png',  // Correct image path
    },
];

export default function Myride() {
    const navigate = useNavigate();
    return (
        <div>
            <NavbarDriver/>
            <div style={{ width: '150vh', marginLeft: '225px', padding: '100px' }}>
                {myrides.map((myride) => (
                    <div key={myride.id} onClick={() => navigate(`/ridedetail/${myride.id}`)}>
                        <MyRideCard myride={myride} />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}
