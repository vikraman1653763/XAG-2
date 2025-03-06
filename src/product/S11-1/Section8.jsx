import React from "react";
const Section8 = () => {
  // JSON Data for specifications
  const technicalSpecifications = [
    {
      layout: "60-40",
      left: {
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
      right: {
        title: "Power Plant Details",
        specs: [
          { name: "Engine/Motor", detail: "BLDC Motor" },
          { name: "Number of Motors", detail: "4" },
          { name: "Battery Type", detail: "Semi solid Battery" },
          { name: "Propeller Details", detail: "24-inch Diameter" },
          { name: "Propeller Material", detail: "carbon fiber-reinforced polymer (CFRP)" },
          
        ]
      }
    },
    {
      layout: "40-60",
      right: {
        title:"",
        specs: [
         ],
      },
      left: {
       
        title: "RC Details",
        specs: [
          { name: "Radio frequency", detail: "2.4 GHz" },
          { name: "Communication Range", detail: "5km+" },
          { name: "Display", detail: "7-inch high-definition, high-brightness LCD touchscreen" },
          { name: "Dimensions ", detail: "308 x 148 x 72 mm" },
          { name: "Weight ", detail: "1440 g" },
          { name: "Battery Life ", detail: "Up to 10 hours" },
          { name: "Fast Charging ", detail: "30W PD charging" },
          { name: "Waterproof Level ", detail: "IP4X" }
        ]
      }
    },
    {
      layout: "50-50",
      left: {
        title: "Mission Feature",
        specs: [
          {name : "Autonomous " , detail : "Yes"},
          {name : "Semi Autonomous " , detail : "Yes"},
          {name : "Manual Autopilot" , detail : "Yes"},
          {name : "Full Autopilot" , detail : "Yes"},
          { name: "Autonomous Flight Termination System or RTH", detail: "Yes" },
          { name: "Flight Controller with Flight Data Logging Capability", detail: "Yes" }
        ]
      },
      right: {
        title: "Safety Features",
        specs: [
            { name: "Anti-collision System", detail: "Yes" },
            { name: "Flashing Anti-collision Strobe Light", detail: "Yes, can be on/off via App" },
            { name: "Battery Fail Safe", detail: "Yes" },
            { name: "Return to Home (RC Fail)", detail: "Yes" },
            { name: "GCS Fail Safe", detail: "Yes" },
            { name: "Geo-fencing Capability", detail: "Yes" }
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
            {section.left.image && (
              <div className="s11-sec-8-img-container">
                <img src={section.left.image} className="s11-sec-8-image" alt=""/>
              </div>
            )}
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
            {section.right.image && (
              <div className="s11-sec-8-img-container">
                <img src={section.right.image} className="s11-sec-8-image" alt=""/>
              </div>
            )}
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
