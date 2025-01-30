import React, { useState, useRef, useEffect } from "react";

const Battery360Viewer = ({ width = 500, height = 500, autoPlay = false, autoPlaySpeed = 50 }) => {
  const totalFrames = 100; // Total number of images
  const [frame, setFrame] = useState(1);
  const isDragging = useRef(false);
  const lastPosition = useRef(0);
  const autoPlayRef = useRef(null);

  // 🟢 Handle Mouse Drag Rotation
  const handleMouseDown = (event) => {
    isDragging.current = true;
    lastPosition.current = event.clientX;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (event) => {
    if (!isDragging.current) return;
    const delta = event.clientX - lastPosition.current;
    const sensitivity = 0.001; // Adjust this value for finer control
    if (Math.abs(delta) > sensitivity) {
      let newFrame = frame + (delta > 0 ? 1 : -1);
      if (newFrame > totalFrames) newFrame = 1;
      if (newFrame < 1) newFrame = totalFrames;
      setFrame(newFrame);
      lastPosition.current = event.clientX;
    }
  };
  

  // 🟢 Handle Touch Events for Mobile
  const handleTouchStart = (event) => {
    lastPosition.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    const delta = event.touches[0].clientX - lastPosition.current;
    if (Math.abs(delta) > 5) {
      let newFrame = frame + (delta > 0 ? 1 : -1);
      if (newFrame > totalFrames) newFrame = 1;
      if (newFrame < 1) newFrame = totalFrames;
      setFrame(newFrame);
      lastPosition.current = event.touches[0].clientX;
    }
  };

  // 🟢 Optional: Autoplay Feature
  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(() => {
        setFrame((prevFrame) => (prevFrame < totalFrames ? prevFrame + 1 : 1));
      }, autoPlaySpeed);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [autoPlay]);

  return (
    <div
      style={{
        width: '90vw',
        height: `90vh`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(/fcImage/${String(frame).padStart(4, "0")}.webp)`,
        cursor: isDragging.current ? "grabbing" : "grab",
        userSelect: "none",
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    />
  );
};

export default Battery360Viewer;
