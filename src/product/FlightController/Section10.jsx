import React, { useState, useEffect } from 'react';
import { GoDotFill } from "react-icons/go";

const media = [
    { src: '/assets/liveCloud.webm', name: 'Live Cloud Data Log',desc:'View and store flight data directly on the cloud', type: 'video' },
    { src: '/assets/realtime.webm', name: 'Real-Time Monitoring',desc:'Track every aspect of your drone’s performance ', type: 'video' },
    { src: '/assets/voicealert.webm', name: 'Voice Broadcast',desc:'Audio alerts for key flight conditions', type: 'video' },
    { src: '/assets/custompara.webm', name: 'Custom Parameter',desc:'APK can be customized to meet specific operational needs, supporting regional languages', type: 'video' },
    { src: '/assets/safetyprotocol.webm', name: 'Safety Protocols',desc:'Integrated alerts and safety procedures to ensure safe operations', type: 'video' }
   
];

function Section10() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to handle index change on button click
    const handleButtonClick = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
        }, 7000); 

        return () => clearInterval(intervalId); 
    }, []);

    const currentMedia = media[currentIndex];

    return (
        <section className='fc-section-10'>
            <div className='fc-video-index'>
                {media.map((item, index) => (
                    <button key={index} onClick={() => handleButtonClick(index)}>
                       <GoDotFill /> &nbsp;<span style={{ opacity: currentIndex === index ? '1' : '0' }}>{item.name}</span>
                    </button>
                ))}
            </div>
            <div className='fc-video-canvas'>
                {currentMedia.type === 'video' ? (
                    <video
                        src={currentMedia.src}
                        autoPlay
                        loop
                        muted
                        alt={currentMedia.name}
                    />
                ) : (
                    <img
                        src={currentMedia.src}
                        alt={currentMedia.name}
                    />
                )}
                <h3>{media[currentIndex].name}</h3>
                <p>{media[currentIndex].desc}</p>
                </div>
        </section>
    );
}

export default Section10;
