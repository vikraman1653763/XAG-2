import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const modelImages = {
  survey: {
    first: "/assets/s11/s11-survey-bat.webp",
    second: "/assets/s11/s11-survey-fold.webp",
    third: "/assets/s11/s11-survey-sen.webp",
    fourth: "/assets/s11/s11-survey-90deg.webp",
  },
  surveillance: {
    first: "/assets/s11/s11-survillence-bat.webp",
    second: "/assets/s11/s11-survillence-fold.webp",
    third: "/assets/s11/s11-survillence-sen.webp",
    fourth: "/assets/s11/s11-survillence-90deg.webp",
  },
  inspection: {
    first: "/assets/s11/s11-inspect-bat.webp",
    second: "/assets/s11/s11-inspect-fold.webp",
    third: "/assets/s11/s11-inspect-sen.webp",
    fourth: "/assets/s11/s11-inspect-90deg.webp",
  },
  rescue: {
    first: "/assets/s11/s11-em-bat.webp",
    second: "/assets/s11/s11-em-fold.webp",
    third: "/assets/s11/s11-em-sen.webp",
    fourth: "/assets/s11/s11-em-90deg.webp",
  },
};

const defaultFeatures = [
  {
    feature: "Easy Battery Installation and Replacement",
    description:
      "Engineered for quick and hassle-free battery swaps, ensuring minimal downtime and uninterrupted operation. Its lightweight design allows easy handling by a single person, reducing maintenance efforts and maximizing efficiency in field operations.",
    image: "", // Will be replaced dynamically
  },
  {
    feature: "Folding Quad Design",
    description:
      "The folding quad design functions like an umbrella, allowing quick and effortless folding for easy transportation. Its lightweight structure ensures it can be carried by a single person, making it ideal for field operations where portability is key.",
    image: "", // Will be replaced dynamically
  },
  {
    feature: "Obstacle and Terrain Sensor",
    description:
      "Equipped with real-time obstacle detection and intelligent terrain adaptation, this system ensures highly accurate and automated flight adjustments, enhancing safety and stability while reducing risks in complex environments.",
    image: "", // Will be replaced dynamically
  },
  {
    feature: "Retractable Landing Gear 90°",
    description:
      "Designed for seamless deployment and retraction, the 90-degree retractable landing gear enhances aerodynamics and stability during flight. It provides increased clearance for payloads and ensures safe landings in diverse terrains.",
    image: "", // Will be replaced dynamically
  },
  {
    feature: "XAG-RC Transmitter",
    description:
      "A high-performance transmitter with long-range connectivity, precision control, and an ergonomic design for an intuitive pilot experience. Engineered for reliability, it ensures seamless and responsive operation in all flight conditions.",
    image: "/assets/s11/s11-rc.webp",
  },
  {
    feature: "The Cube Orange+",
    description:
      "The Cube Orange+ from CubePilot is engineered for exceptional flight stability, providing precise and intelligent control for both autonomous and manual operations. Built for reliability, it ensures accurate navigation and seamless performance in a variety of conditions.",
    image: "/assets/s11/s11-fc.webp",
  },
  {
    feature: "redundant design of HerePro ",
    description:
      "Integrated into the S11 for enhanced visibility and operational awareness, HerePro’s 50 ProfiLEDs provide real-time status indication and customizable lighting effects for improved night operations and situational awareness.",
    image: "/assets/s11/s11-here.webp",
  },
  {
    feature: "Silicon Landing Gear Shock Pad",
    description:
      "Integrated with high-durability silicon shock pads, the landing gear effectively absorbs impact forces, reducing stress on the frame and ensuring smooth landings even on rough terrain.",
    image: "/assets/s11/s11-pad.webp",
  },
];

function Advance({ model }) {
  const selectedImages = modelImages[model] || {
    first: "/assets/s11-survey-battery.webp",
    second: "/assets/s11-survey-fold.webp",
    third: "/assets/s11-survey-sensor.webp",
    fourth: "/assets/s11/s11-survey-90deg.webp",
  };

  const features = defaultFeatures.map((item, index) => {
    if (index === 0) return { ...item, image: selectedImages.first };
    if (index === 1) return { ...item, image: selectedImages.second };
    if (index === 2) return { ...item, image: selectedImages.third };
    if (index === 3) return { ...item, image: selectedImages.fourth };
    return item;
  });

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <div className="s11-adv-container">
      {features.map((item, index) => (
        <div
          key={index}
          className={`s11-adv-item ${
            index % 2 === 0 ? "s11-adv-row" : "s11-adv-row-reverse"
          }`}
        >
          <div className="s11-adv-image">
            <img src={item.image} alt={item.feature} />
          </div>
          <div className="s11-adv-content">
            <h3
              className="s11-adv-title"
              data-aos="fade-up"
              data-aos-offset="100"
            >
              {item.feature}{" "}
            </h3>
            <p className="s11-adv-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Advance;
