import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



function Types({data}) {
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

      {/* Image Container with Background */}
      <div className="s11-type-image-container">
        <AnimatePresence mode="wait">
          <motion.img
            key={data[activeIndex].image}
            src={data[activeIndex].image}
            alt={data[activeIndex].name}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="s11-type-image"
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Types;
