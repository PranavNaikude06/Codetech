import { useState, useEffect } from 'react';
import { MAX_SEARCH_HISTORY } from '../constants/weather';

export const useRecentSearches = () => {
  const [searches, setSearches] = useState(() => {
    try {
      const saved = window.localStorage.getItem('weather_recent_searches');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const addSearch = (city) => {
    if (!city || typeof city !== 'string') return;
    const cleanCity = city.trim();
    if (cleanCity === '') return;

    setSearches((prev) => {
      // Remove city if it already exists (to push it to the top)
      const filtered = prev.filter((item) => item.toLowerCase() !== cleanCity.toLowerCase());
      const updated = [cleanCity, ...filtered].slice(0, MAX_SEARCH_HISTORY);
      return updated;
    });
  };

  const removeSearch = (cityToRemove) => {
    setSearches((prev) => prev.filter((city) => city.toLowerCase() !== cityToRemove.toLowerCase()));
  };

  const clearAll = () => {
    setSearches([]);
  };

  useEffect(() => {
    try {
      window.localStorage.setItem('weather_recent_searches', JSON.stringify(searches));
    } catch (e) {
      console.error('Failed to save recent searches to localStorage:', e);
    }
  }, [searches]);

  return [searches, addSearch, removeSearch, clearAll];
};
