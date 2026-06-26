import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={styles.container} aria-live="polite" aria-busy="true">
      <div className={styles.spinner} />
      <span className={styles.text}>Fetching latest weather data...</span>
    </div>
  );
};

export default LoadingSpinner;
