import { formatDate, formatDay } from '../../utils/formatDate';
import { formatTemperature } from '../../utils/formatTemperature';
import { getWeatherIconUrl } from '../../utils/getWeatherIconUrl';
import styles from './ForecastCard.module.css';

const ForecastCard = ({ data, unit }) => {
  const { dt, main, weather } = data;
  const weatherDetails = weather[0];
  const iconUrl = getWeatherIconUrl(weatherDetails.icon);

  return (
    <div className={styles.card}>
      <span className={styles.day}>{formatDay(dt)}</span>
      <span className={styles.date}>{formatDate(dt)}</span>
      <img
        src={iconUrl}
        alt={weatherDetails.description}
        className={styles.icon}
        width={50}
        height={50}
      />
      <span className={styles.tempRange}>
        <span className={styles.tempMax}>{formatTemperature(main.temp_max, unit)}</span>
        <span className={styles.tempMin}>{formatTemperature(main.temp_min, unit)}</span>
      </span>
      <span className={styles.description}>{weatherDetails.description}</span>
    </div>
  );
};

export default ForecastCard;
