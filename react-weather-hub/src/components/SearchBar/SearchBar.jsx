import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState('');
  const [validationError, setValidationError] = useState('');

  const validateInput = (val) => {
    const trimmed = val.trim();
    if (!trimmed) {
      return 'Please enter a city name.';
    }
    if (trimmed.length < 2) {
      return 'City name must be at least 2 characters.';
    }
    // Only letters, spaces, hyphens
    const regex = /^[a-zA-Z\s-]+$/;
    if (!regex.test(trimmed)) {
      return 'Please enter a valid city name.';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateInput(value);
    if (error) {
      setValidationError(error);
    } else {
      setValidationError('');
      onSearch(value.trim());
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    if (validationError) {
      // Clear error immediately on type
      setValidationError('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.searchContainer}>
        <label htmlFor="city-search" className={styles.srOnly}>
          Search City
        </label>
        <input
          id="city-search"
          type="text"
          className={`${styles.input} ${validationError ? styles.inputError : ''}`}
          placeholder="Search city (e.g. Mumbai, Tokyo)..."
          value={value}
          onChange={handleChange}
          aria-invalid={!!validationError}
          aria-describedby={validationError ? 'search-error' : undefined}
          autoComplete="off"
        />
        <button
          type="submit"
          className={styles.button}
          aria-label="Search weather for city"
        >
          <svg
            className={styles.searchIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      {validationError && (
        <span id="search-error" className={styles.errorText} role="alert">
          {validationError}
        </span>
      )}
    </form>
  );
};

export default SearchBar;
