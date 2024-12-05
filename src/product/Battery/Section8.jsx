import React from "react";
import sampImg from'/assets/agr16-15.webp';
const Section8 = () => {
  const features = [
    "Long battery life",
  "long endurance with reliability.",
  "efficient energy management",
  "Suitable for heavy Load",
  "High and stable discharge rate",
  "Additional safety features",
  ];

  return (
    <div className="bat-sec-7-container">
        <div className="bat-sec-7-context-container">

        
        <ul className="bat-sec-7-features">
          {features.map((feature, index) => (
              <li key={index} className="bat-sec-7-feature">
              <span className="bat-sec-7-icon">✔</span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="bat-sec-7-image-container">
            <img src={sampImg}/>
        </div>
    
          </div>
    </div>
  );
};

export default Section8;
