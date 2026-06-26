import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark'); // Default to dark for maximum aesthetic impact

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return [theme, toggleTheme];
};

export default useTheme;
