import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
const data = [
  {
    title: 'Crop Spraying',
    desc: 'Efficient and precise distribution of pesticides and herbicides for optimal crop health.',
    image: '/assets/agr16-15.webp',
  },
  {
    title: 'Fertilizer Spreading',
    desc: 'Uniform application of fertilizers to enhance soil fertility and crop yield.',
    image: '/assets/agr16-13.webp',
  },
  {
    title: 'Seed Sowing',
    desc: 'Seamless dispersal of seeds over large fields, saving time and labor.',
    image: '/assets/agr16-11.webp',
  },
  {
    title: 'Precision Monitoring',
    desc: 'Advanced monitoring tools for accurate assessment of crop conditions.',
    image: '/assets/agr16-16.webp',
  },
];
function Section7() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  useEffect(()=>{
    const times= setInterval(() => {
      setActiveIndex((prev)=>(prev+1)%data.length)    
    }, 5000);
    return()=>clearInterval(times)
  },[data.length])
  
  
  return (
    <div className="agr10-sec-7"
    >
      <div className="agr10-sec-7-index-container">
       

    
        {data.map((app, index) => (
          <div
          className={`agr10-sec-7-index ${activeIndex === index ? 'active' : ''}`}
          key={index}
          onClick={() => handleClick(index)}
          >
            <img src={app.image} alt={app.title} className="agr10-sec-7-img" />
          </div>
        ))}
      <AnimatePresence  mode='wait'>
      
          <motion.div
              key={activeIndex}
              className='agr10-sec-7-content'
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
              transition={{duration:0.5,ease:'easeInOut'}}
              >
            <h4>
            {data[activeIndex].title}
            </h4>
            <p>{data[activeIndex].desc}</p>
          </motion.div>
            <div
              className="agr10-sec-7-roulette"
              style={{
                transform: `rotate(${activeIndex * (360 / data.length)}deg)`,
              }}
              >
            </div>

        </AnimatePresence>
      <AnimatePresence  mode='wait'>
      <motion.div className="agr10-sec-7-images"
       key={activeIndex}
       initial={{opacity:0}}
       animate={{opacity:1}}
       exit={{opacity:0}}
       transition={{duration:0.3, ease:'easeInOut'}}
       style={{
         backgroundImage:`linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .7)),url(${data[activeIndex].image})`,
         backgroundSize:'cover',
         backgroundPosition:'center',
        }}/>
        </AnimatePresence>
    </div>
        </div>
  );
}
export default Section7;






