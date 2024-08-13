import React from 'react';
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import MyRideCard from "../javascript/MyRidecard";  // Correct component import
import Navbar from "./Navbar";

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
    },
];

export default function Myride() {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <div style={{ width: '150vh', marginLeft: '225px', padding: '70px' }}>
                {myrides.map((myride,index) => (
                    <div key={index} onClick={() => navigate(`/ridedetail/${myride.id}`)}>
                        <MyRideCard myride={myride} />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}
