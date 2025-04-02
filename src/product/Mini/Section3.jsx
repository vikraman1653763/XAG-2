import React from 'react';
import { motion } from 'framer-motion';

const MiniFeatures = () => {
  const features = [
    {
      title: 'Camera System',
      description: 'Equipped with a 4K Ultra HD camera and 3-axis gimbal for stabilized, high-quality aerial shots.',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4', // Sample video URL
    },
    {
      title: 'Brushless Motors',
      description: 'These provide better efficiency, quieter operation, and smoother flight.',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
      title: 'Gimbal',
      description: 'The 3-axis gimbal ensures the camera remains stable, even in challenging conditions, producing smooth footage.',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
      title: 'Intelligent Flight Battery',
      description: 'Longer flight times and quick recharges, supporting efficient performance during longer missions.',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
      title: 'Remote Controller',
      description: 'The advanced controller offers precise flight controls with a built-in display for real-time feedback.',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
      title: 'Foldable Design',
      description: 'Compact and easy to transport, the XAG-MINI is perfect for users on the go.',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
  ];

  return (
    <div className="mini-features-container">
      <motion.h2
        className="mini-features-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Component Features
      </motion.h2>
      <div className="mini-features-list">
        {features.map((feature, index) => (
          <motion.div
            className="mini-feature-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mini-feature-data">
              <h3 className="mini-feature-title">{feature.title}</h3>
              <p className="mini-feature-description">{feature.description}</p>
            </div>
            <div className="mini-feature-video">
              <video width="100%" height="auto" controls>
                <source src={feature.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MiniFeatures;
