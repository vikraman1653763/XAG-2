import React from "react";
import { FaBatteryFull, FaWeightHanging, FaRuler, FaClock, FaWifi, FaWind, FaTachometerAlt, FaMicrochip, FaCogs, FaMapMarkedAlt } from "react-icons/fa";
import {  LiaSortAmountUpSolid} from "react-icons/lia";
import { GiThermometerHot } from "react-icons/gi";

const specs = [
    { icon: <FaWifi />, title: "Control Range", data: "10KM" },
    { icon: <FaClock />, title: "Flight Time", data: "75 Minutes" },
    { icon: <FaTachometerAlt />, title: "Max Speed", data: "12 m/s" },
    { icon: <LiaSortAmountUpSolid />, title: "Service Ceiling", data: "4500m AMSL" },
    { icon: <GiThermometerHot />, title: "Operating Temperature", data: "-20°C to 50°C" },
    { icon: <FaWind />, title: "Wind Resistance", data: "12 m/s" },

   
];

const Section2 = () => {
    return (
        <section className="s11-01-sec-2-container">
            <div className="s11-01-sec-2-cards">
                {specs.map((spec, index) => (
                    <div key={index} className="s11-01-sec-2-card">
                        <div className="s11-01-sec-2-icon">{spec.icon}</div>
                        <h3 className="s11-01-sec-2-card-title">{spec.title}</h3>
                        <p className="s11-01-sec-2-card-data">{spec.data}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Section2;
