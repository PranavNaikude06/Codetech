import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../constants/weather';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

// Generate mock forecast data for next 5 days
const generateMockForecast = (cityKey, tempOffset = 0) => {
  const baseTemps = {
    mumbai: { min: 26, max: 32, desc: 'scattered clouds', icon: '03d' },
    london: { min: 11, max: 18, desc: 'light rain', icon: '10d' },
    tokyo: { min: 17, max: 24, desc: 'clear sky', icon: '01d' },
    newyork: { min: 19, max: 27, desc: 'few clouds', icon: '02d' },
    sydney: { min: 12, max: 19, desc: 'overcast clouds', icon: '04d' },
  };

  const info = baseTemps[cityKey] || { min: 15, max: 22, desc: 'clear sky', icon: '01d' };
  const forecast = [];
  const startDay = new Date();

  for (let i = 1; i <= 5; i++) {
    const futureDate = new Date();
    futureDate.setDate(startDay.getDate() + i);
    futureDate.setHours(12, 0, 0, 0); // 12:00 PM

    // Add some slight temperature variation per day
    const variationMin = (Math.sin(i) * 2);
    const variationMax = (Math.cos(i) * 2);

    forecast.push({
      dt: Math.floor(futureDate.getTime() / 1000),
      main: {
        temp_min: info.min + variationMin,
        temp_max: info.max + variationMax,
      },
      weather: [{ id: 800, main: 'Clouds', description: info.desc, icon: info.icon }],
    });
  }

  return forecast;
};

export const useForecastData = (city) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchForecast = async () => {
      setLoading(true);
      setError(null);

      const isDemoMode = !API_KEY || API_KEY === 'your_openweather_api_key_here' || API_KEY.trim() === '';

      if (isDemoMode) {
        await new Promise((resolve) => setTimeout(resolve, 600));
        const key = city.toLowerCase().replace(/\s+/g, '');
        setData(generateMockForecast(key));
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${API_BASE_URL}/forecast`, {
          params: {
            q: city,
            appid: API_KEY,
            units: 'metric',
          },
        });

        // Filter/process the forecast data to get 5 distinct future days
        const list = response.data.list;
        const processed = [];
        const seenDates = new Set();
        const todayStr = new Date().toDateString();

        for (const item of list) {
          const dateStr = new Date(item.dt * 1000).toDateString();
          if (dateStr === todayStr) continue;

          if (!seenDates.has(dateStr)) {
            seenDates.add(dateStr);
            const dayEntries = list.filter(
              (x) => new Date(x.dt * 1000).toDateString() === dateStr
            );
            const middayEntry =
              dayEntries.find((x) => {
                const hours = new Date(x.dt * 1000).getHours();
                return hours >= 11 && hours <= 15;
              }) || dayEntries[0];

            processed.push(middayEntry);
          }
        }

        setData(processed.slice(0, 5));
      } catch (err) {
        console.error('Error fetching forecast:', err);
        setError(err.message || 'Failed to fetch forecast');
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [city]);

  return { data, loading, error };
};
