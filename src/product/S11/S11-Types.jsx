import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Types({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="s11-type-container">
      {/* Buttons */}
      <div className="s11-type-buttons">
        {data.map((type, index) => (
          <button
            key={index}
            className={`s11-type-button ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {type.name}
          </button>
        ))}
      </div>

      {/* Image Container */}
      <div className="s11-type-image-container">
        {/* Background Drone Image */}
        <img
          src="/assets/s11/s11-pay-survey.png"
          alt="Drone Background"
          className="s11-bg-image"
        />

        {/* Animated Payload Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={data[activeIndex].image}
            src={data[activeIndex].image}
            alt={data[activeIndex].name}
            initial={{ y: "7%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "7%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="s11-type-image"
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Types;
