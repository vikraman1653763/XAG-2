import React from "react";

const Section10 = () => {
  const useCases = [
    {
      drone: "AGR16",
      description:
        "The X Power Plus battery enhances the performance of the AGR16 drone, enabling long flight times and precise spraying. Its lightweight design improves maneuverability, while advanced BMS ensures safety during operations. Ideal for large-scale agricultural tasks requiring endurance and efficiency.",
      image: "/assets/agr16-11.webp", // Replace with the actual image path
    },
    {
      drone: "AGR10",
      description:
        "Designed to optimize the AGR10 drone's capabilities, the X Power Plus battery supports compact yet powerful operations. It provides sufficient endurance for targeted spraying and seeding tasks, making it perfect for smaller farms and precision agriculture.",
        image: "/assets/agr16-14.webp", // Replace with the actual image path
    },
  ];

  return (
    <div className="bat-sec-10-container">
      <h2 className="bat-sec-10-title">
        X Power Plus for <span>AGR16 </span>and <span>AGR10</span>
      </h2>
      <div className="bat-sec-10-cards">
        {useCases.map((useCase, index) => (
          <div key={index} className="bat-sec-10-card">
            <img
              src={useCase.image}
              alt={`${useCase.drone} drone`}
              className="bat-sec-10-image"
            />
            <p className="bat-sec-10-description">{useCase.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section10;
