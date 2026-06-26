import styles from './ControlsHint.module.css';

const ControlsHint = () => {
  return (
    <div className={styles.hint}>
      <span className={styles.item}>
        <span className={styles.icon}>🖱️</span> Left-click + Drag to Rotate
      </span>
      <span className={styles.divider}>•</span>
      <span className={styles.item}>
        <span className={styles.icon}>🎡</span> Scroll to Zoom
      </span>
      <span className={styles.divider}>•</span>
      <span className={styles.item}>
        <span className={styles.icon}>✋</span> Right-click + Drag to Pan
      </span>
    </div>
  );
};

export default ControlsHint;
