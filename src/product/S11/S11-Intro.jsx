import React from "react";
import { motion } from "framer-motion";


const getItemVariants = (index) => ({
  hidden: { scale: 0.5, opacity: 0 },  // Start smaller and invisible
  show: { 
    scale: 1.2,  // Scales up while appearing
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 80, 
      damping: 10, 
      delay: index * 0.3 
    }
  }
});

const Intro = ({data}) =>{
  return (
    <motion.div 
      className="s11-intro-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Section Title */}
      <motion.div 
        className="s11-intro-content"
        initial={{ x: "-100px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
      >
        <h1 className="s11-intro-title">{data.title}</h1>
        <p className="s11-intro-subtitle">{data.subtitle}</p>
      </motion.div>

      {/* Bottom-Left Payload Images*/}
      <motion.div className="s11-intro-payloads">
        {data.images.map((image, index) => (
          <motion.img 
            key={index}
            src={image}
            className="s11-intro-payload-image"
            variants={getItemVariants(index)}
            initial="hidden"
            animate="show"
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Intro;
