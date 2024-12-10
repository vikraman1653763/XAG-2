import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Section6 = () => {
  const agr16Sections = [
    {
      title: "Lithium-Ion Batteries",
      details:
        "Cost-effective with balanced performance, offering extended flight durations for moderate operational demands like mapping and light spraying",
      image: "/assets/battery002.webp",
      alt: "AGR16 Spreader",
      indexName: "Li-ion",
    },
    {
      title: "Molicel-Based Batteries",
      details:
        "Deliver high power density with excellent durability and safety, ideal for heavy-duty agricultural drones requiring maximum thrust and performance",
      image: "/assets/battery001.webp",
      alt: "AGR16 Sprayer",
      indexName: "Molicel",
    },
    {
      title: "Lithium Polymer Batteries",
      details:
        "Lightweight and customizable, designed for high-demand tasks like heavy spraying, ensuring superior performance under high discharge rates",
      image: "/assets/battery003.webp",
      alt: "AGR16 Spreader",
      indexName: "Li-Po",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
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
    // Simplified layout for mobile
    return (
      <div className="bat-sec-6">
        <div className="bat-sec-6-index">
          {agr16Sections.map((section, index) => (
            <span
              key={index}
              className={`bat-sec-6-index-item ${selectedIndex === index ? 's-active' : ''}`}
              onClick={() => setSelectedIndex(index)}
            >
              {section.indexName}
            </span>
          ))}
        </div>
        <div className="bat-sec-6-content-mobile">
          <h2 className="bat-sec-6-title">{agr16Sections[selectedIndex].title}</h2>
          <p className="bat-sec-6-details">{agr16Sections[selectedIndex].details}</p>
          <img
            className="bat-sec-6-image"
            src={agr16Sections[selectedIndex].image}
            alt={agr16Sections[selectedIndex].alt}
          />
        </div>
      </div>
    );
  }

  // Full layout with animations for larger screens
  return (
    <div className="bat-sec-6">
      <div className="bat-sec-6-index">
        {agr16Sections.map((section, index) => (
          <span
            key={index}
            className={`bat-sec-6-index-item ${selectedIndex === index ? 's-active' : ''}`}
            onClick={() => setSelectedIndex(index)}
          >
            {section.indexName}
          </span>
        ))}
      </div>
      <div className="bat-sec-6-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bat-sec-6-context"
          >
            <h2 className="bat-sec-6-title">{agr16Sections[selectedIndex].title}</h2>
            <p className="bat-sec-6-details">{agr16Sections[selectedIndex].details}</p>
          </motion.div>

          <motion.div
            key={`image-${selectedIndex}`}
            variants={contentVariants}
            initial="exit"
            animate="animate"
            exit="initial"
            className="bat-sec-6-image-container"
          >
            <img
              className="bat-sec-6-image"
              src={agr16Sections[selectedIndex].image}
              alt={agr16Sections[selectedIndex].alt}
            />

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Section6;

