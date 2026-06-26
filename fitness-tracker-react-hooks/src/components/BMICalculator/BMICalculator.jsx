import React, { useState, useEffect, useRef } from 'react';
import useBMI from '../../hooks/useBMI';
import { Activity, Scale, ArrowRightLeft } from 'lucide-react';
import styles from './BMICalculator.module.css';

const BMICalculator = ({ initialWeight, initialUnit, onUpdateWeight, onUpdateUnit }) => {
  const [unit, setUnit] = useState(initialUnit || 'metric');
  const [weight, setWeight] = useState(initialWeight?.toString() || '70');
  const [height, setHeight] = useState(unit === 'metric' ? '170' : '67');
  
  const weightRef = useRef(weight);
  
  // Track weight changes in a ref to avoid triggering effect cycles
  useEffect(() => {
    weightRef.current = weight;
  }, [weight]);

  // Sync state if initialWeight from parent changes and differs from local weight
  useEffect(() => {
    if (initialWeight && weightRef.current !== '' && parseFloat(weightRef.current) !== initialWeight) {
      setWeight(initialWeight.toString());
    }
  }, [initialWeight]);

  useEffect(() => {
    if (initialUnit && initialUnit !== unit) {
      setUnit(initialUnit);
      // Adjust default heights when unit changes
      if (initialUnit === 'metric') {
        setHeight('170');
      } else {
        setHeight('67');
      }
    }
  }, [initialUnit, unit]);

  // Calculate BMI using our custom hook
  const { bmi, classification, color, feedback } = useBMI(weight, height, unit);

  // Trigger weight sync to parent when weight value is valid and differs from parent weight
  useEffect(() => {
    const parsedWeight = parseFloat(weight);
    if (!isNaN(parsedWeight) && parsedWeight > 0 && parsedWeight !== initialWeight) {
      onUpdateWeight(parsedWeight);
    }
  }, [weight, initialWeight, onUpdateWeight]);

  const handleUnitToggle = (selectedUnit) => {
    if (selectedUnit === unit) return;

    // Convert height estimate to avoid jarring changes
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (selectedUnit === 'metric') {
      // Imperial -> Metric
      if (!isNaN(h)) setHeight(Math.round(h * 2.54).toString());
      if (!isNaN(w)) setWeight(Math.round(w / 2.20462).toString());
    } else {
      // Metric -> Imperial
      if (!isNaN(h)) setHeight(Math.round(h / 2.54).toString());
      if (!isNaN(w)) setWeight(Math.round(w * 2.20462).toString());
    }

    setUnit(selectedUnit);
    onUpdateUnit(selectedUnit);
  };

  // needle position percentage (mapped from BMI 15 to 35)
  const getNeedlePosition = () => {
    if (!bmi) return 0;
    const minBmi = 15;
    const maxBmi = 35;
    const percentage = ((bmi - minBmi) / (maxBmi - minBmi)) * 100;
    return Math.min(Math.max(percentage, 0), 100);
  };

  return (
    <div className={`${styles.container} glass-panel`}>
      <div className={styles.header}>
        <h3 className={styles.title}>BMI Calculator</h3>
        <button
          type="button"
          onClick={() => handleUnitToggle(unit === 'metric' ? 'imperial' : 'metric')}
          className={styles.unitToggleBtn}
          aria-label="Toggle measurement units"
        >
          <ArrowRightLeft size={14} />
          <span>Use {unit === 'metric' ? 'Imperial' : 'Metric'}</span>
        </button>
      </div>

      <div className={styles.form}>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label htmlFor="bmiWeight" className={styles.label}>
              Weight ({unit === 'metric' ? 'kg' : 'lbs'})
            </label>
            <input
              id="bmiWeight"
              type="number"
              min="10"
              max="500"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="bmiHeight" className={styles.label}>
              Height ({unit === 'metric' ? 'cm' : 'inches'})
            </label>
            <input
              id="bmiHeight"
              type="number"
              min="30"
              max="300"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className={styles.input}
            />
          </div>
        </div>

        {bmi ? (
          <div className={styles.resultPanel}>
            <div className={styles.scoreSection}>
              <div className={styles.scoreContainer}>
                <Scale className={styles.scaleIcon} size={18} />
                <span className={styles.bmiVal}>{bmi}</span>
              </div>
              <span
                className={styles.badge}
                style={{ backgroundColor: `${color}18`, color, border: `1px solid ${color}40` }}
              >
                {classification}
              </span>
            </div>

            {/* Gauge slider track */}
            <div className={styles.gaugeContainer}>
              <div className={styles.gaugeTrack} />
              <div
                className={styles.gaugeNeedle}
                style={{ left: `${getNeedlePosition()}%`, backgroundColor: color }}
              />
              <div className={styles.gaugeLabels}>
                <span>15</span>
                <span>Underweight</span>
                <span>Normal</span>
                <span>Overweight</span>
                <span>Obese</span>
                <span>35</span>
              </div>
            </div>

            <div className={styles.advicePanel} style={{ borderLeftColor: color }}>
              <span className={styles.adviceTitle}>Health Guidance</span>
              <p className={styles.adviceText}>{feedback}</p>
            </div>
          </div>
        ) : (
          <div className={styles.placeholderPanel}>
            <Activity className={styles.placeholderIcon} size={32} />
            <span>Enter height and weight to calculate BMI.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
