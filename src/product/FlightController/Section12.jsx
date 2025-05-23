import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
useEffect(() => {
    AOS.init({ duration: 500 }); 
  }, []);
    return (
        <div className="fc-sec-12-container">
            <div className="fc-sec-12-content">
                <h1 className="fc-sec-12-headline">Ready to Elevate Your Drone Operations?</h1>
                <p className="fc-sec-12-subtext">
                    Get in touch to learn more about how <span>Xrotor Tek India</span> can boost your drone’s performance.
                </p>
                <div className="fc-sec-12-buttons">
                    <button className="fc-sec-12-button"  data-aos="fade-up" data-aos-offset='100' onClick={handleContactUsClick}>Contact Us</button>
                    <button className="fc-sec-12-button"   data-aos="fade-up" data-aos-offset='200' onClick={handleGetQuoteClick}>Get a Quote</button>
                    <a href="/assets/fc_brochure.pdf" download="XAG-Xrotor tek India.pdf">
                    <button className="fc-sec-12-button"  data-aos="fade-up" data-aos-offset='300'>Download Brochure</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Section12;
