import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarDriver from "./NavbarDriver";
import Footer from "../javascript/Footer";
import img from '../Assets/truckk6.jpg';
import DriverPage from './DriverPage';
import OfferRide from '../DriverModule/Offerride';

function D_Home() {
    const [showOfferRide, setShowOfferRide] = useState(false);
    const offerRideRef = useRef(null);

    const scrollToOfferRide = () => {
        setShowOfferRide(true);  
        setTimeout(() => {
            offerRideRef.current.scrollIntoView({ behavior: 'smooth' });  
        }, 100);
    };

    return (
        <div>
            <NavbarDriver onOfferRideClick={scrollToOfferRide} />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '65vh',
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center'
                }}>
                    <h1 style={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        color: 'white',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    }}>Find Drivers the Easy Way.</h1>
                    <p style={{ fontSize: '1.3rem', marginBottom: '40px', color: 'white' }}>
                        Start your journey with us and connect with customers looking for reliable truck rides.
                        Register now and take advantage of the ShareTruck Bonus by sharing rides.
                    </p>

                    <div>
                        <button onClick={scrollToOfferRide} style={{
                            padding: '15px 30px',
                            fontSize: '1.2rem',
                            backgroundColor: '#77a5d6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            margin: '10px',
                            cursor: 'pointer'
                        }}>
                            Truck Drivers Start Here
                        </button>
                        <button style={{
                            padding: '15px 30px',
                            fontSize: '1.2rem',
                            backgroundColor: '#77a5d6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            margin: '10px',
                            cursor: 'pointer'
                        }}>
                            <Link to={'/VechileReg'} style={{ textDecoration: 'none', color: 'white' }}>Vehicle Registration</Link>
                        </button>
                    </div>
                </div>
            </div>

            <DriverPage />

            {showOfferRide && (
                <div ref={offerRideRef}>
                    <OfferRide />
                </div>
            )}

            <Footer />
        </div>
    );
}

export default D_Home;
