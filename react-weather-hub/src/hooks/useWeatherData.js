import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../constants/weather';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

// Mock data for demo mode when API key is not set
const MOCK_WEATHER = {
  mumbai: {
    name: 'Mumbai',
    sys: { country: 'IN' },
    main: { temp: 30, feels_like: 35, humidity: 75, pressure: 1008 },
    weather: [{ id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03d' }],
    wind: { speed: 4.1 },
  },
  london: {
    name: 'London',
    sys: { country: 'GB' },
    main: { temp: 16, feels_like: 15, humidity: 80, pressure: 1012 },
    weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
    wind: { speed: 5.5 },
  },
  tokyo: {
    name: 'Tokyo',
    sys: { country: 'JP' },
    main: { temp: 22, feels_like: 21, humidity: 60, pressure: 1015 },
    weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
    wind: { speed: 3.1 },
  },
  newyork: {
    name: 'New York',
    sys: { country: 'US' },
    main: { temp: 24, feels_like: 24, humidity: 55, pressure: 1010 },
    weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' }],
    wind: { speed: 4.6 },
  },
  sydney: {
    name: 'Sydney',
    sys: { country: 'AU' },
    main: { temp: 18, feels_like: 18, humidity: 65, pressure: 1018 },
    weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }],
    wind: { speed: 6.2 },
  },
};

export const useWeatherData = (city) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      const isDemoMode = !API_KEY || API_KEY === 'your_openweather_api_key_here' || API_KEY.trim() === '';

      if (isDemoMode) {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 600));
        const key = city.toLowerCase().replace(/\s+/g, '');
        if (MOCK_WEATHER[key]) {
          setData(MOCK_WEATHER[key]);
        } else {
          setError(`City "${city}" not found in Demo Mode. Try searching for Mumbai, London, Tokyo, New York, or Sydney, or set your OpenWeather API key in .env.`);
          setData(null);
        }
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${API_BASE_URL}/weather`, {
          params: {
            q: city,
            appid: API_KEY,
            units: 'metric',
          },
        });
        setData(response.data);
      } catch (err) {
        console.error('Error fetching weather:', err);
        if (err.response) {
          const status = err.response.status;
          if (status === 401) {
            setError('Authentication error. Please check your API key.');
          } else if (status === 404) {
            setError('City not found. Please check the spelling.');
          } else if (status === 429) {
            setError('Too many requests. Please wait a moment and try again.');
          } else {
            setError('Weather service is temporarily unavailable. Please try again later.');
          }
        } else {
          setError('Unable to fetch weather data. Please check your internet connection.');
        }
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { data, loading, error };
};
