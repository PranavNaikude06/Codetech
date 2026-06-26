import ForecastCard from '../ForecastCard/ForecastCard';
import styles from './ForecastGrid.module.css';

const ForecastGrid = ({ forecastList, unit }) => {
  if (!forecastList || forecastList.length === 0) return null;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>5-Day Forecast</h3>
      <div className={styles.grid}>
        {forecastList.map((dayData) => (
          <ForecastCard key={dayData.dt} data={dayData} unit={unit} />
        ))}
      </div>
    </div>
  );
};

export default ForecastGrid;
