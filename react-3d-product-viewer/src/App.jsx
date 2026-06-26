import React, { useState } from 'react';
import styles from './App.module.css';

// Components
import Viewer from './components/Viewer/Viewer';
import ProductSelector from './components/ProductSelector/ProductSelector';
import ProductInfo from './components/ProductInfo/ProductInfo';
import LoadingOverlay from './components/LoadingOverlay/LoadingOverlay';
import ControlsHint from './components/ControlsHint/ControlsHint';

// Data
import { PRODUCTS } from './data/products';

function App() {
  const [selectedProductId, setSelectedProductId] = useState(PRODUCTS[0].id);
  const [activeColor, setActiveColor] = useState(PRODUCTS[0].colorVariants[0]);
  const [resetTrigger, setResetTrigger] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedProductId);

  // Trigger loading screen briefly when product changes for sleek transitions
  const handleProductSelect = (productId) => {
    if (productId === selectedProductId) return;

    setIsLoading(true);
    const targetProduct = PRODUCTS.find((p) => p.id === productId);
    setSelectedProductId(productId);
    setActiveColor(targetProduct.colorVariants[0]);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const handleResetCamera = () => {
    setResetTrigger((prev) => prev + 1);
  };

  const handleToggleAutoRotate = () => {
    setAutoRotate((prev) => !prev);
  };

  return (
    <div className={styles.app}>
      <main className={styles.container}>
        {/* Left Side: 3D Canvas Viewport */}
        <section className={styles.viewportSection} aria-label="3D Viewport">
          {isLoading && <LoadingOverlay />}
          <Viewer
            selectedProduct={selectedProduct}
            activeColor={activeColor}
            resetTrigger={resetTrigger}
            autoRotate={autoRotate}
          />
          <ControlsHint />
        </section>

        {/* Right Side: Configuration Sidebar */}
        <section className={styles.sidebarSection} aria-label="Product Configuration">
          <header className={styles.header}>
            <div className={styles.logoContainer}>
              <span className={styles.logoIcon}>🛰️</span>
              <h1 className={styles.title}>3D Product Viewer</h1>
            </div>
            <div className={styles.internInfo}>
              <span>Pranav Sachin Naikude</span>
              <span>ID: CITS3986</span>
            </div>
          </header>

          <div className={styles.scrollableContent}>
            {/* Catalog Selector */}
            <ProductSelector
              products={PRODUCTS}
              selectedId={selectedProductId}
              onSelect={handleProductSelect}
            />

            {/* Customizer and Info Details */}
            <ProductInfo
              product={selectedProduct}
              activeColor={activeColor}
              onChangeColor={setActiveColor}
              onResetCamera={handleResetCamera}
              autoRotate={autoRotate}
              onToggleAutoRotate={handleToggleAutoRotate}
            />
          </div>

          <footer className={styles.footer}>
            <span>React Web Development Internship</span>
            <span>CODTECH IT Solutions Pvt. Ltd.</span>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
