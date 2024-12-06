import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '/assets/logoxx.svg';
const Section11 = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Scroll to the specified section after navigation
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const handleContactUsClick = () => {
        navigate('/contact#enquirycontact');
    };

    const handleGetQuoteClick = () => {
        navigate('/dealer#dealercontact');
    };

    return (
        <div className="bat-sec-11-container">
            <div className="bat-sec-11-content">
                <img src={logo} className='bat-sec-11-content-img'/>
                <h1 className="bat-sec-11-headline">Power Your Drone with X Power Plus</h1>
                <p className="bat-sec-11-subtext">
                    Discover how <span>X Power Plus</span> can extend flight time, enhance performance, and provide unmatched reliability for your agri-drones.
                </p>
                <div className="bat-sec-11-buttons">
                    <button className="bat-sec-11-button" onClick={handleContactUsClick}>Contact Us</button>
                    <button className="bat-sec-11-button" onClick={handleGetQuoteClick}>Get a Quote</button>
                    <button className="bat-sec-11-button">Download Brochure</button>
                </div>
            </div>
        </div>
    );
};

export default Section11;
