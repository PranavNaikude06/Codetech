import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import SceneLighting from '../SceneLighting/SceneLighting';
import CameraControls from '../CameraControls/CameraControls';
import ProductModel from '../ProductModel/ProductModel';
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay';
import styles from './Viewer.module.css';

const Viewer = ({ selectedProduct, activeColor, resetTrigger, autoRotate }) => {
  const [webGlSupported, setWebGlSupported] = useState(true);

  useEffect(() => {
    // Check initial WebGL support
    try {
      const canvas = document.createElement('canvas');
      const hasWebGL = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      if (!hasWebGL) {
        setWebGlSupported(false);
      }
    } catch {
      setWebGlSupported(false);
    }
  }, []);

  if (!webGlSupported) {
    return (
      <div className={styles.canvasContainer}>
        <div className={styles.fallbackContainer}>
          <div className={styles.fallbackVisual}>
            <span className={styles.fallbackIcon} style={{ textShadow: `0 0 45px ${activeColor}` }}>
              {selectedProduct.id === 'cyber-helmet' && '🪖'}
              {selectedProduct.id === 'torus-knot' && '➰'}
              {selectedProduct.id === 'core-sphere' && '🔮'}
            </span>
            <div className={styles.pulseRing} style={{ borderColor: activeColor }} />
          </div>
          <div className={styles.fallbackContent}>
            <h3 className={styles.fallbackTitle}>3D Preview Offline</h3>
            <p className={styles.fallbackText}>
              WebGL context is lost or unsupported in this sandbox preview environment.
            </p>
            <div
              className={styles.badge}
              style={{
                backgroundColor: `${activeColor}20`,
                color: activeColor,
                border: `1px solid ${activeColor}40`,
              }}
            >
              Custom Color: {activeColor}
            </div>
            <p className={styles.fallbackHint}>
              Please run `npm run dev` locally and open it in your desktop browser to interact with the 3D model!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.canvasContainer}>
      <Suspense fallback={<LoadingOverlay />}>
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
          className={styles.canvas}
          onCreated={({ gl }) => {
            const canvasEl = gl.domElement;
            const handleContextLost = (e) => {
              e.preventDefault();
              setWebGlSupported(false);
            };
            canvasEl.addEventListener('webglcontextlost', handleContextLost);

            // Verify if WebGL context is already lost during creation
            if (gl.getContext() && gl.getContext().isContextLost()) {
              setWebGlSupported(false);
            }
          }}
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

