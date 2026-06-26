import React from 'react';
import { Environment } from '@react-three/drei';

const SceneLighting = () => {
  return (
    <>
      {/* Soft ambient lighting for fill */}
      <ambientLight intensity={0.4} />

      {/* Strong key directional light casting crisp shadows */}
      <directionalLight
        position={[8, 12, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />

      {/* Subtle back light for highlighting silhouette contours */}
      <directionalLight position={[-8, 5, -5]} intensity={0.5} />

      {/* Drei Studio HDRI Environment for realistic metallic/glass reflections */}
      <Environment preset="studio" />
    </>
  );
};

export default SceneLighting;
