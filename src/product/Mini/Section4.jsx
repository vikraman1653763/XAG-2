import React from 'react';

const features = [
    {
      title: 'Intelligent Flight Modes',
      description: 'Features like Follow Me, Waypoints, and Point of Interest make it easier to capture professional shots with minimal effort.',
      background: '/assets/Mini.jpg',
    },
    {
      title: 'Compact & Foldable',
      description: 'Its compact, foldable design makes it highly portable for on-the-go use.',
      background: '/assets/Mini.jpg',
    },
    {
      title: 'Quick Charging',
      description: 'Fast recharge capability ensures you spend more time flying and less time waiting.',
      background: '/assets/Mini.jpg',
    },
    {
      title: 'Automatic Return to Home',
      description: 'The drone has a fail-safe feature that automatically returns it to the takeoff point if the signal is lost or the battery is low.',
      background: '/assets/Mini.jpg',
    },
    {
      title: 'Enhanced Stability',
      description: 'With a 3-axis gimbal and GPS/GLONASS positioning, the XAG-MINI provides stable, smooth flight even in challenging weather conditions.',
      background: '/assets/Mini.jpg',
    },
    {
      title: 'User-Friendly Control',
      description: 'Easy-to-use app with intuitive controls and real-time camera preview for seamless operation.',
      background: '/assets/Mini.jpg',
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
