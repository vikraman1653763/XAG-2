import React from "react";

const features = [
  {
    "feature": "Easy Battery Installation and Replacement",
    "description": "Engineered for quick and hassle-free battery swaps, ensuring minimal downtime and uninterrupted operation. Its lightweight design allows easy handling by a single person, reducing maintenance efforts and maximizing efficiency in field operations.",
    "image": "/assets/s11-survey-battery.webp"
  },
  {
    "feature": "Folding Quad Design",
    "description": "The folding quad design functions like an umbrella, allowing quick and effortless folding for easy transportation. Its lightweight structure ensures it can be carried by a single person, making it ideal for field operations where portability is key.",
    "image": "/assets/s11-survey-fold.webp"
  },
  {
    "feature": "Obstacle and Terrain Sensor",
    "description": "Equipped with real-time obstacle detection and intelligent terrain adaptation, this system ensures highly accurate and automated flight adjustments, enhancing safety and stability while reducing risks in complex environments.",
    "image": "/assets/drone.webp"
  },
  {
    "feature": "XAG-RC Transmitter",
    "description": "A high-performance transmitter with long-range connectivity, precision control, and an ergonomic design for an intuitive pilot experience. Engineered for reliability, it ensures seamless and responsive operation in all flight conditions.",
    "image": "/assets/s11-Rc.webp"
  },
  {
    "feature": "X Rotor Tek India",
    "description": "XAG's own FC X Rotor Tek India is precision-engineered for superior flight stability, offering highly responsive and intelligent control for both autonomous and manual operations. Designed for reliability, it ensures accurate navigation and seamless flight performance in diverse conditions.",
    "image": "/assets/s11-fc.webp"
},
];

function Advance() {  
  return (
    <div className="s11-adv-container">
      {features.map((item, index) => (
        <div
          key={index}
          className={`s11-adv-item ${index % 2 === 0 ? "s11-adv-row" : "s11-adv-row-reverse"}`}
        >
          <div className="s11-adv-image">
            <img src={item.image} alt={item.feature} />
          </div>
          <div className="s11-adv-content">
            <h3 className="s11-adv-title">{item.feature}</h3>
            <p className="s11-adv-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Advance;
