import React, { useEffect } from 'react';
import check from '/assets/check.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Section4 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);
  return (
    <div className="bat-sec-4-container">
      <div className="bat-sec-4-content">
        <h2 className="bat-sec-4-title">Proven Performance: Comprehensive Battery Testing</h2>
        <p className="bat-sec-4-description">
          The X Power Plus battery undergoes rigorous testing to ensure top-notch performance and safety. These tests certify its durability, reliability, and protection features.
        </p>
        <ul className="bat-sec-4-tests">
          <li className="bat-sec-4-test">
          <img src={check}/><strong>Vibration Test:</strong> Ensures durability during flights.
          </li>
          <li className="bat-sec-4-test">
          <img src={check}/><strong>Drop Test:</strong> Verified for resilience in accidental falls.
          </li>
          <li className="bat-sec-4-test">
          <img src={check}/><strong>Over-discharge Protection:</strong> Prevents damage in extreme scenarios.
          </li>
          <li className="bat-sec-4-test">
          <img src={check}/><strong>Overcharge Protection:</strong> Extends lifespan and ensures safety.
          </li>
        </ul>
        <div className="bat-sec3-video-wrapper">
        <video
          data-aos="fade-up"
          className="bat-sec3-video"
          src="/assets/battery2.webm"
          loop
          autoPlay
          muted
        >
          Your browser does not support the video tag.
        </video>
      </div>
      </div>
    </div>
  );
};

export default Section4;
