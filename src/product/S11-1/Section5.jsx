import React from "react";

const droneOutputs = [
    {
        image: "/assets/battery001.webp",
        title: "Cartografía de Precisión",
    },
    {
        image: "/assets/battery001.webp",
        title: "Análisis de Cultivos",
    },
    {
        image: "/assets/battery001.webp",
        title: "Imágenes Térmicas",
    }
];


const Section5 = () => {
    return (
        <section className="s11-01-sec-5-container">
            <h2 className="s11-01-sec-5-title">Drone Output</h2>
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
