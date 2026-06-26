import styles from './ProductInfo.module.css';

const ProductInfo = ({
  product,
  activeColor,
  onChangeColor,
  onResetCamera,
  autoRotate,
  onToggleAutoRotate,
}) => {
  if (!product) return null;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.description}>{product.description}</p>
      </div>

      {/* Color Customizer */}
      <div className={styles.section}>
        <span className={styles.sectionTitle}>Customize Color</span>
        <div className={styles.swatchGrid}>
          {product.colorVariants.map((color) => (
            <button
              key={color}
              className={`${styles.swatch} ${activeColor === color ? styles.activeSwatch : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => onChangeColor(color)}
              aria-label={`Change material color to ${color}`}
              type="button"
            />
          ))}
        </div>
      </div>

      {/* Specs Panel */}
      <div className={styles.section}>
        <span className={styles.sectionTitle}>Specifications</span>
        <table className={styles.table}>
          <tbody>
            {Object.entries(product.specs).map(([key, value]) => (
              <tr key={key} className={styles.row}>
                <td className={styles.label}>{key}</td>
                <td className={styles.value}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Control Actions */}
      <div className={styles.actions}>
        <button
          className={`${styles.button} ${autoRotate ? styles.buttonActive : ''}`}
          onClick={onToggleAutoRotate}
          type="button"
          aria-label="Toggle auto-rotate model"
        >
          {autoRotate ? '⏸️ Pause Orbit' : '🔄 Auto Rotate'}
        </button>
        <button
          className={styles.buttonReset}
          onClick={onResetCamera}
          type="button"
          aria-label="Reset camera view"
        >
          🎯 Reset Camera
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
