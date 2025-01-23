import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCube, FaCamera, FaClock, FaMapMarkerAlt, FaThermometerHalf, FaBalanceScale } from "react-icons/fa";

function Section6() {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      title: "Durable Carbon Fiber Frame",
      description: "Lightweight yet strong carbon fiber construction ensures durability and high performance even in challenging environments.",
      icon: <FaCube />,
      image: "/assets/agr16-12.webp",
    },
    {
      title: "Advanced Camera System",
      description: "Equipped with a 30x optical zoom and thermal sensor, providing high-precision imaging for surveillance, inspection, and monitoring tasks.",
      icon: <FaCamera />,
      image: "/assets/agr16-13.webp",
    },
    {
      title: "Long Endurance",
      description: "Capable of 75 minutes of flight time with a 1kg payload, allowing extended operations without frequent interruptions.",
      icon: <FaClock />,
      image: "/assets/agr16-15.webp",
    },
    {
      title: "High Operating Range",
      description: "Covers up to 18 km in range, making it ideal for large-area surveillance and inspection.",
      icon: <FaMapMarkerAlt />,
      image: "/assets/agr16-14.webp",
    },
    {
      title: "Wide Temperature Range",
      description: "Performs reliably in extreme conditions, operating between -20°C and 50°C.",
      icon: <FaThermometerHalf />,
      image: "/assets/agr16-16.webp",
    },
    {
      title: "Stable and Smooth Flight Control",
      description: "Features a 3-axis gimbal and customized motors for precise and stable flight, even in challenging wind conditions.",
      icon: <FaBalanceScale />,
      image: "/assets/agr16-12.webp",
    },
  ];

  // Automatically change active card every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [data.length]);

  return (
    <section className='s11-sec-5'>
        <h2 className="s11-sec-5-title">Features of XAG-S11</h2>
      <div className="s11-sec-5-container">
        {/* Navigation Index */}
        <div className="s11-sec-5-index">
          {data.map((item, index) => (
            <div
              key={index}
              className={`s11-sec-5-index-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {item.icon}
              {item.title}
            </div>
          ))}
        </div>

        {/* Active Card with AnimatePresence */}
        <div className="s11-sec-5-card-container">
          <AnimatePresence  mode='wait'>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -500 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="s11-sec-5-card"
            >
              <img
                src={data[activeIndex].image}
                alt={data[activeIndex].title}
                className="s11-sec-5-card-image"
              />
              <div className="s11-sec-5-content">
                <h3 className="s11-sec-5-card-title">{data[activeIndex].title}</h3>
                <p className="s11-sec-5-card-description">{data[activeIndex].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Section6;
