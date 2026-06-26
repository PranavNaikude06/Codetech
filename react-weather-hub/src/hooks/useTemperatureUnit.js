import { useState, useEffect } from 'react';

export const useTemperatureUnit = () => {
  const [unit, setUnit] = useState(() => {
    try {
      const saved = window.localStorage.getItem('weather_temp_unit');
      return saved === 'F' ? 'F' : 'C';
    } catch (e) {
      return 'C';
    }
  });

  const toggleUnit = () => {
    setUnit((prev) => (prev === 'C' ? 'F' : 'C'));
  };

  useEffect(() => {
    try {
      window.localStorage.setItem('weather_temp_unit', unit);
    } catch (e) {
      console.error('Failed to save temperature unit to localStorage:', e);
    }
  }, [unit]);

  return [unit, toggleUnit];
};
