import React ,{useEffect}from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Section2() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false ,mirror:false});
}, []);

  return (
    <div className='agr16-sec-2'>
      <h2 data-aos="fade-up"> Empowering Farms with Skyborne Precision</h2>
    </div>
  )
}

export default Section2
