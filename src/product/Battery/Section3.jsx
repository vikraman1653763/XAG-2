import React ,{useEffect}from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Section3 = () => {
  useEffect(() => {
    AOS.init({ duration:500 });
  }, []);
  return (
    <div className="bat-sec3-container">
      <div className="bat-sec3-content">
        <h2 className="bat-sec3-title">X Power Plus</h2>
        <p className="bat-sec3-description">
          The X Power Plus battery is engineered to set new standards in drone performance. With unmatched reliability, extended endurance, and seamless compatibility with AGR16 and AGR10 models, it is the ultimate solution for modern agricultural challenges.
        </p>
        <ul className="bat-sec3-points">
          <li className="bat-sec3-point">
            <strong>Reliability:</strong> Proven under various conditions.
          </li>
          <li className="bat-sec3-point">
            <strong>Endurance:</strong> Extended flight times for agri-drones.
          </li>
          <li className="bat-sec3-point">
            <strong>Compatibility:</strong> Optimized for AGR16 and AGR10 models.
          </li>
        </ul>
      </div>
      <div className="bat-sec3-video-wrapper">
        <video
        data-aos="fade-up"
        data-aos-duration='300'
          className="bat-sec3-video"
          src="/assets/batReveal.webm"
          loop
          autoPlay
          muted
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Section3;
