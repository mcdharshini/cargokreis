import React from 'react';
import '../Styles/Footer.css';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Top carpool routes</h3><br></br>
                    <ul>
                        <li>Delhi → Chandigarh</li><br></br>
                        <li>Mumbai → Pune</li><br></br>
                        <li>Kanpur → Lucknow</li><br></br>
                        <li>Bengaluru → Chennai</li><br></br>
                        <li>Pune → Mumbai</li><br></br>
                        <li>All carpool routes</li><br></br>
                        <li>All carpool destinations</li><br></br>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>About</h3><br></br>
                    <ul>
                        <li>How It Works</li><br></br>
                        <li>About Us</li><br></br>
                        <li>Help Centre</li><br></br>
                        <li>Press</li><br></br>
                        <li>We're Hiring!</li><br></br>
                    </ul>
                </div>
                <div className="footer-section">
                    <div className="language-selection">
                        Language - English (India)
                    </div><br></br>
                    <div className="social-icons">
                        <FaFacebook /><br></br>
                        <FaTwitter /><br></br>
                        <FaYoutube /><br></br>
                        <FaInstagram /><br></br>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
