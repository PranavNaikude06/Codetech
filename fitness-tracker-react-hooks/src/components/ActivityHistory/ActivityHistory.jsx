import React, { useState } from 'react';
import { WORKOUT_PRESETS } from '../../constants/workouts';
import { Search, Calendar, Clock, Weight, Flame, Trash2, ShieldAlert } from 'lucide-react';
import styles from './ActivityHistory.module.css';

const ActivityHistory = ({ workouts, onDeleteWorkout, onClearAll }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [showConfirmClear, setShowConfirmClear] = useState(false);

  // Map category to color tag
  const getCategoryStyles = (category) => {
    switch (category) {
      case 'Cardio':
        return { backgroundColor: 'rgba(6, 182, 212, 0.1)', color: '#06b6d4' };
      case 'Strength':
        return { backgroundColor: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' };
      case 'Flexibility':
        return { backgroundColor: 'rgba(236, 72, 153, 0.1)', color: '#ec4899' };
      case 'Sports':
        return { backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' };
      default:
        return { backgroundColor: 'rgba(107, 114, 128, 0.1)', color: '#6b7280' };
    }
  };

  const getPresetIcon = (presetId) => {
    const preset = WORKOUT_PRESETS.find((p) => p.id === presetId);
    return preset ? preset.icon : '🏋️';
  };

  // Filter workouts based on search and category
  const filteredWorkouts = workouts.filter((workout) => {
    const matchesSearch = workout.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || workout.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleClearRequest = () => {
    setShowConfirmClear(true);
  };

  const handleConfirmClear = () => {
    onClearAll();
    setShowConfirmClear(false);
  };

  return (
    <div className={`${styles.container} glass-panel`}>
      <div className={styles.header}>
        <h2 className={styles.title}>Workout Log History</h2>
        {workouts.length > 0 && (
          <button
            onClick={handleClearRequest}
            className={styles.clearBtn}
            type="button"
            aria-label="Clear all logs"
          >
            Clear All
          </button>
        )}
      </div>

      {showConfirmClear && (
        <div className={styles.confirmBox}>
          <ShieldAlert className={styles.alertIcon} size={20} />
          <span className={styles.confirmText}>
            Are you sure you want to delete all logs? This cannot be undone.
          </span>
          <div className={styles.confirmActions}>
            <button onClick={handleConfirmClear} className={styles.confirmYes} type="button">
              Yes, Clear
            </button>
            <button onClick={() => setShowConfirmClear(false)} className={styles.confirmNo} type="button">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Filter Toolbar */}
      <div className={styles.toolbar}>
        <div className={styles.searchWrapper}>
          <Search size={16} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search exercises..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.filterWrapper}>
          {['All', 'Cardio', 'Strength', 'Flexibility', 'Sports'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`${styles.filterTab} ${categoryFilter === cat ? styles.filterTabActive : ''}`}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Workouts List */}
      <div className={styles.listWrapper}>
        {filteredWorkouts.length > 0 ? (
          <div className={styles.list}>
            {filteredWorkouts.map((workout) => {
              const tagStyle = getCategoryStyles(workout.category);
              const formattedDate = new Date(workout.date).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              });

              return (
                <div key={workout.id} className={styles.item}>
                  <div className={styles.itemEmoji}>{getPresetIcon(workout.presetId)}</div>

                  <div className={styles.itemMeta}>
                    <div className={styles.nameRow}>
                      <span className={styles.itemName}>{workout.name}</span>
                      <span className={styles.itemTag} style={tagStyle}>
                        {workout.category}
                      </span>
                    </div>

                    <div className={styles.detailsRow}>
                      <span className={styles.detail}>
                        <Calendar size={12} />
                        {formattedDate}
                      </span>
                      <span className={styles.detail}>
                        <Clock size={12} />
                        {workout.duration} mins
                      </span>
                      <span className={styles.detail}>
                        <Weight size={12} />
                        {workout.weight} {workout.weight > 200 ? 'lbs' : 'kg'}
                      </span>
                    </div>
                  </div>

                  <div className={styles.itemValue}>
                    <div className={styles.kcalCount}>
                      <Flame size={14} className={styles.kcalIcon} />
                      <span>{workout.calories} kcal</span>
                    </div>
                    <span className={styles.intensityTag}>{workout.intensity}</span>
                  </div>

                  <button
                    onClick={() => onDeleteWorkout(workout.id)}
                    className={styles.deleteBtn}
                    aria-label={`Delete ${workout.name} log`}
                    type="button"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <span>No workouts found matching filters.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityHistory;
