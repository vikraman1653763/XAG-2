import React from 'react';
import { motion } from 'framer-motion';

const MiniSpecs = () => {
  const specifications = [
    { label: 'Weight', value: '249g' },
    { label: 'Camera', value: '4K Ultra HD, 12MP, Gimbal Stabilization' },
    { label: 'Battery Life', value: 'Up to 31 minutes' },
    { label: 'Range', value: '6 km (Transmission Range)' },
    { label: 'Max Speed', value: '57.6 km/h' },
    { label: 'Flight Modes', value: 'GPS, Follow Me, Waypoints, Intelligent Flight Modes' },
  ];

  return (
    <div className="mini-specs-container">
      <motion.h2
        className="mini-specs-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Specifications
      </motion.h2>
      <div className="mini-specs-list">
        {specifications.map((spec, index) => (
          <motion.div
            className="mini-specs-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mini-specs-card-content">
              <span className="mini-specs-label">{spec.label}:</span>
              <span className="mini-specs-value">{spec.value}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MiniSpecs;
