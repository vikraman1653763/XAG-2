import React, { useState, useEffect } from 'react';

const images = [
    { src: '/assets/transmitter.webp', name: 'Transmitter' },
    { src: '/assets/about1.webp', name: 'Image 2' }, // Replace with your actual image paths and names
    { src: '/assets/banner.webp', name: 'Image 3' },
    { src: '/assets/blog1.webp', name: 'Image 4' },
    { src: '/assets/product1.webp', name: 'Image 5' }
];

function Section10() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to handle index change on button click
    const handleButtonClick = (index) => {
        setCurrentIndex(index);
    };

    // Effect for automatic image change every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change the image every 3 seconds

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, []);

    return (
        <section className='fc-section-10'>
            <div className='fc-video-index'>
                {images.map((image, index) => (
                    <button key={index} onClick={() => handleButtonClick(index)}>
                        &bull;<span style={{opacity:currentIndex===index ?'1':'0'}}>{image.name} </span>
                    </button>
                ))}
            </div>
            <div className='fc-video-canvas'>
                <img src={images[currentIndex].src} alt={images[currentIndex].name} />
            </div>
        </section>
    );
}

export default Section10;
