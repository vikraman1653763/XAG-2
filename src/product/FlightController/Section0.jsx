import React, { useState,useEffect, useRef } from 'react';
import shade from "/assets/shade.webp";

const Section0 = () => {
    const [showScroll, setShowScroll] = useState(true);

    const canvasRef = useRef(null);
    const imgRef = useRef(new Image());
    const frameCount = 100;
    const images = useRef([]);
    const currentFrame = index => (
        `/fcImage/${index.toString().padStart(4, '0')}.webp`
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const html = document.documentElement;

        const preloadImages = () => {
            for (let i = 1; i <= frameCount; i++) {
                const img = new Image();
                img.src = currentFrame(i);
                images.current[i] = img;
            }
        };

        const drawImage = (img) => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, 0, 0);
        };

        imgRef.current.onload = () => {
            drawImage(imgRef.current);
        };

        window.addEventListener('scroll', () => {
            const scrollTop = html.scrollTop;
            const maxScrollTop = html.scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / maxScrollTop;
            const frameIndex = Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount*5));
            if (scrollTop > 0) setShowScroll(false);
            requestAnimationFrame(() => {
                if (images.current[frameIndex + 1]) {
                    drawImage(images.current[frameIndex + 1]);
                }
            });
        });

        preloadImages();

        // Set canvas dimensions
        canvas.width = 2560;
        canvas.height = 1200;

        // Draw the first image
        imgRef.current.src = currentFrame(1);

        return () => {
            window.removeEventListener('scroll', () => {});
        };
    }, []);
    
    
    return (
        <section id="sec-1">
<div className={`fc-scroll-downs ${!showScroll ? 'hide' : ''}`}>     
     <div className="fc-mousey">
        <div className="fc-scroller"></div>
      </div>  
    </div>
            <canvas ref={canvasRef} id="img-seq"></canvas>
            <div id="outer-layer-2">
                <img src={shade}alt="shade"className="scroll-shade"/>
            </div>
            <div id="outer-layer">
                <div id="inner-layer">
                    <div id="buttons">
                        <button>Learn more &nbsp; <i className="fa-solid fa-arrow-trend-up fa-lg"></i></button>
                        <button>Watch video &nbsp; <i className="fa-regular fa-circle-play fa-lg"></i></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section0;
