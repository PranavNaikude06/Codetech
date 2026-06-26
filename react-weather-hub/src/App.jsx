import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

// Components
import SearchBar from './components/SearchBar/SearchBar';
import RecentSearches from './components/RecentSearches/RecentSearches';
import UnitToggle from './components/UnitToggle/UnitToggle';
import WeatherCard from './components/WeatherCard/WeatherCard';
import ForecastGrid from './components/ForecastGrid/ForecastGrid';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

// Hooks
import { useTemperatureUnit } from './hooks/useTemperatureUnit';
import { useRecentSearches } from './hooks/useRecentSearches';
import { useWeatherData } from './hooks/useWeatherData';
import { useForecastData } from './hooks/useForecastData';

// Constants
import { DEFAULT_CITY } from './constants/weather';

function App() {
  const [submittedQuery, setSubmittedQuery] = useState(DEFAULT_CITY);
  const [unit, toggleUnit] = useTemperatureUnit();
  const [searches, addSearch, removeSearch, clearAllSearches] = useRecentSearches();

  // Fetch weather data
  const {
    data: weatherData,
    loading: weatherLoading,
    error: weatherError,
  } = useWeatherData(submittedQuery);

  // Fetch forecast data
  const {
    data: forecastData,
    loading: forecastLoading,
    error: forecastError,
  } = useForecastData(submittedQuery);

  // Add to search history only if weather data loads successfully
  useEffect(() => {
    if (weatherData && weatherData.name) {
      addSearch(weatherData.name);
    }
  }, [weatherData]);

  // Handle Search Submission
  const handleSearch = (city) => {
    setSubmittedQuery(city);
  };

  const handleRecentSearchClick = (city) => {
    setSubmittedQuery(city);
  };

  const isLoading = weatherLoading || forecastLoading;
  const hasError = weatherError || forecastError;

  return (
    <div className={styles.appContainer}>
      <header className={styles.appHeader}>
        <div className={styles.logoSection}>
          <svg
            className={styles.logoIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            <circle cx="12" cy="12" r="4" />
          </svg>
          <h1 className={styles.title}>React Weather Hub</h1>
        </div>
        <UnitToggle unit={unit} onToggle={toggleUnit} />
      </header>

      <main className={styles.mainContent}>
        <section className={styles.searchSection} aria-label="City Search">
          <SearchBar onSearch={handleSearch} />
          <RecentSearches
            searches={searches}
            onClickSearch={handleRecentSearchClick}
            onDeleteSearch={removeSearch}
            onClearAll={clearAllSearches}
          />
        </section>

        <section
          className={styles.resultSection}
          aria-label="Weather Results"
          aria-busy={isLoading}
        >
          {isLoading && <LoadingSpinner />}

          {!isLoading && hasError && (
            <ErrorMessage message={weatherError || 'Failed to retrieve forecast data.'} />
          )}

          {!isLoading && !hasError && weatherData && (
            <>
              <WeatherCard data={weatherData} unit={unit} />
              {forecastData && forecastData.length > 0 && (
                <ForecastGrid forecastList={forecastData} unit={unit} />
              )}
            </>
          )}

          {!isLoading && !hasError && !weatherData && (
            <div className={styles.emptyState}>
              <p>Search for a city above to view real-time weather information.</p>
            </div>
          )}
        </section>
      </main>

      <footer className={styles.appFooter}>
        <p>Pranav Sachin Naikude | ID: CITS3986</p>
        <p>React.js Web Development Intern | CODTECH IT Solutions</p>
      </footer>
    </div>
  );
}

export default App;
