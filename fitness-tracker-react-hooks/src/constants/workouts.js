export const WORKOUT_CATEGORIES = {
  CARDIO: 'Cardio',
  STRENGTH: 'Strength',
  FLEXIBILITY: 'Flexibility',
  SPORTS: 'Sports',
};

export const WORKOUT_PRESETS = [
  { id: 'running', name: 'Running', category: WORKOUT_CATEGORIES.CARDIO, met: 9.8, icon: '🏃‍♂️' },
  { id: 'cycling', name: 'Cycling', category: WORKOUT_CATEGORIES.CARDIO, met: 7.5, icon: '🚴' },
  { id: 'walking', name: 'Walking/Hiking', category: WORKOUT_CATEGORIES.CARDIO, met: 3.8, icon: '🚶' },
  { id: 'swimming', name: 'Swimming', category: WORKOUT_CATEGORIES.CARDIO, met: 5.8, icon: '🏊' },
  { id: 'weightlifting', name: 'Weight Training', category: WORKOUT_CATEGORIES.STRENGTH, met: 3.5, icon: '🏋️‍♂️' },
  { id: 'calisthenics', name: 'Calisthenics', category: WORKOUT_CATEGORIES.STRENGTH, met: 4.5, icon: '🤸' },
  { id: 'yoga', name: 'Yoga', category: WORKOUT_CATEGORIES.FLEXIBILITY, met: 2.5, icon: '🧘' },
  { id: 'pilates', name: 'Pilates', category: WORKOUT_CATEGORIES.FLEXIBILITY, met: 3.0, icon: '🧘‍♂️' },
  { id: 'basketball', name: 'Basketball', category: WORKOUT_CATEGORIES.SPORTS, met: 6.5, icon: '🏀' },
  { id: 'football', name: 'Soccer/Football', category: WORKOUT_CATEGORIES.SPORTS, met: 7.0, icon: '⚽' },
  { id: 'badminton', name: 'Badminton/Tennis', category: WORKOUT_CATEGORIES.SPORTS, met: 5.0, icon: '🏸' },
];

export const DEFAULT_GOALS = {
  steps: 10000,
  calories: 500,
  activeMinutes: 30,
};
