import React from "react";
import Marquee from "react-fast-marquee";

const Section6 = () => {
    return (
        <section className="s11-01-sec-6-container">
            <h2 className="s11-01-sec-6-title">Our Valuable Partners</h2>
            <Marquee speed={50} gradient={false} autoFill>
                <img src="/assets/logo.webp" alt="Company Logo" className="s11-01-sec-6-logo" />
                <img src="/assets/logo.webp" alt="Company Logo" className="s11-01-sec-6-logo" />
                <img src="/assets/logo.webp" alt="Company Logo" className="s11-01-sec-6-logo" />
                <img src="/assets/logo.webp" alt="Company Logo" className="s11-01-sec-6-logo" />
                <img src="/assets/logo.webp" alt="Company Logo" className="s11-01-sec-6-logo" />
            </Marquee>
        </section>
    );
};

export default Section6;
