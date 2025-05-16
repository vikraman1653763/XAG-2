import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const galleryItems = [
  { id: 1, image: '/assets/xag30/g1.webp' },
  { id: 2, image: '/assets/xag30/g2.webp' },
  { id: 3, image: '/assets/xag30/g3.webp' },
  { id: 4, image: '/assets/xag30/g4.webp' },
  { id: 5, image: '/assets/xag30/g5.webp' },
  { id: 6, image: '/assets/xag30/g6.webp' },
  { id: 7, image: '/assets/xag30/g7.webp' },
];

const Xag24Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="xag30-gallery-container">
      <div className="xag30-gallery-left">
        {galleryItems.map((item, index) => (
          <img
            key={item.id}
            src={item.image}
            alt={`Thumbnail ${index + 1}`}
            className={`xag30-gallery-thumb ${selectedIndex === index ? 'active' : ''}`}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>
      {/* Gallery Image on Left */}
      <div className="xag30-gallery-right">
            <AnimatePresence mode="wait">
                <motion.img
                key={galleryItems[selectedIndex].id}
                src={galleryItems[selectedIndex].image}
                alt={`Gallery Image ${selectedIndex + 1}`}
                className="xag30-gallery-image"
                initial={{ opacity: 0, scale: 0.9 , x:-400}}
                animate={{ opacity: 1, scale: 1 ,x:0}}
                exit={{ opacity: 0, scale: 0.9 ,x:400}}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
            </AnimatePresence>
            </div>


    </div>
  );
};
export default Xag24Gallery;
