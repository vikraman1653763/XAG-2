import React from "react";

// Define images for different models
const modelImages = {
  survey: {
    first: "/assets/s11-survey-battery.webp",
    second: "/assets/s11-survey-fold.webp",
    third: "/assets/drone.webp"
  },
  rescue: {
    first: "/assets/rescue-battery.webp",
    second: "/assets/rescue-fold.webp"
  },
  inspection: {
    first: "/assets/inspection-battery.webp",
    second: "/assets/inspection-fold.webp"
  }
};

// Default Features (First Two Images Will Change Based on Model)
const defaultFeatures = [
  {
    "feature": "Easy Battery Installation and Replacement",
    "description": "Engineered for quick and hassle-free battery swaps, ensuring minimal downtime and uninterrupted operation. Its lightweight design allows easy handling by a single person, reducing maintenance efforts and maximizing efficiency in field operations.",
    "image": "" // Will be replaced dynamically
  },
  {
    "feature": "Folding Quad Design",
    "description": "The folding quad design functions like an umbrella, allowing quick and effortless folding for easy transportation. Its lightweight structure ensures it can be carried by a single person, making it ideal for field operations where portability is key.",
    "image": "" // Will be replaced dynamically
  },
  {
    "feature": "Obstacle and Terrain Sensor",
    "description": "Equipped with real-time obstacle detection and intelligent terrain adaptation, this system ensures highly accurate and automated flight adjustments, enhancing safety and stability while reducing risks in complex environments.",
    "image": ""
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
  }
];

function Advance({ model }) {  
  // Get images based on model, or use default placeholders if not found
  const selectedImages = modelImages[model] || { first: "/assets/s11-survey-battery.webp", second: "/assets/s11-survey-fold.webp" , third:"/assets/s11-survey-sensor.webp"};

  // Update first two images dynamically
  const features = defaultFeatures.map((item, index) => {
    if (index === 0) return { ...item, image: selectedImages.first };
    if (index === 1) return { ...item, image: selectedImages.second };
    if (index === 2) return { ...item, image: selectedImages.third };
    return item;
  });

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
