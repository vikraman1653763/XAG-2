import React from "react";

const Section3 = () => {
    return (
        <section className="s11-01-sec-3-container">
            <video autoPlay loop muted className="s11-01-sec-3-video">
                <source src="/assets/video.webm" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="s11-01-sec-3-overlay">
                <h1 className="s11-01-sec-3-title">Revolutionizing Aerial Technology</h1>
                <p className="s11-01-sec-3-description">
                    Experience next-gen drone solutions with high efficiency, precision, and advanced automation.
                </p>
            </div>
        </section>
    );
};

export default Section3;
