import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useNavigate, useLocation } from 'react-router-dom';
import logo from '/assets/logoxx.svg';
const Section11 = () => {

    
    const navigate = useNavigate();
    const location = useLocation();

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
 useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

    return (
        <div className="bat-sec-11-container">
            <div className="bat-sec-11-content">
                <img src={logo} className='bat-sec-11-content-img'/>
                <h1 className="bat-sec-11-headline">Power Your Drone with X Power Plus</h1>
                <p className="bat-sec-11-subtext">
                    Discover how <span>X Power Plus</span> can extend flight time, enhance performance, and provide unmatched reliability for your agri-drones.
                </p>
                <div className="bat-sec-11-buttons">
                    <button className="bat-sec-11-button" onClick={handleContactUsClick} data-aos="fade-up" data-aos-offset='100'>Contact Us</button>
                    <button className="bat-sec-11-button" onClick={handleGetQuoteClick} data-aos="fade-up" data-aos-offset="200">Get a Quote</button>
                    <button className="bat-sec-11-button" data-aos="fade-up" data-aos-offset='300'>Download Brochure</button>
                </div>
            </div>
        </div>
    );
};

export default Section11;
