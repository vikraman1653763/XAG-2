import React ,{useEffect}from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Section2() {
  useEffect(() => {
    AOS.init({ duration: 100, once: false,mirror:false, disable: 'mobile',});
}, []);

  return (
    <div className='agr16-sec-2'>
      <h2 data-aos="fade-up" data-aos-duration = '300'> Empowering Farms with Skyborne Precision</h2>
    </div>
  )
}

export default Section2
