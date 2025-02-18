import React from "react";

const droneOutputs = [
    {
        image: "/assets/s11-06.webp",
        title: "Reconnaissance Missions",
    },
    {
        image: "/assets/s11-07.webp",
        title: "Border Surveillance",
    },
    {
        image: "/assets/s11-08.webp",
        title: "Thermal Imaging",
    },
    {
        image: "/assets/s11-09.webp",
        title: "Forest Fire Detection",
    },
    {
        image: "/assets/s11-10.webp",
        title: "Search and Rescue Operations",
    },
    {
        image: "/assets/s11-11.webp",
        title: "Infrastructure Inspection",
    }
];


const Section5 = () => {
    return (
        <section className="s11-01-sec-5-container">
            <h2 className="s11-01-sec-5-title">Application of XAG-S11</h2>
            <div className="s11-01-sec-5-cards">
                {droneOutputs.map((output, index) => (
                    <div key={index} className="s11-01-sec-5-card">
                        <img src={output.image} alt={output.title} className="s11-01-sec-5-image" />
                        <h3 className="s11-01-sec-5-card-title">{output.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Section5;
