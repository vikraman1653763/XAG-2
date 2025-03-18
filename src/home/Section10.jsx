import React from "react";
import Marquee from "react-fast-marquee";

const Section10 = () => {
    return (
        <section className="client-container">
            <h2 className="client-title">Our Valuable Clients</h2>
            <Marquee speed={50} gradient={false} autoFill>
            <img src="/assets/Client1.webp" alt="Company Logo" className="client-logo" />
            <img src="/assets/Client2.webp" alt="Company Logo" className="client-logo" />
            <img src="/assets/Client3.webp" alt="Company Logo" className="client-logo" />
            <img src="/assets/Client4.webp" alt="Company Logo" className="client-logo" />
            <img src="/assets/Client5.webp" alt="Company Logo" className="client-logo" />
            <img src="/assets/Client6.webp" alt="Company Logo" className="client-logo" />
            <img src="/assets/Client7.webp" alt="Company Logo" className="client-logo" />

            </Marquee>
        </section>
    );
};

export default Section10;
