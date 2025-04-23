import React from 'react';

const features = [
  {
    title: 'Anti-Shake Gimbal',
    description: 'Equipped with an advanced anti-shake gimbal to deliver ultra-smooth and stable footage, even during fast movements.',
    background: '/assets/nano/default.webp',
  },
  {
    title: 'Gesture Photo Capture',
    description: 'Easily snap photos with a simple hand gesture—perfect for hands-free selfies and creative shots.',
    background: '/assets/nano/default.webp',
  },
  {
    title: 'Gesture Video Recording',
    description: 'Start recording videos with intuitive gesture controls, making it easier to capture moments on the move.',
    background: '/assets/nano/default.webp',
  },
  {
    title: 'Return to Home',
    description: 'Automatically returns to the takeoff point when the signal is lost or battery runs low, ensuring safety and convenience.',
    background: '/assets/nano/default.webp',
  },
  {
    title: 'Quick Charging',
    description: 'Spend more time flying and less time charging with fast and efficient battery recharging.',
    background: '/assets/nano/default.webp',
  },
  {
    title: 'User-Friendly Control',
    description: 'Control the drone effortlessly via an easy-to-use mobile app with real-time camera feed and intuitive UI.',
    background: '/assets/nano/default.webp',
  },
  {
    title: 'Intelligent Flight Control',
    description: 'Smart flight features like Follow Me and Waypoint Navigation allow automated, professional-grade flight paths.',
    background: '/assets/nano/default.webp',
  },
  {
    title: 'Obstacle Avoidance',
    description: 'Advanced sensors detect and avoid obstacles in real-time, enhancing safety during flight.',
    background: '/assets/nano/default.webp',
  },
];


const MiniFeature = () => {
  return (
    <div className="mini-feature-container">
      <h2 className="mini-feature-title">Stable Flight, Impressive Battery Life</h2>
      <p className="mini-feature-subtitle">
        Using an infrared and monocular vision positioning system, MINI can hover steadily in the air,
        maintaining stability even in wind conditions up to Level 4. It also supports automatic Return to
        Home (RTH) for convenient, worry-free operation.
      </p>

      <div className="mini-feature-grid">
        {features.map((feature, index) => (
          <div
            className={`mini-feature-box box-${index}`}
            key={index}
            style={{ backgroundImage: `url(${feature.background})` }}
          >
            <div className="mini-feature-overlay">
              <h3 className="mini-feature-box-title">{feature.title}</h3>
              <p className="mini-feature-box-desc">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MiniFeature;
