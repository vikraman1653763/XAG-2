import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Xag25UseCases = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const useCases = [
    {
      title: 'Battlefield Supply & Resupply',
      description: 'Rapid delivery of ammunition, medical supplies, and food to frontline troops. Automated resupply to reduce human risk.',
    //   video: '/videos/battlefield.mp4',
      image:'/assets/xag30/1.webp'
    },
    {
      title: 'Medical Evacuation & Aid Delivery',
      description: 'Transporting emergency kits, blood, and life-saving drugs to injured soldiers. Quick evacuation of wounded personnel.',
    //   video: '/videos/medical.mp4',
      image:'/assets/xag30/2.webp'

    },
    {
      title: 'Naval & Maritime Operations',
      description: 'Resupplying warships at sea. Supporting search-and-rescue (SAR) missions with real-time delivery.',
    //   video: '/videos/naval.mp4',
      image:'/assets/xag30/3.webp'

    },
    {
      title: 'Disaster Response & Emergency Rescue',
      description: 'Deploying drones for thermal search and rescue. Providing real-time aerial footage during disasters. Transporting food, water, and repair tools.',
    //   video: '/videos/disaster.mp4',
      image:'/assets/xag30/4.webp'

    },
    {
      title: 'Communication Relay Support',
      description: 'Acting as an airborne communication node in disaster and battlefield scenarios.',
      image:'/assets/xag30/3.webp'
    },
    {
      title: 'Infrastructure Damage Assessment',
      description: 'Conducting aerial inspections of critical infrastructure after natural disasters or enemy attacks.',
      image:'/assets/xag30/1.webp'
    },
    {
      title: 'Remote Area Supply Drops',
      description: 'Delivering essential supplies to isolated or inaccessible regions without putting human lives at risk.',
      image:'/assets/xag30/2.webp'
    },
    {
      title: 'Environmental Monitoring and Surveys',
      description: 'Supporting missions that require rapid assessment of environmental conditions, such as flood zones or wildfire areas.',
      image:'/assets/xag30/4.webp'
    }
  ];

  return (
    <section className="xag25-usecases-section">
      <div className="xag25-usecases-container">
        <h2 className="xag25-usecases-title">Applications of XAG 30</h2>
        {useCases.map((item, index) => (
          <div
            className={`xag25-usecase-row ${index % 2 === 0 ? 'even' : 'odd'}`}
            key={index}
          >
            <div className="xag25-usecase-video">
              {item.video ? (
                <video src={item.video} autoPlay muted loop playsInline />
              ) : (
                <img src={item.image} alt={item.title} />
              )}
            </div>
            <div
              className="xag25-usecase-content"
              data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
            >
              <h3 className="xag25-usecase-title">{item.title}</h3>
              <p className="xag25-usecase-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Xag25UseCases;