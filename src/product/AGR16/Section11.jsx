import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Section11 = () => {
  const agr16Sections = [
    {
      title: "High-Precision AGR16 Sprayer",
      details:
        "The AGR16 functions as a high-performance sprayer, delivering precise and efficient spray patterns suitable for agricultural applications. Designed for durability and ease of use, it optimizes crop protection and nutrient application.",
      image: "/assets/TANK_SPRAYER.webp",
      imageAlt: "/assets/SPRAYER.webp",
      alt: "AGR16 Sprayer",
      indexName: "Sprayer",
    },
    {
      title: "Versatile AGR16 Spreader",
      details:
        "As a spreader, the AGR16 ensures uniform distribution of seeds, fertilizers, and other granular materials. Its cutting-edge technology enhances productivity while maintaining a consistent application rate.",
      image: "/assets/TANK_SPREADER.webp",
      imageAlt: "/assets/SPREADER.webp",
      alt: "AGR16 Spreader",
      indexName: "Spreader",
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  if (isMobile) {
    return (
      <div className="agr16-sec-11">
        <div className="agr16-sec-11-index">
          {agr16Sections.map((section, index) => (
            <span
              key={index}
              className={`agr16-sec-11-index-item ${selectedIndex === index ? 's-active' : ''}`}
              onClick={() => setSelectedIndex(index)}
            >
              {section.indexName}
            </span>
          ))}
        </div>
        <div className="agr16-sec-11-content-mobile">
          <h2 className="agr16-sec-11-title">{agr16Sections[selectedIndex].title}</h2>
          <p className="agr16-sec-11-details">{agr16Sections[selectedIndex].details}</p>
          <img
            className="agr16-sec-11-image"
            src={agr16Sections[selectedIndex].image}
            alt={agr16Sections[selectedIndex].alt}
          />
        </div>
      </div>
    );
  }

  // Full layout with animations for larger screens
  return (
    <div className="agr16-sec-11">
      <div className="agr16-sec-11-index">
        {agr16Sections.map((section, index) => (
          <span
            key={index}
            className={`agr16-sec-11-index-item ${selectedIndex === index ? 's-active' : ''}`}
            onClick={() => setSelectedIndex(index)}
          >
            {section.indexName}
          </span>
        ))}
      </div>
      <div className="agr16-sec-11-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="agr16-sec-11-context"
          >
            <h2 className="agr16-sec-11-title">{agr16Sections[selectedIndex].title}</h2>
            <p className="agr16-sec-11-details">{agr16Sections[selectedIndex].details}</p>
          </motion.div>

          <motion.div
            key={`image-${selectedIndex}`}
            variants={contentVariants}
            initial="exit"
            animate="animate"
            exit="initial"
            className="agr16-sec-11-image-container"
          >
            <img
              className="agr16-sec-11-image"
              src={agr16Sections[selectedIndex].image}
              alt={agr16Sections[selectedIndex].alt}
            />
            <img
              className="agr16-sec-11-imageAlt"
              src={agr16Sections[selectedIndex].imageAlt}
              alt={agr16Sections[selectedIndex].alt}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Section11;
