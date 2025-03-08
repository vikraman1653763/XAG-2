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

const Spec = () => {
    return (
        <section className="s11-spec-container">
            <div className="s11-spec-cards">
                {specs.map((spec, index) => (
                    <div key={index} className="s11-spec-card">
                        <div className="s11-spec-icon">{spec.icon}</div>
                        <h3 className="s11-spec-card-title">{spec.title}</h3>
                        <p className="s11-spec-card-data">{spec.data}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Spec;

