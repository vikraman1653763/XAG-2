import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const data = [
  {
    title: "Hexa Drone Configuration",
    detail:
      "Six powerful motors provide enhanced stability and lifting power for demanding agricultural tasks",
  },
  {
    title: "Robust Performance",
    detail:
      "Designed for precision and reliability, ensuring consistent results even in challenging conditions",
  },
  {
    title: "RTK Technology Integration",
    detail:
      "Real-Time Kinematic technology ensures centimeter-level accuracy for optimal coverage",
  },
  {
    title: "Modern Precision Agriculture",
    detail:
      "Reduces input waste and enables detailed, accurate operations for enhanced productivity",
  },
];
const Section9 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="agr10-sec-9">
      <h2 className="agr10-sec-9-title" data-aos="fade-up" data-aos-duration="500">
        Precision and Stability Redefined
      </h2>
      <div className="agr10-sec-9-container">
        <div className="agr10-sec-9-video" data-aos="fade-right" data-aos-duration="500">
          <video  autoPlay loop muted controls >
            <source src="/sam/2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="agr10-sec-9-content" data-aos="fade-left" data-aos-duration="500">
          {data.map((xy, i) => (
            <div key={i} className="agr10-sec-9-card" data-aos="fade-up" data-aos-duration="500">
              <h4>{xy.title}</h4>
              <p>{xy.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Section9;
