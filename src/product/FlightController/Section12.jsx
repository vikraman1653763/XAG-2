import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Section12 = () => {
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
        <div className="fc-sec-12-container">
            <div className="fc-sec-12-content">
                <h1 className="fc-sec-12-headline">Ready to Elevate Your Drone Operations?</h1>
                <p className="fc-sec-12-subtext">
                    Get in touch to learn more about how <span>Xrotor Tek India</span> can boost your drone’s performance.
                </p>
                <div className="fc-sec-12-buttons">
                    <button className="fc-sec-12-button" onClick={handleContactUsClick}>Contact Us</button>
                    <button className="fc-sec-12-button" onClick={handleGetQuoteClick}>Get a Quote</button>
                    <button className="fc-sec-12-button">Download Brochure</button>
                </div>
            </div>
        </div>
    );
};

export default Section12;