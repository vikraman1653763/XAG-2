import React ,{useEffect}from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { PiGearFineBold } from "react-icons/pi";

function Section2() {
      useEffect(() => {
        AOS.init({ duration: 1500,  disable: 'mobile',});
    }, []);
    
  return (
    <div className='s11-sec-2'>
          <h2 data-aos="fade-up" data-aos-duration="1000" >Advancing Performance in Industrial Drone Solutions</h2>
         
        </div>
  )
}

export default Section2
