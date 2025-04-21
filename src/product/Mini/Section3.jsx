import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MiniApp = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const features = [
    {
      index: 0,
      title: 'Aerial Photography',
      description:
        'Capture stunning aerial photos and videos with the 4K camera for professional photography and videography.',
      video: '/assets/s11/s11-lidar.webm',
    },
    {
      index: 1,
      title: 'Agricultural Surveys',
      description:
        'Use the drone for agricultural scouting and land surveys, collecting valuable data in hard-to-reach areas.',
      video: '/assets/s11/s11-survey-2d.webm',
    },
    {
      index: 2,
      title: 'Wedding Photography',
      description:
      'Capture breathtaking aerial shots of weddings and events, offering a cinematic perspective that enhances the memory of special moments.',
      video: '/assets/s11/s11-survillence-fire.mp4',
    },
    {
      index: 3,
      title: 'Search & Rescue',
      description:
        'In challenging terrains, the drone can be used for scouting and surveying, providing real-time footage to assist rescue teams.',
      video: '/assets/s11/s11-survillence-high.webm',
    },
    {
      index: 4,
      title: 'Mapping and Surveying',
      description:
        'For urban planning or environmental monitoring, the drone is perfect for collecting accurate aerial data for mapping and modeling purposes.',
      video: '/assets/s11/s11-survey-2d.webm',
    },
  
  ];
  

  return (
    <div className="mini-apps-container">
      <h2 className="mini-apps-title">Applications</h2>
      <div className="mini-apps-grid">
        {/* Left Side – Index Titles */}
        <div className="mini-apps-list">
          {features.map((feature, index) => (
            <div
              className={`mini-app-index-item ${activeIndex === index ? 'active' : ''}`}
              key={index}
              onClick={() => setActiveIndex(index)}
            >
              <h3 className="mini-app-title">{feature.title}</h3>
              {activeIndex === index && (
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.p
                      className="mini-app-description"
                      key="desc"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Right Side – Animated Video Display */}
        <div className="mini-app-video-display">
          <AnimatePresence mode="wait">
            <motion.video
              key={features[activeIndex].video}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              width="100%"
              height="auto"
              autoPlay
              loop
              muted
            >
              <source src={features[activeIndex].video} type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MiniApp;
