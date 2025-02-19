import React from "react";

const Section8 = () => {
  // JSON Data for specifications
  const technicalSpecifications = [
    {
      layout: "60-40",
      left: {
        title: "RPA Details",
        specs: [
          { name: "RPA Category", detail: "Small Category" },
          { name: "RPA Type", detail: "Quad Copter, VTOL" },
          { name: "Antenna Type", detail: "Dual RTK Antenna" },
          { name: "Max All Up Weight Including Payload", detail: "10 kg approx." },
          { name: "Overall Dimension (mm) (l×b×h)", detail: "1200 × 920 × 600 mm" },
          { name: "Compatible Payload", detail: "EO/IR Sensors, any Sony Camera integration, tailored for advanced surveillance, surveying, and LiDAR applications." }
        ]
      },
      right: {
        title: "C2 Link & Payload",
        specs: [
          { name: "Equipment Detail", detail: "2.4 GHz" },
          { name: "Communication Range", detail: "5km, can be extendable up to 10km" },
          { name: "Payload Type", detail: "Customizable Payload" },
          { name: "Default Payload", detail: "Sony 24.1 MP" }
        ]
      }
    },
    {
      layout: "40-60",
      right: {
        title: "Performance Details",
        specs: [
          { name: "Max Endurance", detail: "75 minutes" },
          { name: "Max Range", detail: "10 km" },
          { name: "Max Speed", detail: "12 m/s" },
          { name: "Cruise Speed", detail: "7 m/s" },
          { name: "Service Ceiling", detail: "4500 m AMSL" },
          { name: "Operating Temperature", detail: "-20°C to 50°C" },
          { name: "Operating Altitude", detail: "120m AGL default / can be unlocked up to 1000m" },
          { name: "Rapid Readiness", detail: "Deployed in Under 2 Minutes" },
          { name: "Gust Wind Tolerance", detail: "Up to 12 m/s" },
          { name: "24/7 Mission Capable", detail: "Optimized for Day and Night Operations" }
        ]
      },
  
      left: {
        title: "Power Plant Details",
        specs: [
          { name: "Engine/Motor", detail: "BLDC Motor" },
          { name: "Number of Motors", detail: "4" },
          { name: "Battery Capacity", detail: "30,000 mAh" },
          { name: "Propeller Details", detail: "24-inch Diameter" }
        ]
      }
    }
  ];

  return (
    <div className="s11-sec-8-container">
      <h2 className="s11-sec-8-title">Technical Specifications</h2>
      
      {technicalSpecifications.map((section, index) => (
        <div key={index} className={`s11-sec-8-content s11-sec-8-${section.layout}`}>
          {/* Left Section */}
          <div className={`s11-sec-8-left s11-sec-8-left-${section.layout}`}>
            <h3 className="s11-sec-8-subtitle">{section.left.title}</h3>
            <div className="s11-sec-8-para">

            {section.left.specs.map((spec, idx) => (
                <p key={idx}>
                <strong>{spec.name} :</strong> {spec.detail}
              </p>
            ))}
            </div>
          </div>

          {/* Right Section */}
          <div className={`s11-sec-8-right s11-sec-8-right-${section.layout}`}>
            <h3 className="s11-sec-8-subtitle">{section.right.title}</h3>
            <div className="s11-sec-8-para">
            {section.right.specs.map((spec, idx) => (
                <p key={idx}>
                <strong>{spec.name} :</strong> {spec.detail}
              </p>
            ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section8;
