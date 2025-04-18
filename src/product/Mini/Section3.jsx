import React from 'react';
import { motion } from 'framer-motion';

const MiniApp = () => {
  const features  = [
    {
      title: 'Aerial Photography',
      description:
        'Capture stunning aerial photos and videos with the 4K camera for professional photography and videography.',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
      title: 'Agricultural Surveys',
      description:
        'Use the drone for agricultural scouting and land surveys, collecting valuable data in hard-to-reach areas.',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
      title: 'Real Estate',
      description:
        'Showcase properties from a unique aerial perspective, providing potential buyers with clear and attractive views.',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
      title: 'Search & Rescue',
      description:
        'In challenging terrains, the drone can be used for scouting and surveying, providing real-time footage to assist rescue teams.',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
      title: 'Mapping and Surveying',
      description:
        'For urban planning or environmental monitoring, the drone is perfect for collecting accurate aerial data for mapping and modeling purposes.',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
  ];

  return (
    <div className="mini-apps-container">
      <motion.h2
        className="mini-apps-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Component Features
      </motion.h2>
      <div className="mini-apps-list">
        {features.map((feature, index) => (
          <motion.div
            className="mini-app-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mini-app-data">
              <h3 className="mini-app-title">{feature.title}</h3>
              <p className="mini-app-description">{feature.description}</p>
            </div>
            <div className="mini-app-video">
              <video width="100%" height="auto"  autoPlay loop muted >
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

export default MiniApp;
