import React from "react";
import { FaBatteryFull, FaWeightHanging, FaRuler, FaClock, FaWifi, FaWind, FaTachometerAlt, FaMicrochip, FaCogs, FaMapMarkedAlt } from "react-icons/fa";

const specs = [
    { icon: <FaBatteryFull />, title: "Battery Capacity", data: "16,000mAh" },
    { icon: <FaWeightHanging />, title: "Payload Capacity", data: "10KG" },
    { icon: <FaRuler />, title: "Dimensions", data: "1992 x 1799 x 427 mm" },
    { icon: <FaClock />, title: "Flight Time", data: "30 Minutes" },
    { icon: <FaWifi />, title: "Control Range", data: "5KM" },
    { icon: <FaWind />, title: "Wind Resistance", data: "8 m/s" },
    { icon: <FaTachometerAlt />, title: "Max Speed", data: "6 m/s" },
    { icon: <FaMicrochip />, title: "Processor", data: "Quad-Core ARM Cortex" },
    { icon: <FaCogs />, title: "Operating Modes", data: "Manual & Auto" },
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
