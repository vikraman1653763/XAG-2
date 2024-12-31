import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section5 = () => {

    useEffect(() => {
      AOS.init({ duration: 1000 }); 
    }, []);

  const specifications = [
    { title: "Charge voltage", detail: "50.4V" },
    {title:"Rated Voltage",detail:"21.6V-53.9V"},
    {title:'Wattage',detail:'432Wh-1509Wh'},
    { title: "weight", detail: "4800 g" },
    { title: "Humidity",detail: "65±20%RH"},
    { title: "Capacity", detail: "16Ah-32000mAh" },
    { title: "Discharge voltage", detail: "36V" },
    { title: "Operating temperature", detail: "10℃~40℃ & - 10℃~40℃" },
  ];
  return (
    <div className="bat-sec-5-container">
      <div className="bat-sec-5-content">
        <h2 className="bat-sec-5-title">Specifications</h2>
        <div className="bat-sec-5-cards">
          {specifications.map((spec, index) => (
            <div key={index} className="bat-sec-5-card" data-aos='fade-up'>
              <h3 className="bat-sec-5-card-title">{spec.title}</h3>
              <p className="bat-sec-5-card-detail">{spec.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;
