import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styles from './StatsDashboard.module.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const StatsDashboard = ({ workouts, theme }) => {
  // Determine chart colors based on current theme
  const isDark = theme === 'dark';
  const textColor = isDark ? '#9ca3af' : '#475569';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(15, 23, 42, 0.05)';

  // --- Calculate Last 7 Days Calorie Data ---
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d;
  });

  const dailyCalories = last7Days.map((day) => {
    const dayStr = day.toDateString();
    return workouts
      .filter((w) => new Date(w.date).toDateString() === dayStr)
      .reduce((sum, w) => sum + w.calories, 0);
  });

  const barLabels = last7Days.map((day) =>
    day.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric' })
  );

  const barData = {
    labels: barLabels,
    datasets: [
      {
        label: 'Calories Burned (kcal)',
        data: dailyCalories,
        backgroundColor: '#10b981', // Success green
        borderRadius: 6,
        hoverBackgroundColor: '#059669',
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        padding: 12,
        cornerRadius: 8,
        backgroundColor: isDark ? '#1f2937' : '#ffffff',
        titleColor: isDark ? '#ffffff' : '#0f172a',
        bodyColor: isDark ? '#f3f4f6' : '#374151',
        borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: textColor,
          font: {
            family: 'Plus Jakarta Sans',
            weight: '600',
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: gridColor,
        },
        ticks: {
          color: textColor,
          font: {
            family: 'Plus Jakarta Sans',
            size: 11,
          },
          precision: 0,
        },
      },
    },
  };

  // --- Calculate Workout Category Distribution ---
  const categories = ['Cardio', 'Strength', 'Flexibility', 'Sports'];
  const categoryCounts = categories.map((cat) =>
    workouts.filter((w) => w.category === cat).length
  );

  const totalWorkouts = workouts.length;

  const doughnutData = {
    labels: categories,
    datasets: [
      {
        data: categoryCounts,
        backgroundColor: [
          '#06b6d4', // Cardio - Cyan
          '#8b5cf6', // Strength - Purple
          '#ec4899', // Flexibility - Pink/Rose
          '#f59e0b', // Sports - Amber
        ],
        borderWidth: isDark ? 2 : 1,
        borderColor: isDark ? '#090d16' : '#ffffff',
        hoverOffset: 6,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: textColor,
          padding: 15,
          font: {
            family: 'Plus Jakarta Sans',
            weight: '600',
            size: 12,
          },
        },
      },
      tooltip: {
        padding: 12,
        cornerRadius: 8,
        backgroundColor: isDark ? '#1f2937' : '#ffffff',
        titleColor: isDark ? '#ffffff' : '#0f172a',
        bodyColor: isDark ? '#f3f4f6' : '#374151',
        borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
      },
    },
    cutout: '65%',
  };

  return (
    <div className={styles.statsSection}>
      <h2 className={styles.sectionTitle}>Statistics & Metrics</h2>

      <div className={styles.grid}>
        {/* Weekly Calorie Burn Chart */}
        <div className={`${styles.chartCard} glass-panel`}>
          <h3 className={styles.chartTitle}>7-Day Calorie Tracker</h3>
          <div className={styles.chartWrapper}>
            <Bar data={barData} options={barOptions} />
          </div>
        </div>

        {/* Workout Category Distribution */}
        <div className={`${styles.chartCard} glass-panel`}>
          <h3 className={styles.chartTitle}>Workout Distribution</h3>
          <div className={styles.chartWrapper}>
            {totalWorkouts > 0 ? (
              <Doughnut data={doughnutData} options={doughnutOptions} />
            ) : (
              <div className={styles.noDataState}>
                <span className={styles.noDataIcon}>📊</span>
                <span className={styles.noDataText}>No activities logged yet</span>
                <span className={styles.noDataHint}>
                  Distribution data will show once you log a workout.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsDashboard;
