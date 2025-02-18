import React from "react";

const useCases = [
    {
        image: "/assets/s11-01.webp",
        title: "GIS Mapping",
        description: "Captures high-resolution aerial imagery for accurate topographical mapping and 3D modeling \n Enables efficient boundary surveys and environmental monitoring for land management."
    },
    {
        image: "/assets/s11-02.webp",
        title: "Surveying",
        description: "Generates precise elevation models and contour maps for land and infrastructure planning \n Simplifies large-scale land surveys by reducing time and cost compared to traditional methods."
    },
    {
        image: "/assets/s11-03.webp",
        title: "Oil & Gas",
        description: "Monitors pipelines and offshore platforms for leaks, corrosion, and structural integrity \n Enhances safety and security by detecting gas leaks and securing oilfields in real time."
    },
    {
        image: "/assets/s11-04.webp",
        title: "Inspection",
        description: "Conducts detailed inspections of infrastructure like bridges, power lines, and wind turbines \n Identifies faults or wear in hard-to-reach areas, reducing downtime and risks."
    },
    {
        image: "/assets/s11-05.webp",
        title: "Military & Defense",
        description: "Supports reconnaissance, surveillance, and target acquisition for defense operations \n Enhances situational awareness with real-time intelligence for strategic decision-making."
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
