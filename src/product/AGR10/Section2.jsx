import React ,{useEffect}from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { MdOutlineChangeCircle } from "react-icons/md";
import { TbDeviceHeartMonitorFilled } from "react-icons/tb";
import { RxLapTimer } from "react-icons/rx";
import { TbFenceOff } from "react-icons/tb";
import { GiFeather } from "react-icons/gi";
import { MdOutlineSettingsSuggest } from "react-icons/md";


const features = [
  { 
    icon: <MdOutlineChangeCircle />,
    title: 'Multi-Functional Payloads',
    desc: 'Switch effortlessly between sprayers and spreaders.'
  },
  { 
    icon: <TbDeviceHeartMonitorFilled />,
    title: 'Advanced Safety Mechanisms',
    desc: 'Includes battery monitoring and Return-to-Launch (RTL).'
  },
  { 
    icon: <RxLapTimer />,
    title: 'Quick Deployment',
    desc: 'Ready to operate in under 5 minutes, saving critical operational time'
  },
  { 
    icon: <TbFenceOff />,
    title: 'Geo-Fencing Capability',
    desc: 'Ensures safe and controlled operation within predefined boundaries'
  },
  { 
    icon: <GiFeather />,
    title: 'Compact and Lightweight Design',
    desc: 'Designed for portability and ease of deployment in varied terrains.'
  },
   { 
    icon: <MdOutlineSettingsSuggest />,
    title: 'Customizable Settings',
    desc: 'Tailor settings to specific crop or field needs for optimal performance'
  },
];

function Section2() {


   useEffect(() => {
      AOS.init({ duration: 500, disable: 'mobile',});
  }, []);

  return (
    <div className='agr10-sec-2'>
      {features.map((feature, index) => (
        <div key={index} className='agr10-sec-2-card' data-aos={`${index % 2 ===0?'fade-left':'fade-right'}`}>
            <div className=' agr10-sec-2-wrapper'>
          <div className='agr10-sec-2-content'>
            <h2 className='agr10-sec-2-title'>{feature.title}</h2>
            <p className='agr10-sec-10-desc'>{feature.desc}</p>
          </div>
          <div className='agr10-sec-2-icon'>
            {feature.icon}
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Section2;

