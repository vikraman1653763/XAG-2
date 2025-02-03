// src/components/ModelViewer.jsx
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Loader from './Loader.jsx';
import { MdOutline3dRotation } from 'react-icons/md'; // Import the icon
import '../style/model.css';

const MODEL_URL = '/assets/model/11.glb';

const Model = () => {
  const { scene } = useGLTF(MODEL_URL);
  return <primitive object={scene} />;
};

const ModelViewer = () => {
  // Optional: Hide the hint after a few seconds
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 6000); // Hide after 4 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='container-3d'>
      {showHint && (
        <div className="interaction-hint">
          <MdOutline3dRotation size={24} style={{ marginRight: '8px' }} />
          Grab and drag to rotate
        </div>
      )}
      <Suspense fallback={<Loader />}>
        <Canvas className='canvas-3d' camera={{ position: [60, 20, 125], fov: 100 }}>
          <ambientLight intensity={2} />
          <directionalLight position={[5, 5, 5]} />
          <Model />
          <OrbitControls
            autoRotate          
            autoRotateSpeed={3} 
            enablePan
            enableZoom
            enableRotate
            minDistance={50}
            maxDistance={200}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default ModelViewer;
