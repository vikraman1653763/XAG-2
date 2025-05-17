// React Component (Section9.jsx)
import React from 'react';

const features = [
  { description: 'Effortless folding mechanism for rapid deployment', video: '/assets/xag30/xag30-fold.webm' },
  { description: 'High-capacity battery ensures long flight endurance', video: '/assets/xag30/xag30-battery.webm' },
  { description: 'HD camera for real-time monitoring and data capture', video: '/assets/s11/s11-em-fire.webm' },
  { description: 'Efficient motors and aerodynamic wings for stable flight', video: '/assets/xag30/xag30-motor.webm' },
  { description: 'Accurate navigation with GPS + GNSS support', video: '/assets/s11/s11-em-fire.webm' },
  { description: 'Advanced obstacle sensors for collision-free navigation', video: '/assets/xag30/xag30-obstacle.webm' },
  { description: 'Terrain-following sensor for altitude adaptation over uneven ground', video: '/assets/xag30/xag30-terrain.webm' },
];

function Section9() {
  return (
    <div className='xag30-scroll-sec'>
      <section className='xag30-scroll-card-container'>
        {features.map((feature, index) => (
          <div 
            className='xag30-scroll-card'
            key={index}
            style={{
              '--card-z-index': index, 
              '--card-stack-index': features.length - index,
              width: `${50 + (index * 0.5)}vw`
            }}
          >
            <p>{feature.description}</p>
            <div className='xag30-scroll-card-details'>
              <video className='xag30-scroll-video' src={feature.video} autoPlay muted loop playsInline></video>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Section9;