import React from "react";
import sampImg from'/assets/agr16-15.webp';
const Section7 = () => {
  const features = [
    "Ensuring optimal performance",
    "Unique BMS supports",
    "Wide working temperature range",
    "Extended usage periods",
    "Safe and reliable operation",
    "Smart charging capabilities",
  ];

  return (
    <div className="bat-sec-7-container">
        <h2 className="bat-sec-7-title">Key Features</h2>
        <div className="bat-sec-7-context-container">

        
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
        <ul className="bat-sec-7-features">
          {features.map((feature, index) => (
              <li key={index} className="bat-sec-7-feature">
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
