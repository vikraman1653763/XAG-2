import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Section8() {

     useEffect(() => {
        AOS.init({ duration: 300 }); 
      }, []);

    return (
        <div className="agr16-sec-8">
            <div className="agr16-sec-8-svg">
                <img src='/assets/agr16.svg'/>
            </div>
            <h2 className="agr16-sec-8-title">Ready to Revolutionize Your Farming?</h2>
            <div className="agr16-sec-8-container">
            <div className='agr16-sec-8-textbox'>
            <p className="agr16-sec-8-description">
                Explore the power of AGR16 drones to elevate your agricultural practices. 
                Whether you're looking to increase efficiency, embrace sustainability, or achieve unmatched precision, 
                we're here to help you get started!
            </p>
            </div>

            <div className="agr16-sec-8-buttons">
                <Link to="/contact" data-aos="fade-up" data-aos-offset='100' className="agr16-sec-8-btn contact-us-btn">Contact Us</Link>
                <Link to="#" data-aos="fade-up" data-aos-offset='200' className="agr16-sec-8-btn brochure-btn">Download Brochure</Link>
                <Link to="/dealer" data-aos="fade-up" data-aos-offset='300' className="agr16-sec-8-btn get-quote-btn">Get a Quote</Link>
            </div>
            </div>
        </div>
    );
}
export default Section8;
