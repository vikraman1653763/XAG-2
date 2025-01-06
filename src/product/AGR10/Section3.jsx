import React ,{useEffect}from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { SiCircle } from "react-icons/si";
import { PiGearFineBold } from "react-icons/pi";


function Section3() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false ,mirror:false, disable: 'mobile',});
}, []);

  return (
    <div className='agr10-sec-3'>
      <h2 data-aos="fade-up"> Revolutionizing Agriculture <br/> One Flight at a Time</h2>
      <aside className='agr10-sec-3-design'>
          < PiGearFineBold className='agr10-sec-3-gear-1'/>
          < PiGearFineBold className='agr10-sec-3-gear-2'/>
          < PiGearFineBold className='agr10-sec-3-gear-3'/>
      </aside>
    </div>
  )
}

export default Section3
