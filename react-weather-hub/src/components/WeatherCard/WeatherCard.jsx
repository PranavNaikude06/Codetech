import { formatTemperature } from '../../utils/formatTemperature';
import { getWeatherIconUrl } from '../../utils/getWeatherIconUrl';
import styles from './WeatherCard.module.css';

const WeatherCard = ({ data, unit }) => {
  if (!data) return null;

  const { name, sys, main, weather, wind } = data;
  const weatherDetails = weather[0];
  const iconUrl = getWeatherIconUrl(weatherDetails.icon);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.location}>
          <h2 className={styles.cityName}>{name}</h2>
          <span className={styles.country}>{sys.country}</span>
        </div>
        <div className={styles.conditionContainer}>
          <img
            src={iconUrl}
            alt={weatherDetails.description}
            className={styles.weatherIcon}
            width={80}
            height={80}
          />
          <span className={styles.description}>{weatherDetails.description}</span>
        </div>
      </div>

      <div className={styles.body}>
        <h1 className={styles.temp}>{formatTemperature(main.temp, unit)}</h1>

        <div className={styles.detailsGrid}>
          <div className={styles.detailItem}>
            <span className={styles.label}>Feels Like</span>
            <span className={styles.value}>{formatTemperature(main.feels_like, unit)}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Humidity</span>
            <span className={styles.value}>{main.humidity}%</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Wind Speed</span>
            <span className={styles.value}>{Math.round(wind.speed * 3.6)} km/h</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Pressure</span>
            <span className={styles.value}>{main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
