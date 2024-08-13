import React, { useState } from 'react';
import '../Styles/HomePage.css';
import PaidIcon from '@mui/icons-material/Paid';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import img1 from '../Assets/img1.png'
import Footer from './Footer';
import Navbar from './Navbar';
import SearchBox from '../javascript/SearchBox';
import LoginModal from './LoginModel';

const HomePage = () => {
    const [isLoginModalVisible, setLoginModalVisible] = useState(false);

    const handleLoginClick = () => {
        setLoginModalVisible(true);
    };

    const handleCloseModal = () => {
        setLoginModalVisible(false);
    };

    return (
        <div>
            <Navbar onLoginClick={handleLoginClick} />
            <div className="homepage">
                <div className="hero-section">
                    {/* Your hero section content */}
                </div>
                <div style={{ position: 'absolute', top: '56vh', left: '35vh' }}>
                    <SearchBox />
                </div>
                <div className="features">
                    <div className="feature">
                        <PaidIcon sx={{ fontSize: 40, color: '#007bff' }} />
                        <h3>Your pick of truck at low prices</h3>
                        <p>No matter where you’re going, find the perfect truck from our wide range of destinations and routes at low prices.</p>
                    </div>
                    <div className="feature">
                        <BeenhereIcon sx={{ fontSize: 40, color: '#007bff' }} />
                        <h3>Trust who you travel with</h3>
                        <p>We prioritize the safety and trust of our users. Our platform includes features such as user reviews, profiles, and secure communication channels to ensure a positive sharing experience.</p>
                    </div>
                    <div className="feature">
                        <CheckCircleIcon sx={{ fontSize: 40, color: '#007bff' }} />
                        <h3>Scroll, click, tap and go!</h3>
                        <p>Booking a truck has never been easier! Thanks to our simple app powered by great technology, you can book a truck close to you in just minutes.</p>
                    </div>
                </div>
                <img src={img1} alt='a' style={{ height: '435px' }}></img>
                <scamuser/>
                <Footer />
            </div>
            <LoginModal isVisible={isLoginModalVisible} onClose={handleCloseModal} />
        </div>
    );
};

export default HomePage;
