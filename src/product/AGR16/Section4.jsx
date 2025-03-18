import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cardData = [
  { 
    icon: '/assets/camera.svg', 
    title: 'Camera', 
    description: 'The AGR-16 drone features a MIPI-DCAM for high-quality aerial imaging, offering precision in agricultural surveys and data collection.' 
  },
  { 
    icon: '/assets/range.svg', 
    title: 'Range', 
    description: 'With a 1 km operational range, the AGR-16 ensures wide coverage for spraying, monitoring, and other agricultural applications.' 
  },
  { 
    icon: '/assets/flight.svg', 
    title: 'Flight Time', 
    description: 'Capable of flying for 14.2 minutes on a full charge, optimizing productivity during agricultural operations.' 
  },
  { 
    icon: '/assets/payload.svg', 
    title: 'Payload', 
    description: 'Designed to carry up to 15 kg of payload, perfect for transporting fertilizers, pesticides, or seeds.' 
  },
  { 
    icon: '/assets/speed.svg', 
    title: 'Speed', 
    description: 'The drone achieves speeds of up to 6 m/s, ensuring efficient coverage of large fields in minimal time.' 
  },
  { 
    icon: '/assets/weight.svg', 
    title: 'Weight', 
    description: 'With a total weight of 42.8 kg, the AGR-16 combines robustness with portability for agricultural tasks.' 
  },
];

function CardsSection() {

   useEffect(() => {
      AOS.init({ duration: 100, once: false,mirror:false, disable: 'mobile',});
  }, []);
  
  return (
    <section className="agr16-sec-4-cards-section">
      {cardData.map((card, index) => (
        <div className="agr16-sec-4-card" key={index} data-aos="fade-up" data-aos-duration = '300'>
          <div className="agr16-sec-4-icon-container">
            <img src={card.icon} alt={`${card.title} Icon`} />
          </div>
          <div className="agr16-sec-4-card-details">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default CardsSection;
