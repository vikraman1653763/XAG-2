import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Section7 = () => {
  const features = [
    "Ensuring optimal performance",
    "Unique BMS supports",
    "Wide working temperature range",
    "Extended usage periods",
    "Safe and reliable operation",
    "Smart charging capabilities",
  ];
  useEffect(() => {
    AOS.init({
        duration: 300,
        mirror: false,
    });
  }, []);

  return (
    <div className="bat-sec-7-container">
        <h2 className="bat-sec-7-title">Key Features</h2>
        <div className="bat-sec-7-context-container">

        
        <div className="bat-sec-7-video-wrapper">
        <video
          className="bat-sec-7-video"
          src="/assets/battery5.webm"
          loop
          autoPlay
          muted
        >
          Your browser does not support the video tag.
        </video>
      </div>
        <ul className="bat-sec-7-features">
          {features.map((feature, index) => (
              <li key={index} className="bat-sec-7-feature" data-aos='fade-up'>
              <span className="bat-sec-7-icon">✔</span>
              {feature}
            </li>
          ))}
        </ul>
    
          </div>
    </div>
  );
};

export default Section7;
