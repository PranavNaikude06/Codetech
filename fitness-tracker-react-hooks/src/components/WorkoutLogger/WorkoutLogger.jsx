import React, { useState, useEffect } from 'react';
import { WORKOUT_PRESETS } from '../../constants/workouts';
import { calculateCalories } from '../../utils/calorieCalculator';
import { PlusCircle, Flame } from 'lucide-react';
import styles from './WorkoutLogger.module.css';

const WorkoutLogger = ({ userWeight, userUnit, onLogWorkout }) => {
  const [presetId, setPresetId] = useState(WORKOUT_PRESETS[0].id);
  const [customName, setCustomName] = useState('');
  const [duration, setDuration] = useState('30');
  const [intensity, setIntensity] = useState('moderate');
  const [weight, setWeight] = useState(userWeight || '70');

  // Keep weight input updated if userWeight from parent updates
  useEffect(() => {
    if (userWeight) {
      setWeight(userWeight.toString());
    }
  }, [userWeight]);

  const activePreset = WORKOUT_PRESETS.find((p) => p.id === presetId) || WORKOUT_PRESETS[0];

  // Intensity multipliers for MET: Low (0.8x), Moderate (1.0x), High (1.3x)
  const intensityMultipliers = {
    low: 0.8,
    moderate: 1.0,
    high: 1.3,
  };

  const currentMet = activePreset.met * intensityMultipliers[intensity];
  const estimatedCalories = calculateCalories(currentMet, weight, userUnit, duration);

  const handleSubmit = (e) => {
    e.preventDefault();

    const d = parseInt(duration);
    const w = parseFloat(weight);

    if (isNaN(d) || d <= 0 || isNaN(w) || w <= 0) {
      alert('Please enter valid positive numbers for duration and weight.');
      return;
    }

    const name = customName.trim() || activePreset.name;

    onLogWorkout({
      presetId,
      name,
      category: activePreset.category,
      duration: d,
      intensity,
      calories: estimatedCalories,
      weight: w,
      date: new Date().toISOString(), // Log timestamp
    });

    // Reset form fields
    setCustomName('');
    setDuration('30');
    setIntensity('moderate');
  };

  return (
    <div className={`${styles.container} glass-panel`}>
      <div className={styles.header}>
        <h3 className={styles.title}>Log Workout</h3>
        <p className={styles.subtitle}>Log details to estimate and record your daily calorie burn.</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="preset" className={styles.label}>
            Activity Type
          </label>
          <select
            id="preset"
            value={presetId}
            onChange={(e) => setPresetId(e.target.value)}
            className={styles.select}
          >
            {WORKOUT_PRESETS.map((preset) => (
              <option key={preset.id} value={preset.id}>
                {preset.icon} {preset.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="customName" className={styles.label}>
            Custom Name (Optional)
          </label>
          <input
            id="customName"
            type="text"
            placeholder={activePreset.name}
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
            className={styles.input}
            maxLength={40}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label htmlFor="duration" className={styles.label}>
              Duration (mins)
            </label>
            <input
              id="duration"
              type="number"
              min="1"
              max="480"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="weight" className={styles.label}>
              Weight ({userUnit === 'metric' ? 'kg' : 'lbs'})
            </label>
            <input
              id="weight"
              type="number"
              min="1"
              max="500"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className={styles.input}
              required
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Intensity Level</label>
          <div className={styles.radioGroup}>
            {['low', 'moderate', 'high'].map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setIntensity(level)}
                className={`${styles.radioBtn} ${intensity === level ? styles.radioBtnActive : ''}`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Live Estimation Panel */}
        <div className={styles.estimationPanel}>
          <div className={styles.estimationLabel}>
            <Flame size={18} className={styles.flameIcon} />
            <span>Estimated Calorie Burn</span>
          </div>
          <span className={styles.estimationValue}>{estimatedCalories} kcal</span>
        </div>

        <button type="submit" className={styles.submitBtn}>
          <PlusCircle size={18} />
          <span>Record Workout</span>
        </button>
      </form>
    </div>
  );
};

export default WorkoutLogger;
