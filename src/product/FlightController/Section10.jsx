import React, { useState, useEffect } from 'react';
import { GoDotFill } from "react-icons/go";

const media = [
    { src: '/assets/transmitterVideo.webm', name: 'Transmitter', type: 'video' },
    { src: '/assets/transmitterVideo.webm', name: 'Transmitter', type: 'video' },
    { src: '/assets/transmitterVideo.webm', name: 'Transmitter', type: 'video' },
    { src: '/assets/transmitterVideo.webm', name: 'Transmitter', type: 'video' },
    { src: '/assets/transmitterVideo.webm', name: 'Transmitter', type: 'video' }
   
];

function Section10() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to handle index change on button click
    const handleButtonClick = (index) => {
        setCurrentIndex(index);
    };

    // Effect for automatic media change every 10 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
        }, 2000); // Change the media every 10 seconds

        return () => clearInterval(intervalId); // Cleanup interval on unmount
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
            </div>
        </section>
    );
}

export default Section10;
