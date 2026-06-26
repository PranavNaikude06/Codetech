/**
 * Calculates calories burned during a workout session.
 * Formula: Calories = MET * 3.5 * (Weight in kg) / 200 * Duration (minutes)
 * 
 * @param {number} met - Metabolic Equivalent for the exercise
 * @param {number} weight - Weight of the user
 * @param {string} unit - Unit system ('metric' or 'imperial')
 * @param {number} duration - Duration in minutes
 * @returns {number} Estimated calories burned (rounded to nearest integer)
 */
export const calculateCalories = (met, weight, unit, duration) => {
  const w = parseFloat(weight);
  const d = parseFloat(duration);
  const m = parseFloat(met);

  if (isNaN(w) || isNaN(d) || isNaN(m) || w <= 0 || d <= 0 || m <= 0) {
    return 0;
  }

  let weightKg = w;
  if (unit === 'imperial') {
    weightKg = w * 0.45359237;
  }

  const calories = m * 3.5 * (weightKg / 200) * d;
  return Math.round(calories);
};
