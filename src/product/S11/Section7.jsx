import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
const Section7 = () => {
  const cards = [
    {
      id: 1,
      videoTitle: " Night Vision Capabilities in Action",
      description:
        "Experience unmatched clarity with the XAG-S11's advanced night vision capabilities. Equipped with a 30x optical zoom camera and thermal sensor, this drone captures high-precision visuals even in complete darkness. Perfect for surveillance, search and rescue, and nighttime operations, the XAG-S11 ensures no detail is missed, regardless of the lighting conditions.",
    },
    {
      id: 2,
      videoTitle: " Powerful 30x Optical Zoom in Action",
      description:
        "Discover the XAG-S11's impressive zoom capabilities, featuring a 30x optical zoom camera for crystal-clear close-ups from great distances. Perfect for detailed inspections, surveillance, and monitoring, the XAG-S11 ensures you capture every detail with precision and clarity, even in challenging conditions. See the difference high-performance zoom can make.",
    },
    {
      id: 3,
      videoTitle: " Advanced Thermal Imaging for Critical Insights",
      description:
        "The XAG-S11 is equipped with a cutting-edge thermal sensor, designed to detect heat signatures with precision. Whether it's identifying temperature anomalies in infrastructure, tracking wildlife, or assisting in search-and-rescue missions, the thermal imaging capability ensures reliable performance in challenging environments like darkness, fog, or smoke. This feature makes the XAG-S11 an indispensable tool for tasks requiring unparalleled thermal accuracy.",
    },
    {
      id: 4,
      videoTitle: " Built to Withstand Extreme Environments",
      description:
        "Engineered for versatility, the XAG-S11 operates seamlessly in temperatures ranging from -20°C to 50°C, ensuring reliable performance in both freezing cold and scorching heat. Its durable construction and advanced components make it ideal for missions in harsh weather conditions, rugged terrains, and demanding industrial environments, guaranteeing consistent results when it matters most.",
    },
  ];
 useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
    });
  }, [])
  return (
    <section className="s11-sec-7-container">
      {cards.map((card) => (
        <div key={card.id} className="s11-sec-7-card">
          <div className="s11-sec-7-video">
            <div className="s11-sec-7-video-placeholder">
            <video className="s11-sec-7-video-placeholder" autoPlay loop muted>
              <source src="/sam/11.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </div>
          </div>
          <div className="s11-sec-7-content" data-aos={card.id%2===0?'fade-left':'fade-right'}>
            <h2 className="s11-sec-7-title">{card.videoTitle}</h2>
            <p className="s11-sec-7-description">{card.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Section7;

