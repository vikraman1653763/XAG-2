import React, { useState } from "react";

const Battery360Viewer = () => {
  const totalFrames = 100; // Total number of images
  const [frame, setFrame] = useState(1);

  const handleDrag = (event) => {
    const movementX = event.movementX;
    let newFrame = frame + (movementX > 0 ? 1 : -1);

    if (newFrame > totalFrames) newFrame = 1;
    if (newFrame < 1) newFrame = totalFrames;

    setFrame(newFrame);
  };

  return (
    <div
      onMouseMove={handleDrag} // Drag to rotate
      onTouchMove={(e) => handleDrag(e.touches[0])}
      style={{
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        backgroundImage: `url(/batImage/${String(frame).padStart(4, "0")}.webp)`,
        cursor: "grab",
      }}
    />
  );
};

export default Battery360Viewer;
