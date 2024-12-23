import React, { useEffect, useState } from 'react'
import { FaRegDotCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const batAdv = [
    { 
        title: 'Enhanced Safety Features', 
        detail: 'The integrated Battery Management System (BMS) protects against overcharging, over-discharging, and short circuits, ensuring consistent performance, longer lifespan, and safer operations' 
      },
      { 
        title: 'Long Flight Endurance', 
        detail: 'The X Power Plus battery offers extended flight durations, allowing drones to cover larger areas with fewer interruptions. This minimizes downtime, enhances productivity, and ensures efficient completion of time-sensitive tasks.' 
      },
      { 
        title: 'Lightweight Design', 
        detail: 'The lightweight design enhances drone agility and reduces energy consumption, resulting in longer flight times. It improves precision and performance in complex terrains or demanding tasks' 
      },
      { 
        title: 'Fast Charging', 
        detail: 'With advanced technology, the battery charges fully within an hour, reducing delays between flights. This ensures continuous workflows, making it ideal for large-scale operations requiring quick turnarounds' 
      },
      { 
        title: 'Environmentally Friendly', 
        detail: 'Built with eco-friendly materials, the battery reduces environmental impact and supports recycling. It aligns with green farming practices, promoting energy efficiency and sustainability' 
      },
   
];

  
function Section9() {
    const [index,setIndex]=useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex((prevIndex)=>(prevIndex+1)%batAdv.length)
        },8000)
        return ()=> clearInterval(interval);
    },[index])
  return (
    <div className='bat-sec-9' >
        <h2 className="bat-sec-9-agr16-type">
            <span>Advantages of</span> X Power Plus</h2>
        <div className='bat-sec-9-container'>
            <div className='bat-sec-9-index-container'>
                {batAdv.map((adv,i)=>(
                    <AnimatePresence key={i} mode="wait">
                    <div className={`bat-sec-9-index ${index===i?'agrActive':''}`} 
                    key={i} 
                     onClick={()=>setIndex(i)}
                    >
                       <FaRegDotCircle />
                       <p>{adv.title}</p>
                    </div>
                    </AnimatePresence>

                ))}
            </div>
            <div className='bat-sec-9-detail-container'>
            <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 100,rotateX: 90 ,scale:.8}}
            animate={{ opacity: 1, y: 0,rotateX: 0,scale:1 }}
            exit={{ opacity: 0, y: -100,rotateX: -50,scale:.8}}
            transition={{ duration: .7 }}
            className="bat-sec-9-detail"
          >
              {batAdv[index].detail}
                </motion.p>
                </AnimatePresence>
                </div>    
        </div>    
    </div>
  )
}

export default Section9


