import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Sun, Moon, Calendar, CreditCard } from 'lucide-react';
import { useTravel } from '../../context/TravelContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { trips, theme, toggleTheme } = useTravel();

  // Compute overall stats
  const totalTrips = trips.length;

  const totalBudget = trips.reduce((acc, t) => acc + (Number(t.budget) || 0), 0);
  const totalSpent = trips.reduce((acc, t) => {
    const expensesSum = (t.expenses || []).reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
    return acc + expensesSum;
  }, 0);

  return (
    <nav className={`${styles.navbar} glass-panel animate-fade-in`}>
      <Link to="/" className={styles.logo}>
        <Compass className={styles.logoIcon} size={28} />
        <span className={styles.logoText}>VoyagePlanner</span>
      </Link>

      <div className={styles.statsContainer}>
        <div className={styles.statItem} title="Total Trips Planned">
          <Calendar size={16} className={styles.statIcon} />
          <span className={styles.statLabel}>Trips:</span>
          <span className={styles.statVal}>{totalTrips}</span>
        </div>
        <div className={styles.statItem} title="Total Budget Utilized">
          <CreditCard size={16} className={styles.statIcon} />
          <span className={styles.statLabel}>Spent:</span>
          <span className={styles.statVal}>
            ${totalSpent.toLocaleString()} / ${totalBudget.toLocaleString()}
          </span>
        </div>
      </div>

      <button
        onClick={toggleTheme}
        className={styles.themeToggle}
        aria-label="Toggle light/dark theme"
      >
        {theme === 'light' ? (
          <Moon size={20} className={styles.toggleIcon} />
        ) : (
          <Sun size={20} className={styles.toggleIcon} />
        )}
      </button>
    </nav>
  );
}
