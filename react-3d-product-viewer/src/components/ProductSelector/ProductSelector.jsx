import styles from './ProductSelector.module.css';

const ProductSelector = ({ products, selectedId, onSelect }) => {
  return (
    <div className={styles.selector}>
      <h3 className={styles.title}>Catalog</h3>
      <div className={styles.grid}>
        {products.map((product) => (
          <button
            key={product.id}
            className={`${styles.card} ${product.id === selectedId ? styles.active : ''}`}
            onClick={() => onSelect(product.id)}
            aria-label={`Select ${product.name}`}
            type="button"
          >
            <div className={styles.thumbnailPlaceholder}>
              {product.id === 'cyber-helmet' && <span className={styles.thumbIcon}>🪖</span>}
              {product.id === 'torus-knot' && <span className={styles.thumbIcon}>➰</span>}
              {product.id === 'core-sphere' && <span className={styles.thumbIcon}>🔮</span>}
            </div>
            <span className={styles.name}>{product.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductSelector;
