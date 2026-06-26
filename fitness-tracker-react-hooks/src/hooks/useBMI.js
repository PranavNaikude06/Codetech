import { useMemo } from 'react';

const useBMI = (weight, height, unit) => {
  const bmiData = useMemo(() => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
      return { bmi: null, classification: '', color: '', feedback: '' };
    }

    let bmi = 0;
    if (unit === 'metric') {
      const heightInMeters = h / 100;
      bmi = w / (heightInMeters * heightInMeters);
    } else {
      bmi = 703 * (w / (h * h));
    }

    // Round to 1 decimal place
    bmi = Math.round(bmi * 10) / 10;

    let classification = '';
    let color = '';
    let feedback = '';

    if (bmi < 18.5) {
      classification = 'Underweight';
      color = '#38bdf8'; // Cyan
      feedback = 'Consider consulting a healthcare provider to design a balanced meal plan. Focus on nutrient-rich foods and strength training to build healthy muscle mass.';
    } else if (bmi < 25) {
      classification = 'Normal';
      color = '#4ade80'; // Green
      feedback = 'Great job! You are in a healthy weight range. Keep maintaining your active lifestyle and balanced diet to sustain your current physical health.';
    } else if (bmi < 30) {
      classification = 'Overweight';
      color = '#fb923c'; // Orange
      feedback = 'Slightly above the healthy range. Incorporate regular cardiovascular workouts (like walking or cycling) along with portion-controlled, whole foods.';
    } else {
      classification = 'Obese';
      color = '#f87171'; // Red
      feedback = 'Increased health risk category. We recommend speaking with a fitness coach or nutritionist to establish a gradual, sustainable wellness routine.';
    }

    return { bmi, classification, color, feedback };
  }, [weight, height, unit]);

  return bmiData;
};

export default useBMI;
