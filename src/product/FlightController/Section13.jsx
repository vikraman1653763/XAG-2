import React from 'react';

const Section13 = () => {
    const comparisonData = [
        {
            title: "IMU Sensor",
            xrotor: "Industrial-grade",
            competitor: "On-Board sensors",
            description: "Xrotor Tek India offers industrial-grade IMU sensors for enhanced stability and accuracy."
        },
        {
            title: "Signal Flexibility",
            xrotor: "PWM and CAN",
            competitor: "Limited signal support",
            description: "Support for both PWM and CAN signals allows greater flexibility in various applications."
        },
        {
            title: "Flight Log Capacity",
            xrotor: "50 logs",
            competitor: "10 logs",
            description: "Xrotor Tek India's systems can store up to 50 logs, offering more comprehensive data tracking."
        },
        {
            title: "Live Cloud Data",
            xrotor: "Supports live cloud data",
            competitor: "Does not support live cloud data",
            description: "Xagrotor enables real-time monitoring and data access, unlike others lacking this feature."
        }
        
    ];

    return (
        <div className="fc-sec-13-container">
            <h2 className="fc-sec-13-headline">Why Choose Xrotor Tek India?</h2>
            <div className="fc-sec-13-cards">
                {comparisonData.map((item, index) => (
                    <div key={index} className="fc-sec-13-card" >
                        <h3 className="fc-sec-13-card-title">{item.title}</h3>
                        <div className="fc-sec-13-comparison">
                            <div className="fc-sec-13-xrotor">
                                <strong >Xrotor Tek India</strong>
                                <p>{item.xrotor}</p>
                            </div>
                            <div className="fc-sec-13-competitor">
                                <strong >standard</strong>
                                <p >{item.competitor}</p>
                            </div>
                        </div>
                        <p className="fc-sec-13-description">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section13;
