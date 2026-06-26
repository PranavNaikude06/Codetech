import styles from './UnitToggle.module.css';

const UnitToggle = ({ unit, onToggle }) => {
  return (
    <button
      className={styles.toggle}
      onClick={onToggle}
      aria-label={`Toggle temperature unit. Current unit is ${
        unit === 'C' ? 'Celsius' : 'Fahrenheit'
      }`}
      aria-pressed={unit === 'F'}
      type="button"
    >
      <span className={`${styles.unit} ${unit === 'C' ? styles.active : ''}`}>°C</span>
      <span className={styles.divider}>/</span>
      <span className={`${styles.unit} ${unit === 'F' ? styles.active : ''}`}>°F</span>
    </button>
  );
};

export default UnitToggle;
