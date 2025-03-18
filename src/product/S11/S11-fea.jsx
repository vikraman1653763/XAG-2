import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Feature() {
  const Data = [
    { name: 'Durable Carbon Fiber Frame', spec: 'Lightweight yet strong carbon fiber construction ensures durability and high performance even in challenging environments.' },
    { name: 'Advanced Camera System', spec: 'Equipped with a 30x optical zoom and thermal sensor, providing high-precision imaging for surveillance, inspection, and monitoring tasks.' },
    { name: 'Long Endurance', spec: 'Capable of 75 minutes of flight time with a 1kg payload, allowing extended operations without frequent interruptions.' },
    { name: 'High Operating Range', spec: 'Covers up to 18 km in range, making it ideal for large-area surveillance and inspection.' },
    { name: 'Wide Temperature Range', spec: 'Performs reliably in extreme conditions, operating between -20°C and 50°C.' },
    { name: 'Stable and Smooth Flight Control', spec: 'Features a 3-axis gimbal and customized motors for precise and stable flight, even in challenging wind conditions.' }
  ];

  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className='s11-sec-6'>
      <aside className='s11-sec-6-detail'>
        <h2>Key Features </h2>
        <p>The XAG-S11 is equipped with advanced features that make it a reliable and efficient solution for various industrial applications!</p>
        <div className='s11-sec-6-container'>
          {Data.map((data, index) => (
            <div key={index} className='s11-sec-6-card' data-aos="fade-up" data-aos-delay='100'>
              <h3>{data.name}</h3>
              <p>{data.spec}</p>
            </div>
          ))}
        </div>
      </aside>
      <aside className='s11-sec-6-img'>
        <img src='/assets/s11img.png' alt="Transmitter" />
      </aside>
    </div>
  );
}

export default Feature;

