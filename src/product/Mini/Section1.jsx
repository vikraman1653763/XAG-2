import React from 'react';
import { motion } from 'framer-motion';
import './Mini.css'; 

const MiniIntro = () => {
  return (
    <div className="mini-intro-container">
      <div className="mini-intro-content">
        <div className='mini-intro-h1-container'>
        <motion.h1 className="mini-intro-title"
         initial={{ y:'200px' }}
         animate={{ y:'0px' }}
         transition={{ duration: 1 }}
         viewport={{ once: true }}
         > XAG-MINI
         </motion.h1>
        </div>

        <motion.p className="mini-intro-description"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1 }}>
          A compact, high-performance drone designed for both recreational and professional use.
        </motion.p>
      </div>
    </div>
  );
};

export default MiniIntro;
