import React from 'react';
import useTheme from '../../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';
import styles from './ThemeToggler.module.css';

const ThemeToggler = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.toggler}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      type="button"
    >
      <div className={styles.iconContainer}>
        {theme === 'dark' ? (
          <Sun size={20} className={styles.sunIcon} />
        ) : (
          <Moon size={20} className={styles.moonIcon} />
        )}
      </div>
      <span className={styles.tooltip}>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  );
};

export default ThemeToggler;
