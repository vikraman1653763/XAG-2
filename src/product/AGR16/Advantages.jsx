// Advantages.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Advantages = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true, 
      offset: 100,
    });
  }, []);

  const agr16Data = [
    { title: 'High Precision', detail: 'AGR16 drones offer unparalleled precision in spraying and seeding.' },
    { title: 'Cost-Effective', detail: 'Reduce operational costs with efficient and effective technology.' },
    { title: 'Sustainable', detail: 'Promote sustainable farming practices with minimal environmental impact.' },
    { title: 'User-Friendly', detail: 'Easy to operate with intuitive controls and reliable performance.' },
    { title: 'Enhanced Safety', detail: 'Advanced safety features like geo-fencing and failsafe mechanisms ensure secure operations.' },
    { title: 'Versatility', detail: 'Capable of handling multiple tasks such as spraying, seeding, and mapping with ease.' },
  ];

  return (
    <section className="advantages">
      <h4 className="agr16-type">
        <span>Advantages</span> of AGR16 Drones
      </h4>
      <div className="advantage-points">
        {agr16Data.map((data, index) => (
          <div className="advantage-point" data-aos="zoom-in" key={index}>
            <h5>{data.title}</h5>
            <p>{data.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
