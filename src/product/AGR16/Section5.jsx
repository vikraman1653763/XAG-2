import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function Section5() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen size is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const features = [
    {
      title: "Precision Spraying",
      description:
        "Optimized for even distribution of fertilizers and pesticides, ensuring healthier crops.",
      image: "/assets/dealer1.webp",
    },
    {
      title: "Smart Monitoring",
      description:
        "Equipped with advanced sensors for real-time field data collection.",
      image: "/assets/dealer2.webp",
    },
    {
      title: "Easy Operation",
      description:
        "User-friendly controls with autonomous and manual flight modes.",
      image: "/assets/dealer3.webp",
    },
    {
      title: "Durable Design",
      description:
        "Built to withstand tough weather conditions with enhanced wind resistance.",
      image: "/assets/dealer4.webp",
    },
    {
      title: "Cost-Effective",
      description: "Reduces labor costs and minimizes resource wastage.",
      image: "/assets/dealer5.webp",
    },
    {
      title: "Geo-Fencing",
      description:
        "Stay compliant with geo-fencing technology for restricted areas.",
      image: "/assets/dealer6.webp",
    },
    {
      title: "Failsafe Mechanisms",
      description:
        "Return-to-Launch (RTL) and low battery emergency landing features for safe operations.",
      image: "/assets/dealer4.webp",
    },
  ];

  const targetRef = useRef(null);

  // Framer Motion's scroll and transform hooks
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-75%"]);

  return (
    <section className="agr16-sec-5">
      {isMobile ? (
        <div className="agr16-sec-5-container">
          <div className="agr16-sec-5-container-sticky">
            <h2 className="title">
              Why AGR-16 <span>?</span>
            </h2>
            {/* Vertical layout for mobile */}
            <div className="agr16-sec-5-scroll-content">
              {features.map((feature, index) => (
                <div
                  className="agr16-sec-5-card"
                  key={index}
                  style={{
                    backgroundImage: `url(${feature.image})`,
                  }}
                >
                  <h2>0{index + 1}</h2>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="agr16-sec-5-container" ref={targetRef}>
          <div className="agr16-sec-5-container-sticky">
            <h2 className="title">
              Why AGR-16 <span>?</span>
            </h2>
            {/* Horizontal scroll layout for larger screens */}
            <motion.div
              className="agr16-sec-5-scroll-content"
              style={{ x }}
            >
              {features.map((feature, index) => (
                <div
                  className="agr16-sec-5-card"
                  key={index}
                  style={{
                    backgroundImage: `url(${feature.image})`,
                  }}
                >
                  <h2>0{index + 1}</h2>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Section5;
