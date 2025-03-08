import React from "react";

const Section8 = () => {
  // JSON Data for specifications – now five objects for a 2 (top) / 3 (bottom) layout
  const technicalSpecifications = [
    {
      title: "Model Details",
      specs: [
        { name: "Model Name", detail: "XAG-S11" },
        { name: "Model Type", detail: "Quad Copter" },
        { name: "GPS Type", detail: "Dual RTK Antenna" },
        { name: "Max Payload", detail: "10kg+" },
        { name: "Overall Dimension (mm) (l×b×h)", detail: "1200 × 920 × 600 mm" },
        { name: "Compatible Payload", detail: "Depends on the model" }
      ],
    },
    {
      title: "Power Plant Details",
      specs: [
        { name: "Engine/Motor", detail: "BLDC Motor" },
        { name: "Number of Motors", detail: "4" },
        { name: "Battery Type", detail: "Semi solid Battery" },
        { name: "Propeller Details", detail: "24-inch Diameter" },
        { name: "Propeller Material", detail: "Carbon Fiber-Reinforced Polymer (CFRP)" },
      ],
    },
    {
      title: "RC Details",
      specs: [
        { name: "Radio Frequency", detail: "2.4 GHz" },
        { name: "Communication Range", detail: "5km+" },
        { name: "Display", detail: "7-inch high-definition LCD touchscreen" },
        { name: "Dimensions", detail: "308 x 148 x 72 mm" },
        { name: "Weight", detail: "1440 g" },
        { name: "Battery Life", detail: "Up to 10 hours" },
        { name: "Fast Charging", detail: "30W PD charging" },
        { name: "Waterproof Level", detail: "IP4X" }
      ],
    },
    {
      title: "Mission Feature",
      specs: [
        { name: "Autonomous", detail: "Yes" },
        { name: "Semi Autonomous", detail: "Yes" },
        { name: "Manual Autopilot", detail: "Yes" },
        { name: "Full Autopilot", detail: "Yes" },
        { name: "Autonomous Flight Termination System or RTH", detail: "Yes" },
        { name: "Flight Controller with Data Logging", detail: "Yes" }
      ],
    },
    {
      title: "Safety Features",
      specs: [
        { name: "Anti-collision System", detail: "Yes" },
        { name: "Flashing Anti-collision Strobe Light", detail: "Yes, toggleable via app" },
        { name: "Battery Fail Safe", detail: "Yes" },
        { name: "Return to Home (RC Fail)", detail: "Yes" },
        { name: "GCS Fail Safe", detail: "Yes" },
        { name: "Geo-fencing Capability", detail: "Yes" }
      ],
    },
  ];

  // Split the data into two rows:
  const topRow = technicalSpecifications.slice(0, 2);
  const bottomRow = technicalSpecifications.slice(2);

  return (
    <div className="s11-tech-container">
      <h2 className="s11-tech-title">Technical Specifications</h2>

      <div className="s11-tech-row s11-tech-top-row">
        {topRow.map((section, index) => (
          <div key={index} className="s11-tech-box">
            <h3 className="s11-tech-subtitle">{section.title}</h3>
            <div className="s11-tech-specs">
              {section.specs.map((spec, idx) => (
                <p key={idx}>
                  <strong>{spec.name}:</strong> {spec.detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="s11-tech-row s11-tech-bottom-row">
        {bottomRow.map((section, index) => (
          <div key={index} className="s11-tech-box">
            <h3 className="s11-tech-subtitle">{section.title}</h3>
            <div className="s11-tech-specs">
              {section.specs.map((spec, idx) => (
                <p key={idx}>
                  <strong>{spec.name}:</strong> {spec.detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section8;
