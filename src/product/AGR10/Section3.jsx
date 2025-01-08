import React ,{useEffect}from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { PiGearFineBold } from "react-icons/pi";


function Section3() {
  useEffect(() => {
    AOS.init({ duration: 1500,  disable: 'mobile',});
}, []);

  return (
    <div className='agr10-sec-3'>
      <h2 data-aos="fade-up" data-aos-duration="1000" > Revolutionizing Agriculture <br/> One Flight at a Time</h2>
      <aside className='agr10-sec-3-design' data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500" data-aos-easing="ease-in-out">
          < PiGearFineBold className='agr10-sec-3-gear-1'/>
          < PiGearFineBold className='agr10-sec-3-gear-2'/>
          < PiGearFineBold className='agr10-sec-3-gear-3'/>
      </aside>
    </div>
  )
}

export default Section3
