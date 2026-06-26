import React, { useReducer, useEffect } from 'react';
import { Dumbbell } from 'lucide-react';
import styles from './App.module.css';

// Hooks
import useLocalStorage from './hooks/useLocalStorage';
import useTheme from './hooks/useTheme';

// Constants
import { DEFAULT_GOALS } from './constants/workouts';

// Components
import ThemeToggler from './components/ThemeToggler/ThemeToggler';
import Dashboard from './components/Dashboard/Dashboard';
import WorkoutLogger from './components/WorkoutLogger/WorkoutLogger';
import BMICalculator from './components/BMICalculator/BMICalculator';
import GoalTracker from './components/GoalTracker/GoalTracker';
import StatsDashboard from './components/StatsDashboard/StatsDashboard';
import ActivityHistory from './components/ActivityHistory/ActivityHistory';

// Reducer for Workouts Database
const WORKOUTS_STORAGE_KEY = 'fitness-workouts-db';

const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_WORKOUT':
      return [action.payload, ...state];
    case 'DELETE_WORKOUT':
      return state.filter((w) => w.id !== action.payload);
    case 'CLEAR_ALL':
      return [];
    default:
      return state;
  }
};

function App() {
  // Theme state
  const [theme] = useTheme();

  // Workouts useReducer state
  const [workouts, dispatch] = useReducer(workoutsReducer, [], () => {
    try {
      const saved = localStorage.getItem(WORKOUTS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sync workouts to localStorage on update
  useEffect(() => {
    try {
      localStorage.setItem(WORKOUTS_STORAGE_KEY, JSON.stringify(workouts));
    } catch (err) {
      console.warn('Failed to save workouts database:', err);
    }
  }, [workouts]);

  // Global user settings persisted via useLocalStorage
  const [weight, setWeight] = useLocalStorage('fitness-user-weight', 70);
  const [unit, setUnit] = useLocalStorage('fitness-user-unit', 'metric');
  const [goals, setGoals] = useLocalStorage('fitness-user-goals', DEFAULT_GOALS);
  const [stepsHistory, setStepsHistory] = useLocalStorage('fitness-steps-history', {});

  // Date constants
  const todayStr = new Date().toDateString();
  const todaySteps = stepsHistory[todayStr] || 0;

  // Filter workouts logged today
  const todayWorkouts = workouts.filter(
    (w) => new Date(w.date).toDateString() === todayStr
  );

  // Event Handlers
  const handleLogWorkout = (newWorkout) => {
    const workoutWithId = {
      ...newWorkout,
      id: `w-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    };
    dispatch({ type: 'ADD_WORKOUT', payload: workoutWithId });
  };

  const handleDeleteWorkout = (id) => {
    dispatch({ type: 'DELETE_WORKOUT', payload: id });
  };

  const handleClearAll = () => {
    dispatch({ type: 'CLEAR_ALL' });
  };

  const handleUpdateSteps = (stepsCount) => {
    setStepsHistory((prev) => ({
      ...prev,
      [todayStr]: stepsCount,
    }));
  };

  const handleUpdateGoals = (newGoals) => {
    setGoals(newGoals);
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        {/* App Header */}
        <header className={styles.header}>
          <div className={styles.logoArea}>
            <div className={styles.logoTitle}>
              <Dumbbell className={styles.logoText} size={26} />
              <h1>ActivePulse</h1>
            </div>
            <span className={styles.logoSubtitle}>
              React Hooks Fitness & Wellness Companion • ID: CITS3986
            </span>
          </div>
          <ThemeToggler />
        </header>

        {/* Main Columns */}
        <main className={styles.mainGrid}>
          {/* Left Column: Metrics & Form Controls */}
          <div className={styles.leftCol}>
            <Dashboard
              todayWorkouts={todayWorkouts}
              todaySteps={todaySteps}
              goals={goals}
              onUpdateSteps={handleUpdateSteps}
            />

            <div className={styles.formGrid}>
              <WorkoutLogger
                userWeight={weight}
                userUnit={unit}
                onLogWorkout={handleLogWorkout}
              />
              
              <div className={styles.formCol}>
                <BMICalculator
                  initialWeight={weight}
                  initialUnit={unit}
                  onUpdateWeight={setWeight}
                  onUpdateUnit={setUnit}
                />
                
                <GoalTracker
                  goals={goals}
                  onUpdateGoals={handleUpdateGoals}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Statistics & Logs */}
          <div className={styles.rightCol}>
            <StatsDashboard workouts={workouts} theme={theme} />
            <ActivityHistory
              workouts={workouts}
              onDeleteWorkout={handleDeleteWorkout}
              onClearAll={handleClearAll}
            />
          </div>
        </main>

        {/* App Footer */}
        <footer className={styles.footer}>
          <span className={styles.footerText}>
            Pranav Sachin Naikude • CODTECH IT Solutions React.js Web Development Portfolio
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;
