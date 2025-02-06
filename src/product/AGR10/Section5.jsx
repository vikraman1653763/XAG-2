import React ,{useEffect}from 'react'
import { GiSpeedometer } from "react-icons/gi";
import { PiWindBold } from "react-icons/pi";
import { TbArrowAutofitHeight } from "react-icons/tb";
import { FaPeopleCarry } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { GiStrong } from "react-icons/gi";
import { AiOutlineSafety } from "react-icons/ai";
import { BiSolidPlaneTakeOff } from "react-icons/bi";
import { IoLogoGameControllerA } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { TbDimensions } from "react-icons/tb";
import AOS from 'aos';
import 'aos/dist/aos.css';

const data =[
    {
        "Feature": "Max Speed",
        "Icon": <GiSpeedometer/>,
        "Specification": "6 m/s"
    },
    {
        "Feature": "Wind Resistance",
        "Icon": <PiWindBold/>,
        "Specification": "8 m/s"
    },
    {
        "Feature": "Operating Altitude",
        "Icon": <TbArrowAutofitHeight/>,
        "Specification": "30 meters"
    },
    {
        "Feature": "Payload Options",
        "Icon": <FaPeopleCarry/>,
        "Specification": "Sprayer (10L), Spreader (10kg)"
    },
    {
        "Feature": "Range",
        "Icon": <GiPathDistance/>,
        "Specification": "1000 meters"
    },
    {
        "Feature": "Endurance",
        "Icon": <GiStrong/>,
        "Specification": "10 minutes"
    },
    {
        "Feature": "Failsafe Features",
        "Icon": <AiOutlineSafety/>,
        "Specification": "Battery Low Voltage, RTL"
    },
    {
        "Feature": "Deployment Time",
        "Icon": <BiSolidPlaneTakeOff/>,
        "Specification": "< 5 minutes"
    },
    {
        "Feature": "GCS Device",
        "Icon": <IoLogoGameControllerA/>,
        "Specification": "T12 + Mobile Support"
    },
    {
        "Feature": "Software",
        "Icon": <FaCode/>,
        "Specification": "AGS"
    },
    {
        "Feature": "Dimensions",
        "Icon": <TbDimensions/>,
        "Specification": "1992 x 1799 x 427 mm"
    }
]

function Section5() {
    useEffect(() => {
        AOS.init({ duration: 500 });
      }, []);

  return (
    <div className='agr10-sec-5'>
      <aside className='agr10-sec-5-aside'> 
        <h2 className='agr10-sec-5-aside-title'>Specification</h2>
      </aside>
      <div className='agr10-sec-5-cards'>
        {data.map((drone,index)=>(
            <div key={index} className='agr10-sec-5-card' data-aos='fade-up-left'>
                <div className='agr10-sec-5-image'>{drone.Icon}</div>
                <div className='agr10-sec-5-content'>

                <h4>{drone.Feature}</h4>
                <p>{drone.Specification}</p>
                </div>
                </div>
        ))}
      </div>
    </div>
  )
}
export default Section5
