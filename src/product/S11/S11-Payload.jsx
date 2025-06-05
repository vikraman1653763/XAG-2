import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Payload = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <div className="s11-payload-container">
      {data.map((item, index) => (
        <div key={index} className="s11-payload-card">
          <FaStar className="s11-payload-icon" />
          <BsBarChartFill className="s11-payload-chart-1" />
          <BsBarChartFill className="s11-payload-chart-2" />
          <div className="s11-payload-header">
            <h3 className="s11-payload-title" data-aos="fade-up">
              {item.title}
            </h3>
            <p className="s11-payload-desc" data-aos="fade-down">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Payload;
