import React from 'react';
import { motion } from 'framer-motion';

const Xag30Intro = () => {
  return (
    <section className="xag30-intro-section">
      <div className="xag30-intro-text-container">
        <motion.h1
          className="xag30-intro-main"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          XAG 30
        </motion.h1>
        <motion.p
          className="xag30-intro-subtitle"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
A tactical heavy-lift drone engineered for uncompromising performance and mission-critical operations in the most demanding conditions.</motion.p>
      </div>
    </section>
  );
}

export default Xag30Intro;
