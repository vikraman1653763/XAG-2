import React from "react";

const Section5 = () => {
  const specifications = [
    { title: "Charge voltage", detail: "50.4V" },
    { title: "Discharge voltage", detail: "36V" },
    { title: "36V", detail: "22000mAh" },
    { title: "Operating temperature", detail: "10℃~40℃ & - 10℃~40℃" },
    { title: "weight", detail: "4800 g" },
    { title: "Humidity",detail: "65±20%RH"},
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
