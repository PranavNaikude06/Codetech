import React, { useRef, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const CameraControls = ({ resetTrigger, autoRotate }) => {
  const controlsRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (resetTrigger > 0 && controlsRef.current) {
      // Instantly reset camera position and orbit target
      camera.position.set(0, 0, 5);
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.update();
    }
  }, [resetTrigger, camera]);

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={true}
      enablePan={true}
      enableRotate={true}
      minDistance={2}
      maxDistance={8}
      autoRotate={autoRotate}
      autoRotateSpeed={1.0}
      makeDefault
    />
  );
};

export default CameraControls;
