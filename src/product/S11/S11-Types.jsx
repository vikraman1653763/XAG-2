import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Types({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="s11-type-container">
      <div className="s11-type-buttons">
        {data.items.map((type, index) => (
          <button
            key={index}
            className={`s11-type-button ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {type.name}
          </button>
        ))}
      </div>
      <div className="s11-type-image-container">
        <img src={data.bg} alt="Drone Background" className="s11-bg-image" />

        <AnimatePresence mode="wait">
          <motion.img
            key={data.items[activeIndex].image}
            src={data.items[activeIndex].image}
            alt={data.items[activeIndex].name}
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
