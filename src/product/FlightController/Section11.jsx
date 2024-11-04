import React from "react";
import { motion } from "framer-motion";


const Cards = ({ index }) => (
  <motion.div
    className="fc-sec-11-card"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
  >
    Card {index + 1}
  </motion.div>
);

const HorizontalScroll = () => {
  return (
    <div className="fc-sec-11-main-container">
      <div className="fc-sec-11-card-container">
        {[...Array(4)].map((_, index) => (
          <Cards key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
