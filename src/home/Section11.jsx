import React from 'react';
import './HomeDefenseDrones.css';

const drones = [
  {
    image: '/assets/defense/def1.webp',
    bgImage: '/assets/defense/defbg1.webp',
    title: 'Logistics Drone',
    description:
      'An advanced autonomous logistics drone engineered to navigate complex environments and deliver mission-critical payloads with pinpoint precision.',
  },
  {
    image: '/assets/defense/def2.webp',
    bgImage: '/assets/defense/defbg2.webp',
    title: 'VTOL Bomber',
    description:
      'A precision-engineered VTOL bomber drone designed to vertical take off from anywhere, strike with deadly accuracy — all without a runway or a pilot.',
  },
  {
    image: '/assets/defense/def3.webp',
    bgImage: '/assets/defense/defbg3.webp',
    title: 'Swarm Drones',
    description:
      'A coordinated swarm of autonomous drones designed to overwhelm defenses, adapt in real time, and deliver synchronized strikes with relentless precision.',
  },
  {
    image: '/assets/defense/def4.webp',
    bgImage: '/assets/defense/defbg4.webp',
    title: 'FPV Drone',
    description:
      'A compact, high-speed FPV bomber drone engineered for precision strikes, delivering lethal payloads with surgical accuracy deep behind enemy lines.',
  },
  {
    image: '/assets/defense/def5.webp',
    bgImage: '/assets/defense/defbg5.webp',
    title: 'Surveillance Drone',
    description:
      'An autonomous surveillance drone engineered for real-time intelligence gathering, delivering high-resolution data and persistent situational awareness across any environment.',
  },
];

const HomeDefense = () => {
  return (
    <div className="home-defense-wrapper">
      <div className="home-defense-header">
        <h2>Full-Spectrum execution of mission<br />and supply of components</h2>
        <p>WE ARE READY TO SUPPORT ANY FORM OF MISSION</p>
      </div>

      <div className="home-defense-zigzag">
        {drones.map((drone, index) => (
          <div
            className={`home-defense-zigzag-row ${index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
            style={{
              backgroundImage: `${
                index % 2 !== 0
                  ? `linear-gradient(to right, black, rgba(0, 0, 0, 0)), url(${drone.bgImage})`
                  : `linear-gradient(to left, black, rgba(0, 0, 0, 0)), url(${drone.bgImage})`
              }`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="home-defense-zigzag-image">
              <img src={drone.image} alt={drone.title} />
            </div>
            <div className="home-defense-zigzag-content">
              <h3>{drone.title}</h3>
              <p>{drone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDefense;
