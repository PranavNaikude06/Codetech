import styles from './RecentSearches.module.css';

const RecentSearches = ({ searches, onClickSearch, onDeleteSearch, onClearAll }) => {
  if (!searches || searches.length === 0) return null;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Recent Searches</span>
        <button className={styles.clearAll} onClick={onClearAll} type="button">
          Clear All
        </button>
      </div>
      <div className={styles.chipsContainer}>
        {searches.map((city, index) => (
          <div key={`${city}-${index}`} className={styles.chipWrapper}>
            <button
              className={styles.chip}
              onClick={() => onClickSearch(city)}
              type="button"
              aria-label={`Search weather for ${city}`}
            >
              {city}
            </button>
            <button
              className={styles.deleteBtn}
              onClick={() => onDeleteSearch(city)}
              aria-label={`Remove ${city} from search history`}
              type="button"
            >
              <svg
                className={styles.deleteIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;
