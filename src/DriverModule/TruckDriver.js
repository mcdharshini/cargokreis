import React from 'react';
import Navbar from "../DriverModule/NavbarDriver";
import Footer from "../javascript/Footer";
import { Link } from 'react-router-dom';

function TruckDriver() {
    return (
        <div>
            <Navbar />
            <div style={{
                minHeight: '70vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '50px',
                backgroundColor: '#f4f4f4'
            }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>Welcome, Truck Drivers!</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: '#666' }}>
                    Start your journey with us and connect with customers looking for reliable truck rides. 
                    Register now and take advantage of the Sharetruck Bonus by sharing rides.
                </p>
            
                <button  style={{
                    padding: '15px 30px',
                    fontSize: '1.2rem',
                    backgroundColor: '#1abc9c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                    Register Now
                </button>
            </div>
            <Footer />
        </div>
    );
}

export default TruckDriver;
