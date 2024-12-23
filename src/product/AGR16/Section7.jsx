import React, { useEffect, useState } from 'react'
import { FaRegDotCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const agr16Adv = [
    { 
      title: 'High Precision', 
      detail: 'The AGR16 drones are engineered with cutting-edge precision technology, ensuring accurate application of sprays and seeds. This minimizes wastage, enhances productivity, and improves crop yields significantly. With their advanced sensors and GPS integration, they can pinpoint target areas accurately. Farmers can now achieve uniform crop coverage even in challenging terrains.' 
    },
    { 
      title: 'Cost-Effective', 
      detail: 'Achieve maximum efficiency and reduce operational expenses with AGR16 drones. Their advanced features and optimized design result in lower maintenance costs and improved resource utilization, making them a valuable investment. By automating repetitive tasks, they save labor costs and increase output. Their durability ensures a long lifecycle, providing unmatched value over time.' 
    },
    { 
      title: 'Sustainable', 
      detail: 'Promote environmentally responsible farming with the AGR16 drones. Designed to minimize environmental impact, they reduce chemical usage, conserve water, and support sustainable agricultural practices for a greener future. Their energy-efficient batteries lower carbon emissions. These drones contribute to healthier ecosystems by preventing overuse of harmful chemicals.' 
    },
    { 
      title: 'User-Friendly', 
      detail: 'Experience unmatched ease of use with the AGR16 drones. Equipped with an intuitive interface, straightforward controls, and seamless connectivity options, they ensure hassle-free operation even for first-time users. Comprehensive training modules and support systems are also provided. These features empower farmers to integrate technology into their workflows effortlessly.' 
    },
    { 
      title: 'Enhanced Safety', 
      detail: 'Operate with confidence, thanks to the AGR16 drones’ advanced safety features. From geo-fencing to failsafe mechanisms, these systems prioritize the security of operations, preventing mishaps and ensuring reliable performance. Additionally, emergency return-to-home functions ensure drones safely return in case of connectivity issues. Their robust construction minimizes the risks of operational failures.' 
    },
    { 
      title: 'Versatility', 
      detail: 'Adaptable to a variety of agricultural needs, the AGR16 drones excel in diverse applications. Whether it’s spraying, seeding, mapping, or monitoring, their versatility makes them a comprehensive solution for modern farming. Customizable payloads allow for tailored operations. They also integrate easily with farm management systems, offering a complete solution for precision agriculture.' 
    },
];

  
function Section7() {
    const [index,setIndex]=useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex((prevIndex)=>(prevIndex+1)%agr16Adv.length)
        },8000)
        return ()=> clearInterval(interval);
    },[index])
  return (
    <div className='agr16-sec-7' >
        <h2 className="agr16-sec-7-agr16-type">
            <span>Advantages of</span>  AGR16</h2>
        <div className='agr16-sec-7-container'>
            <div className='agr16-sec-7-index-container'>
                {agr16Adv.map((adv,i)=>(
                    <AnimatePresence key={i} mode="wait">

                    <div className={`agr16-sec-7-index ${index===i?'agrActive':''}`} 
                    key={i} 

                     onClick={()=>setIndex(i)}
                
                    >
                       <FaRegDotCircle />
                       <p>{adv.title}</p>
                    </div>
                    </AnimatePresence>

                ))}
            </div>
            <div className='agr16-sec-7-detail-container'>
            <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 100,rotateX: 90 ,scale:.8}}
            animate={{ opacity: 1, y: 0,rotateX: 0,scale:1 }}
            exit={{ opacity: 0, y: -100,rotateX: -50,scale:.8}}
            transition={{ duration: .7 }}
            className="agr16-sec-7-detail"
          >
              {agr16Adv[index].detail}
                </motion.p>
                </AnimatePresence>
                </div>    
        </div>    
    </div>
  )
}

export default Section7
