import React from "react";

const features = [
  {
    feature: "Easy Battery Installation and Replacement",
    details: [
      "Designed for quick and hassle-free battery swaps.",
      "Ensures minimal downtime and seamless operation.",
      "Reduces maintenance efforts for better efficiency."
    ],
    image: "/assets/drone.webp"
  },
  {
    feature: "Folding Quad Design",
    details: [
      "Compact and portable with foldable arms.",
      "Allows easy transportation and quick setup.",
      "Enhances convenience for field operations."
    ],
    image: "/assets/drone.webp"
  },
  {
    feature: "Obstacle and Terrain Sensor",
    details: [
      "Real-time obstacle detection for safe flights.",
      "Smart terrain adaptation for stable navigation.",
      "Reduces risks in complex environments."
    ],
    image: "/assets/drone.webp"
  },
  {
    feature: "FC X Rotor Tek Flight Controller",
    details: [
      "Precision-engineered for stable flight performance.",
      "Enhanced responsiveness and intelligent control.",
      "Optimized for autonomous and manual operations."
    ],
    image: "/assets/drone.webp"
  },
  {
    feature: "MK32 Transmitter",
    details: [
      "High-performance transmitter with long-range control.",
      "Ergonomic design for an intuitive pilot experience.",
      "Reliable connectivity for uninterrupted operation."
    ],
    image: "/assets/drone.webp"
  }
];

function Advance() {
  return (
    <div className="s11-adv-container">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`s11-adv-item ${index % 2 === 0 ? "s11-adv-row" : "s11-adv-row-reverse"}`}
        >
          <div className="s11-adv-image">
            <img src={feature.image} alt={feature.feature} />
          </div>
          <div className="s11-adv-content">
            <h3 className="s11-adv-title">{feature.feature}</h3>
            <ul className="s11-adv-details">
              {feature.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Advance;
