import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../javascript/Footer";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import img1 from '../Assets/truck7.jpeg';
import NavbarDriver from './NavbarDriver';

function Home() {
    return (
        <div>
            <NavbarDriver />
            <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', padding: '40px', backgroundColor: '#f0f8ff' }}>
                <div style={{ flex: '1', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h1 style={{ fontSize: '3rem', color: '#2c3e50' }}>Driving Your Truck Soon?</h1>
                    <p style={{ fontSize: '1.5rem', color: '#34495e' }}>Truck drivers, great news: your good habits are being rewarded! Benefit from the Sharetruck Bonus by sharing rides.</p>
                    <button style={{ padding: '10px',width:'200px', fontSize: '1.2rem', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '5px', marginTop: '20px' }}>
                        <Link to={'/offerride'} style={{ textDecoration: 'none', color: 'white', }}>Offer a Ride</Link>
                    </button>
                </div>
                <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
                    <img src={img1} alt="Truck" style={{ width: '100%', borderRadius: '10px' }} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
