import React from 'react';
import Marquee from 'react-fast-marquee';

const miniFuncData = [
  { title: "Obstacle Avoidance", image: "/assets/nano/nano1.svg" },
  { title: "Image Transmission", image: "/assets/nano/nano2.svg" },
  { title: "Real-Time Video", image: "/assets/nano/nano3.svg" },
  { title: "RTK Positioning", image: "/assets/nano/nano4.svg" },
  { title: "Terrain Follow", image: "/assets/nano/nano5.svg" },
  { title: "Precision Spraying", image: "/assets/nano/nano6.svg" },
  { title: "Mapping", image: "/assets/nano/nano7.svg" },
  { title: "Obstacle Bypass", image: "/assets/nano/nano8.svg" },
  { title: "Waypoint Control", image: "/assets/nano/nano9.svg" },
  { title: "Cruise Control", image: "/assets/nano/nano10.svg" },
  { title: "Spray Mode", image: "/assets/nano/nano11.svg" },
  { title: "Return to Home", image: "/assets/nano/nano12.svg" },
  { title: "Mission Planning", image: "/assets/nano/nano13.svg" },
  { title: "Fail-Safe System", image: "/assets/nano/nano14.svg" },
  { title: "Battery Monitoring", image: "/assets/nano/nano15.svg" },
];

const MiniFunc = () => {
  const rows = [
    miniFuncData.slice(0, 8),
    miniFuncData.slice(7, 15),
  ];

  const directions = ['left', 'right', 'left']; 

  return (
    <div className="mini-func-container">
      <h2 className="mini-func-title">Functional Modules</h2>

      {rows.map((row, rowIndex) => (
        <Marquee
          key={rowIndex}
          direction={directions[rowIndex]}
          speed={40}
          gradient={true}
          pauseOnHover={true}
          gradientColor="black"
          className="mini-func-marquee"
          gradientWidth={100}
        >
          {row.map((item, index) => (
            <div className="mini-func-card" key={index}>
              <img src={item.image} alt={item.title} className="mini-func-image" />
              <p className="mini-func-label">{item.title}</p>
            </div>
          ))}
        </Marquee>
      ))}
    </div>
  );
};

export default MiniFunc;
