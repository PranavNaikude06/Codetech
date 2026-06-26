import styles from './LoadingOverlay.module.css';

const LoadingOverlay = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.spinner} />
        <span className={styles.text}>Streaming 3D Assets...</span>
      </div>
    </div>
  );
};

export default LoadingOverlay;
