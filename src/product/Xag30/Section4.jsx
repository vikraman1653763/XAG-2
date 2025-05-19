import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Xag30UseCases = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const useCases = [
    {
      title: 'Battlefield Supply & Resupply',
      description: 'Rapid delivery of ammunition, medical supplies, and food to frontline troops. Automated resupply to reduce human risk.',
      video: '/assets/xag30/xag30-war.webm',
    },
    {
      title: 'Medical Evacuation & Aid Delivery',
      description: 'Transporting emergency kits, blood, and life-saving drugs to injured soldiers. Quick evacuation of wounded personnel.',
      video: '/assets/xag30/xag30-war.webm',
    },
    {
      title: 'Naval & Maritime Operations',
      description: 'Resupplying warships at sea. Supporting search-and-rescue (SAR) missions with real-time delivery.',
      video: '/assets/xag30/xag30-naval.webm',
    },
   
    {
      title: 'Remote Area Supply Drops',
      description: 'Delivering essential supplies to isolated or inaccessible regions without putting human lives at risk.',
      video: '/assets/xag30/xag30-mountain.webm',
    },
    {
      title: 'Flood Zone Reconnaissance & Relief',
      description: 'Monitoring flood conditions, delivering food packets and medical essentials to stranded people.',
      video: '/assets/xag30/xag30-flood.webm',
    },
    {
      title: 'Aerial Food Delivery Missions',
      description: 'Using drones to deliver food in emergency, conflict, or inaccessible zones ensuring safe supply chain.',
      video: '/assets/xag30/xag30-war.webm',
    },
    {
      title: 'Island-to-Island Transport',
      description: 'Designed for extended endurance, the XAG 30 enables reliable island-to-island missions over large water bodies. Its durable frame, high-capacity batteries, and intelligent navigation systems ensure secure transport of critical supplies in remote archipelagos.',
      video: '/assets/xag30/xag30-island.webm',
    }

  ];

  return (
    <section className="xag30-usecases-section">
      <div className="xag30-usecases-container">
        <h2 className="xag30-usecases-title">Applications of XAG 30</h2>
        {useCases.map((item, index) => (
          <div
            className={`xag30-usecase-row ${index % 2 === 0 ? 'even' : 'odd'}`}
            key={index}
          >
            <div className="xag30-usecase-video">
              <video src={item.video} autoPlay muted loop playsInline />
            </div>
            <div
              className="xag30-usecase-content"
              data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
            >
              <h3 className="xag30-usecase-title">{item.title}</h3>
              <p className="xag30-usecase-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Xag30UseCases;
