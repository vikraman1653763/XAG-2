import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Section8 = () => {
  const features = [
    "Long battery life",
  "long endurance with reliability.",
  "efficient energy management",
  "Suitable for heavy Load",
  "High and stable discharge rate",
  "Additional safety features",
  ];
  useEffect(() => {
    AOS.init({
        duration: 300,
        mirror: false,
    });
  }, []);
  return (
    <div className="bat-sec-7-container">
        <div className="bat-sec-7-context-container bat-sec-8-context-container">

        
        <ul className="bat-sec-7-features">
          {features.map((feature, index) => (
              <li key={index} className="bat-sec-7-feature" data-aos='fade-up'>
              <span className="bat-sec-7-icon">✔</span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="bat-sec-7-video-wrapper">
        <video
          className="bat-sec-7-video"
          src="/assets/battery3.webm"
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

export default Section8;
