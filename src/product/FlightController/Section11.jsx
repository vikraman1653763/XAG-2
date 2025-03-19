import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Section11() {
  const fcData = [
    { name: 'Size', spec: 'Compact and streamlined, measuring 73mm x 46mm x 18.5mm for FMU and 88mm x 44mm x 15.5mm for PMU.' },
    { name: 'Weight', spec: 'Lightweight construction with 65g for FMU and 80g for PMU, designed for easy maneuverability.' },
    { name: 'Power Supply', spec: 'Flexible power input, compatible with a wide range from 20V to 100V (4S to 20S).' },
    { name: 'Work Temperature', spec: 'Built to withstand extreme temperatures, operating reliably from -25°C to 60°C.' },
    { name: 'GNSS Accuracy', spec: 'Achieves precise positioning with an accuracy of 2.5 meters, ideal for navigation and mapping tasks.' },
    { name: 'Max Altitude', spec: 'Capable of reaching heights up to 2500 meters, perfect for high-altitude operations.' }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      // once: true 
    });
  }, []);

  return (
    <div className='fc-sec-11'>
      <aside className='fc-sec-11-detail'>
        <h2>Specification</h2>
        <p>Designed to deliver unmatched precision and endurance, our Flight Control Module is built to conquer new heights!</p>
        <div className='fc-sec-11-container'>
          {fcData.map((data, index) => (
            <div key={index} className='fc-sec-11-card' data-aos="fade-up" data-aos-delay='100'>
              <h3>{data.name}</h3>
              <p>{data.spec}</p>
            </div>
          ))}
        </div>
      </aside>
      <aside className='fc-sec-11-img'>
        <img src='/assets/fcsample.webp' alt="Transmitter" />
      </aside>
    </div>
  );
}

export default Section11;
