import React from "react";

const Section3 = () => {
  return (
    <div className="bat-sec3-container">
      <div className="bat-sec3-content">
        <h2 className="bat-sec3-title">X Power Plus</h2>
        <p className="bat-sec3-description">
          The X Power Plus battery is engineered to set new standards in drone performance. With unmatched reliability, extended endurance, and seamless compatibility with AGR16 and AGR10 models, it is the ultimate solution for modern agricultural challenges.
        </p>
            </div>
        <div className="bat-sec3-video-wrapper">
          <video
            className="bat-sec3-video"
            src="your-video-src.mp4"
            controls
            poster="your-video-poster.jpg"
          >
            Your browser does not support the video tag.
          </video>
      </div>
    </div>
  );
};

export default Section3;
