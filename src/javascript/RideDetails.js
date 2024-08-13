import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from '@emotion/styled';
import { FaStar } from 'react-icons/fa';

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
const Card = styled.div`
    background-color: white;
    margin:30px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    border-radius: 8px;
    align-items: center;
    width:80vh;
`;
export default function Ridedetails() {
    const { id } = useParams();
    const ride = myrides.find(ride => ride.id === parseInt(id));
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div>
            <Navbar />
            <Card style={{ margin: '20px', marginLeft: '400px' }}>
                {ride ? (
                    <div style={{ paddingLeft: '100px' }}>
                        {/* <h2>Ride Details</h2> */}
                        <div style={{ display: 'flex' }}>
                            <div>
                                <p><strong>Departure:</strong> {ride.departure}</p>
                                <p><strong>Departure Time:</strong> {ride.departureTime}</p>
                            </div>
                            <div style={{ paddingLeft: '100px' }}>
                                <p><strong>Arrival:</strong> {ride.arrival}</p>
                                <p><strong>Arrival Time:</strong> {ride.arrivalTime}</p>
                            </div>
                        </div>
                        <hr style={{ border: '1px solid #ccc', width: '50vh', margin: '10px' }} />
                        <p><strong>Duration:</strong> {ride.duration}</p>
                        <p><strong>Driver Name:</strong> {ride.drivername}</p>
                        <p><strong>Driver MNo.:</strong> 9865191716 </p>
                        <p><strong>Status:</strong> {ride.status}</p>
                    </div>
                ) : (
                    <p>Ride not found</p>
                )}
            </Card>
            <Card style={{ margin: '20px', marginLeft: '400px' }}>
                <div>
                    <h3>Rate this ride</h3>
                    <div style={{ display: 'flex' }}>
                        {[...Array(5)].map((star, index) => {
                            const ratingValue = index + 1;
                            return (
                                <label key={index}>
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={ratingValue}
                                        onClick={() => setRating(ratingValue)}
                                        style={{ display: 'none' }}
                                    />
                                    <FaStar
                                        size={30}
                                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                        // color={ratingValue<=rating ? "#ffc107" : "#e4e5e9"} 
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(0)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </label>
                            );
                        })}
                    </div>
                    {rating > 0 && <p>Rating: {rating} star(s)</p>}
                </div>
                <br/>
                <hr style={{ border: '1px solid #ccc', width: '78vh', margin: '10px' }} />
                <br/>
                <div>
                    <h3>Feedback</h3>
                    <textarea 
                        placeholder="Enter your feedback"
                        style={{
                            width:'70vh',
                            padding:'10px',
                            border:'1px solid #ccc',
                            borderRadius:'4px',
                            margin:'10px',
                            marginBottom:'20px',
                        }}
                    />
                    <button style={{padding:'10px',fontSize:'1rem'}}>Submit</button>
                </div>
            </Card>
            <Footer />
        </div>
    );
}