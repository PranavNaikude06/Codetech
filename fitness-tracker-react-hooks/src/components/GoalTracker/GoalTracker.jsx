import React, { useState } from 'react';
import { Target, Footprints, Flame, Timer, Check } from 'lucide-react';
import styles from './GoalTracker.module.css';

const GoalTracker = ({ goals, onUpdateGoals }) => {
  const [steps, setSteps] = useState(goals.steps);
  const [calories, setCalories] = useState(goals.calories);
  const [activeMinutes, setActiveMinutes] = useState(goals.activeMinutes);
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateGoals({
      steps: parseInt(steps) || 10000,
      calories: parseInt(calories) || 500,
      activeMinutes: parseInt(activeMinutes) || 30,
    });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className={`${styles.container} glass-panel`}>
      <div className={styles.header}>
        <h3 className={styles.title}>Goal Settings</h3>
        <p className={styles.subtitle}>Define your daily fitness and wellness targets.</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="stepsGoal" className={styles.label}>
            <Footprints size={14} className={styles.icon} /> Steps Target
          </label>
          <input
            id="stepsGoal"
            type="number"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={styles.input}
            min="100"
            max="100000"
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="caloriesGoal" className={styles.label}>
            <Flame size={14} className={styles.icon} /> Calorie Target (kcal)
          </label>
          <input
            id="caloriesGoal"
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            className={styles.input}
            min="10"
            max="10000"
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="activeMinutesGoal" className={styles.label}>
            <Timer size={14} className={styles.icon} /> Active Time Target (mins)
          </label>
          <input
            id="activeMinutesGoal"
            type="number"
            value={activeMinutes}
            onChange={(e) => setActiveMinutes(e.target.value)}
            className={styles.input}
            min="1"
            max="480"
            required
          />
        </div>

        <button type="submit" className={`${styles.submitBtn} ${isSaved ? styles.btnSuccess : ''}`}>
          {isSaved ? (
            <>
              <Check size={18} />
              <span>Goals Saved!</span>
            </>
          ) : (
            <>
              <Target size={18} />
              <span>Update Targets</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default GoalTracker;
