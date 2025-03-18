import React, { useEffect, useState } from "react";

function Section5() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen size is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define your 7 features
  const features = [
    {
      title: "Precision Spraying",
      description:
        "Optimized for even distribution of fertilizers and pesticides, ensuring healthier crops.",
      image: "/assets/agr16-spry.webp",
      bg: "/assets/agr16-11.webp",
    },
    {
      title: "Smart Monitoring",
      description:
        "Equipped with advanced sensors for real-time field data collection.",
      image: "/assets/agr16-mon.webp",
      bg: "/assets/agr16-12.webp",
    },
    {
      title: "Easy Operation",
      description:
        "User-friendly controls with autonomous and manual flight modes.",
      image: "/assets/agr16-rem.webp",
      bg: "/assets/agr16-13.webp",
    },
    {
      title: "Durable Design",
      description:
        "Built to withstand tough weather conditions with enhanced wind resistance.",
      image: "/assets/agr16-shield.webp",
      bg: "/assets/agr16-14.webp",
    },
    {
      title: "Cost-Effective",
      description: "Reduces labor costs and minimizes resource wastage.",
      image: "/assets/agr16-cost.webp",
      bg: "/assets/agr16-15.webp",
    },
    {
      title: "Geo-Fencing",
      description:
        "Stay compliant with geo-fencing technology for restricted areas.",
      image: "/assets/agr16-fen.webp",
      bg: "/assets/agr16-16.webp",
    },
    {
      title: "Failsafe Mechanisms",
      description:
        "Return-to-Launch (RTL) and low battery emergency landing features for safe operations.",
      image: "/assets/agr16-bat.webp",
      bg: "/assets/agr16-17.webp",
    },
  ];

  return (
    <section className="agr16-sec-5">
      <div className="agr16-sec-5-container">
          <h2 className="title">
            Why AGR-16 <span>?</span>
          </h2>
          <div className="agr16-sec-5-cards">
            {features.map((feature, index) => (
              <div
                className="agr16-sec-5-card"
                key={index}
              >
               
                <h3>{feature.title}</h3>
               <img src={feature.bg} alt={feature.title} />
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}

export default Section5;
