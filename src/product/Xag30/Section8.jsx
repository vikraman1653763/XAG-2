import React from 'react';

const features = [
  { description: 'Effortless folding mechanism for rapid deployment', video: '/assets/xag30/xag30-fold.webm' },
  { description: 'High-capacity battery ensures long flight endurance', video: '/assets/xag30/xag30-battery.webm' },
  { description: 'HD camera for real-time monitoring and data capture', video: '/assets/s11/s11-em-fire.webm' },
  { description: 'Efficient motors and aerodynamic wings for stable flight', video: '/assets/xag30/xag30-motor.webm' },
  { description: 'Accurate navigation with GPS + GNSS support', video: '/assets/s11/s11-em-fire.webm' },
  { description: 'Advanced obstacle sensors for collision-free navigation', video: '/assets/xag30/xag30-obstacle.webm' },
  { description: 'Terrain-following sensor for altitude adaptation over uneven ground', video: '/assets/xag30/xag30-terrain.webm' }
];

const Xag30Feature = () => {
  return (
    <div className="xag30-fea-container">
      {features.map((item, index) => (
        <div key={index} className="xag30-fea-block">
          <div className="xag30-fea-heading">{item.description}</div>
          <video
            src={item.video}
            className="xag30-fea-video"
            autoPlay
            loop
            muted
            playsInline
          />

        </div>
      ))}
    </div>
  );
};

export default Xag30Feature;
