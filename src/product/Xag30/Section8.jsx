import React from 'react';

const features = [
  { description: 'Effortless folding mechanism for rapid deployment', video: '/assets/s11/s11-em-fire.webm' },
  { description: 'High-capacity battery ensures long flight endurance', video: '/assets/features/battery.mp4' },
  { description: 'HD camera for real-time monitoring and data capture', video: '/assets/features/camera.mp4' },
  { description: 'Efficient motors and aerodynamic wings for stable flight', video: '/assets/features/motorwings.mp4' },
  { description: 'Accurate navigation with GPS + GNSS support', video: '/assets/features/gpsgnss.mp4' },
];

const Xag25Feature = () => {
  return (
    <div className="xag25-fea-container">
      {features.map((item, index) => (
        <div key={index} className="xag25-fea-block">
          <div className="xag25-fea-heading">{item.description}</div>
          <video
            src={item.video}
            className="xag25-fea-video"
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

export default Xag25Feature;
