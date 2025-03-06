import React from "react";
import { FaBatteryFull, FaWeightHanging, FaRuler, FaClock, FaWifi, FaWind, FaTachometerAlt, FaMicrochip, FaCogs, FaMapMarkedAlt } from "react-icons/fa";
import { GiThermometerHot ,GiMountains} from "react-icons/gi";
import { IoMdClock,IoLogoGameControllerB ,IoIosSpeedometer } from "react-icons/io";

const specs = [
    { icon: <IoLogoGameControllerB />, title: "Control Range", data: "10KM+" },
    { icon: <IoMdClock />, title: "Flight Time", data: ">75 Minutes" },
    { icon: <IoIosSpeedometer  />, title: "Max Speed", data: "20 m/s" },
    { icon: <GiMountains />, title: "Service Ceiling", data: "5000m+ AMSL" },
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
