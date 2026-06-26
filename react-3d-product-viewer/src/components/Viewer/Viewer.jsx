import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import SceneLighting from '../SceneLighting/SceneLighting';
import CameraControls from '../CameraControls/CameraControls';
import ProductModel from '../ProductModel/ProductModel';
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay';
import styles from './Viewer.module.css';

const Viewer = ({ selectedProduct, activeColor, resetTrigger, autoRotate }) => {
  return (
    <div className={styles.canvasContainer}>
      <Suspense fallback={<LoadingOverlay />}>
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
          className={styles.canvas}
        >
          {/* Custom Lighting setup */}
          <SceneLighting />

          {/* OrbitControls */}
          <CameraControls resetTrigger={resetTrigger} autoRotate={autoRotate} />

          {/* Renders the model */}
          <ProductModel
            id={selectedProduct.id}
            color={activeColor}
            modelPath={selectedProduct.modelPath}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Viewer;
