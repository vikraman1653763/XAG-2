import React from "react";

const Section5 = () => {
  const specifications = [
    { title: "Capacity", detail: "[ Wh]" },
    { title: "Voltage", detail: "[  V]" },
    { title: "Weight", detail: "[ kg]" },
    { title: "Dimensions", detail: "[Dimensions Here]" },
    { title: "Charging Time", detail: "Fast charge in 1 hour" },
    {
      title: "Battery Management System",
      detail: "Overcharge, over-discharge, and short-circuit protection",
    },
  ];

  return (
    <div className="bat-sec-5-container">
      <div className="bat-sec-5-content">
        <h2 className="bat-sec-5-title">Specifications</h2>
        <div className="bat-sec-5-cards">
          {specifications.map((spec, index) => (
            <div key={index} className="bat-sec-5-card">
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
