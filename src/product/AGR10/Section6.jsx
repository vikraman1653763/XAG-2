import React from 'react'
import { Link } from 'react-router-dom';

function Section6() {
  return (
    <div className='agr10-sec-6'>
      <section className='agr10-sec-6-content'>

        <h3>Ready to elevate your agricultural operations?</h3>
        <p>Take your agricultural operations to the next level with our innovative solutions</p>
        <div className='agr10-sec-6-btn-container'>
        <Link to="/contact" data-aos="fade-up" data-aos-offset='100' className="agr10-sec-6-btn contact-us-btn">Contact Us</Link>
                       <Link to="#" data-aos="fade-up" data-aos-offset='200' className="agr10-sec-6-btn brochure-btn">Download Brochure</Link>
                       <Link to="/dealer" data-aos="fade-up" data-aos-offset='300' className="agr10-sec-6-btn get-quote-btn">Get a Quote</Link>
        </div>
      </section>
    </div>
  )
}
export default Section6

