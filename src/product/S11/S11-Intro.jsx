import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const getItemVariants = (index) => ({
  hidden: { scale: 0.5, opacity: 0 },  
  show: { 
    scale: 1.2,  
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 80, 
      damping: 10, 
      delay: index * 0.3 
    }
  }
});

const Intro = ({ data }) => {
  return (
    <motion.div 
    className="s11-intro-container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    style={{ backgroundImage: `url(${data.bg})`}}
  >
  
      {/* Title and Subtitle */}
      <motion.div 
        className="s11-intro-content"
        initial={{ x: "-100px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
      >
        <h1 className="s11-intro-title">{data.title}</h1>
        <p className="s11-intro-subtitle">{data.subtitle}</p>
      </motion.div>

      {/* Payload Images */}
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




const IntroMobile = ({ data }) => {
  return (
    <motion.div 
      className="s11-intro-mobile-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <motion.img 
        src={data.bg} 
        alt="Background" 
        className="s11-intro-mobile-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Title and Subtitle */}
      <motion.div 
        className="s11-intro-mobile-content"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
      >
        <h1 className="s11-intro-mobile-title">{data.title}</h1>
        <p className="s11-intro-mobile-subtitle">{data.subtitle}</p>
      </motion.div>

      {/* Payload Images */}
      <motion.div className="s11-intro-mobile-payloads">
        {data.images.map((image, index) => (
          <motion.img 
            key={index}
            src={image}
            alt={`Payload ${index + 1}`}
            className="s11-intro-mobile-payload-image"
            variants={getItemVariants(index)}
            initial="hidden"
            animate="show"
          />
        ))}
      </motion.div>
    </motion.div>
  );
};



const ResponsiveIntro = ({ data }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <IntroMobile data={data} /> : <Intro data={data} />;
};

export default ResponsiveIntro;
