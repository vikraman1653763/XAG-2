import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Xag30CTA = () => {
  return (
    <section className="xag30-cta-section">
      <div className="xag30-cta-container">
        <motion.h2 
          className="xag30-cta-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Deploy the XAG 30?
        </motion.h2>

        <motion.p 
          className="xag30-cta-subtext"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Enhance your logistics, save lives, and dominate the skies.
        </motion.p>

        <motion.div 
          className="xag30-cta-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Link to="/dealer" className="xag30-cta-button primary">Request a Demo</Link>
          <Link to="/contact" className="xag30-cta-button secondary">Talk to Our Experts</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Xag30CTA;
