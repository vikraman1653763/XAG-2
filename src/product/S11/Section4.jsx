import React,{useEffect} from 'react';
import { GiClockwork } from "react-icons/gi";
import { GiFeather } from "react-icons/gi";
import { LiaTemperatureLowSolid } from "react-icons/lia";
import { GiPathDistance } from "react-icons/gi";
import { GiSpeedometer } from "react-icons/gi";
import { GiMountains } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";
function Section4() {
  useEffect(() => {
    AOS.init({ duration: 600 }); 
}, []);
    const data = [
        {
          title: "Operating Temperature",
          detail: "The drone operates reliably in a temperature range of -20°C to 50°C.",
          icon: <LiaTemperatureLowSolid />,
        },
        {
          title: "Weight",
          detail: "The drone has a lightweight design with a total weight of 870 grams.",
          icon: <GiFeather />,
        },
        {
          title: "Endurance",
          detail: "The drone is capable of flying continuously for up to 75 minutes.",
          icon: <GiClockwork />,
        },
        {
          title: "Range",
          detail: "The drone can travel a maximum distance of 18 kilometers in a single trip.",
          icon: <GiPathDistance />,
        },
        {
          title: "Maximum Speed",
          detail: "It can achieve a top speed of 10 meters per second.",
          icon: <GiSpeedometer />,
        },
        {
          title: "Maximum Altitude",
          detail: "The drone can fly at a maximum altitude of 3000 meters above sea level.",
          icon: <GiMountains />,
        },
      ];
      

  const Cards = (startIndex, endIndex) => {
    return data.slice(startIndex, endIndex).map((item, index) => (
      <div className="s11-sec-4-card" key={index} data-aos="fade-up">
        <div className='s11-sec-4-card-data'>
        <h3 className="s11-sec-4-card-title">{item.title}</h3>
        <p className="s11-sec-4-card-detail">{item.detail}</p>
        </div>
        <div className="s11-sec-4-card-icon">{item.icon}</div>

      </div>
    ));
  };

  return (
    <section className='s11-sec-4'>
      <div className="s11-sec-4-div-1">
        <div className="s11-sec-4-div-11">{Cards(0, 1)}</div>
        <div className="s11-sec-4-div-12">{Cards(1, 3)}</div>
      </div>
      <div className="s11-sec-4-div-2">
        <div className="s11-sec-4-div-21">{Cards(3, 5)}</div>
        <div className="s11-sec-4-div-22">{Cards(5, 6)}</div>
      </div>
    </section>
  );
}

export default Section4;
