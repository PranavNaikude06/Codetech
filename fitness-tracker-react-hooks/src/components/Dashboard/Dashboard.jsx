import React, { useState } from 'react';
import { Footprints, Flame, Timer, Edit3, Check } from 'lucide-react';
import styles from './Dashboard.module.css';

const Dashboard = ({ todayWorkouts, todaySteps, goals, onUpdateSteps }) => {
  const [isEditingSteps, setIsEditingSteps] = useState(false);
  const [tempSteps, setTempSteps] = useState(todaySteps);

  // Calculate calories and active minutes from workouts today
  const todayCalories = todayWorkouts.reduce((sum, w) => sum + w.calories, 0);
  const todayActiveMinutes = todayWorkouts.reduce((sum, w) => sum + w.duration, 0);

  // Helper to calculate percentages
  const getPercent = (value, goal) => {
    if (!goal) return 0;
    return Math.min(Math.round((value / goal) * 100), 100);
  };

  const stepsPercent = getPercent(todaySteps, goals.steps);
  const caloriesPercent = getPercent(todayCalories, goals.calories);
  const activePercent = getPercent(todayActiveMinutes, goals.activeMinutes);

  const handleSaveSteps = () => {
    const val = parseInt(tempSteps);
    if (!isNaN(val) && val >= 0) {
      onUpdateSteps(val);
    }
    setIsEditingSteps(false);
  };

  const handleQuickAddSteps = (amount) => {
    const newVal = todaySteps + amount;
    onUpdateSteps(newVal);
    setTempSteps(newVal);
  };

  return (
    <div className={styles.dashboard}>
      <h2 className={styles.sectionTitle}>Today's Summary</h2>

      <div className={styles.grid}>
        {/* Steps Card */}
        <div className={`${styles.card} glass-panel`}>
          <div className={styles.cardHeader}>
            <div className={`${styles.iconWrapper} ${styles.stepsIcon}`}>
              <Footprints size={24} />
            </div>
            <span className={styles.cardTitle}>Daily Steps</span>
          </div>

          <div className={styles.cardValueContainer}>
            {isEditingSteps ? (
              <div className={styles.editStepsForm}>
                <input
                  type="number"
                  value={tempSteps}
                  onChange={(e) => setTempSteps(e.target.value)}
                  className={styles.stepsInput}
                  min="0"
                  autoFocus
                />
                <button onClick={handleSaveSteps} className={styles.saveStepsBtn} type="button">
                  <Check size={16} />
                </button>
              </div>
            ) : (
              <div className={styles.stepsDisplay}>
                <span className={styles.value}>{todaySteps.toLocaleString()}</span>
                <span className={styles.goal}>/ {goals.steps.toLocaleString()}</span>
                <button
                  onClick={() => {
                    setTempSteps(todaySteps);
                    setIsEditingSteps(true);
                  }}
                  className={styles.editBtn}
                  type="button"
                  aria-label="Edit steps"
                >
                  <Edit3 size={14} />
                </button>
              </div>
            )}
          </div>

          <div className={styles.progressBarWrapper}>
            <div className={styles.progressBarBg}>
              <div
                className={`${styles.progressBarFill} ${styles.stepsFill}`}
                style={{ width: `${stepsPercent}%` }}
              />
            </div>
            <div className={styles.progressInfo}>
              <span>{stepsPercent}% of goal</span>
              <span>
                {goals.steps - todaySteps > 0
                  ? `${(goals.steps - todaySteps).toLocaleString()} left`
                  : 'Goal achieved! 🎉'}
              </span>
            </div>
          </div>

          <div className={styles.quickAdd}>
            <button onClick={() => handleQuickAddSteps(1000)} type="button">
              +1K Steps
            </button>
            <button onClick={() => handleQuickAddSteps(2500)} type="button">
              +2.5K Steps
            </button>
          </div>
        </div>

        {/* Calories Card */}
        <div className={`${styles.card} glass-panel`}>
          <div className={styles.cardHeader}>
            <div className={`${styles.iconWrapper} ${styles.caloriesIcon}`}>
              <Flame size={24} />
            </div>
            <span className={styles.cardTitle}>Calories Burned</span>
          </div>

          <div className={styles.cardValueContainer}>
            <span className={styles.value}>{todayCalories.toLocaleString()}</span>
            <span className={styles.goal}>/ {goals.calories.toLocaleString()} kcal</span>
          </div>

          <div className={styles.progressBarWrapper}>
            <div className={styles.progressBarBg}>
              <div
                className={`${styles.progressBarFill} ${styles.caloriesFill}`}
                style={{ width: `${caloriesPercent}%` }}
              />
            </div>
            <div className={styles.progressInfo}>
              <span>{caloriesPercent}% of goal</span>
              <span>
                {goals.calories - todayCalories > 0
                  ? `${(goals.calories - todayCalories).toLocaleString()} kcal left`
                  : 'Goal achieved! 🔥'}
              </span>
            </div>
          </div>

          <div className={styles.cardHint}>Log workouts below to burn active calories!</div>
        </div>

        {/* Active Minutes Card */}
        <div className={`${styles.card} glass-panel`}>
          <div className={styles.cardHeader}>
            <div className={`${styles.iconWrapper} ${styles.activeIcon}`}>
              <Timer size={24} />
            </div>
            <span className={styles.cardTitle}>Active Time</span>
          </div>

          <div className={styles.cardValueContainer}>
            <span className={styles.value}>{todayActiveMinutes}</span>
            <span className={styles.goal}>/ {goals.activeMinutes} mins</span>
          </div>

          <div className={styles.progressBarWrapper}>
            <div className={styles.progressBarBg}>
              <div
                className={`${styles.progressBarFill} ${styles.activeFill}`}
                style={{ width: `${activePercent}%` }}
              />
            </div>
            <div className={styles.progressInfo}>
              <span>{activePercent}% of goal</span>
              <span>
                {goals.activeMinutes - todayActiveMinutes > 0
                  ? `${goals.activeMinutes - todayActiveMinutes} mins left`
                  : 'Goal achieved! ⚡'}
              </span>
            </div>
          </div>

          <div className={styles.cardHint}>Total active exercise time recorded today.</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
