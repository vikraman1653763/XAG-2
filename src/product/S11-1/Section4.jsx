import React from "react";

const useCases = [
    {
        image: "/assets/drone001.webp",
        title: "Agricultural Spraying",
        description: "Cultivar sin preocupaciones con drones de precisión, optimizando el uso de fertilizantes y reduciendo el desperdicio."
    },
    {
        image: "/assets/drone001.webp",
        title: "Aerial Surveillance",
        description: "Vigilancia aérea avanzada para monitoreo en tiempo real, mejorando la seguridad y el control de grandes áreas."
    },
    {
        image: "/assets/drone001.webp",
        title: "Infrastructure Inspection",
        description: "Inspección sin riesgos de infraestructuras críticas, asegurando un mantenimiento eficiente y detección temprana de fallos."
    }
];


const Section4 = () => {
    return (
        <section className="s11-01-sec-4-container">
            <h2 className="s11-01-sec-4-title">Use Cases</h2>
            <div className="s11-01-sec-4-cards">
                {useCases.map((useCase, index) => (
                    <div key={index} className="s11-01-sec-4-card">
                        <img src={useCase.image} alt={useCase.title} className="s11-01-sec-4-image" />
                        <h3 className="s11-01-sec-4-card-title">{useCase.title}</h3>
                        <p className="s11-01-sec-4-card-description">{useCase.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Section4;
