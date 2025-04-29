import React from 'react';
import { motion } from 'framer-motion';

const Xag25Intro = () => {
  return (
    <section className="xag25-intro-section">
      <div className="xag25-intro-text-container">
        <motion.h1
          className="xag25-intro-main"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          XAG 30
        </motion.h1>
        <motion.p
          className="xag25-intro-subtitle"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Tactical Heavy-Lift Drone for Rapid Logistics and Emergency Response
        </motion.p>
      </div>
    </section>
  );
}

export default Xag25Intro;
