import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Edit2, X, Calendar, 
  DollarSign, ClipboardList, Map, Notebook, Save 
} from 'lucide-react';
import { useTravel } from '../../context/TravelContext';
import DestinationManager from '../../components/DestinationManager/DestinationManager';
import BudgetTracker from '../../components/BudgetTracker/BudgetTracker';
import PackingList from '../../components/PackingList/PackingList';
import styles from './TripDetails.module.css';

export default function TripDetails() {
  const { tripId } = useParams();
  const { 
    trips, updateTrip, 
    addDestination, deleteDestination,
    addExpense, deleteExpense,
    addPackingItem, togglePackingItem, deletePackingItem
  } = useTravel();

  const trip = trips.find(t => t.id === tripId);
  const [activeTab, setActiveTab] = useState('itinerary'); // itinerary, budget, packing
  const [isEditing, setIsEditing] = useState(false);

  // Edit form states
  const [editTitle, setEditTitle] = useState('');
  const [editStart, setEditStart] = useState('');
  const [editEnd, setEditEnd] = useState('');
  const [editBudget, setEditBudget] = useState(1000);
  const [editNotes, setEditNotes] = useState('');
  const [editColor, setEditColor] = useState('teal');
  const [editEmoji, setEditEmoji] = useState('✈️');

  if (!trip) {
    return (
      <div className="glass-panel animate-fade-in" style={{ padding: '3rem', textAlign: 'center', margin: '4rem auto', maxWidth: '500px' }}>
        <h3>Trip not found</h3>
        <p style={{ color: 'var(--text-muted)', margin: '1rem 0 2rem 0' }}>
          The trip details you are looking for do not exist or have been deleted.
        </p>
        <Link to="/" className="btn-primary">Back to Dashboard</Link>
      </div>
    );
  }

  const handleStartEdit = () => {
    setEditTitle(trip.title);
    setEditStart(trip.startDate);
    setEditEnd(trip.endDate);
    setEditBudget(trip.budget);
    setEditNotes(trip.notes || '');
    setEditColor(trip.color || 'teal');
    setEditEmoji(trip.emoji || '✈️');
    setIsEditing(true);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    updateTrip(trip.id, {
      title: editTitle,
      startDate: editStart,
      endDate: editEnd,
      budget: Number(editBudget) || 0,
      notes: editNotes,
      color: editColor,
      emoji: editEmoji
    });
    setIsEditing(false);
  };

  const colorPresets = [
    { name: 'teal', label: 'Teal Lagoon', gradient: 'linear-gradient(135deg, #0d9488 0%, #059669 100%)' },
    { name: 'blue', label: 'Ocean Blue', gradient: 'linear-gradient(135deg, #2563eb 0%, #0284c7 100%)' },
    { name: 'orange', label: 'Sunset Glow', gradient: 'linear-gradient(135deg, #ea580c 0%, #d97706 100%)' },
    { name: 'rose', label: 'Rose Garden', gradient: 'linear-gradient(135deg, #e11d48 0%, #db2777 100%)' },
    { name: 'purple', label: 'Mystic Night', gradient: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)' },
    { name: 'green', label: 'Alpine Meadow', gradient: 'linear-gradient(135deg, #16a34a 0%, #65a30d 100%)' }
  ];

  const emojiPresets = ['✈️', '🏖️', '🏔️', '🏰', '⛺', '🗺️', '🏨', '🍜', '🚂', '🎒', '🌴', '🍕'];
  const tripColorPreset = colorPresets.find(c => c.name === (isEditing ? editColor : trip.color)) || colorPresets[0];

  return (
    <div className={styles.container}>
      {/* Back button */}
      <Link to="/" className={styles.backLink}>
        <ArrowLeft size={16} />
        <span>Back to Dashboard</span>
      </Link>

      {/* Editable Trip Cover Banner */}
      <div 
        className={`${styles.coverBanner} glass-panel animate-fade-in`}
        style={{ background: tripColorPreset.gradient }}
      >
        <div className={styles.emojiBadge}>{isEditing ? editEmoji : trip.emoji}</div>
        {!isEditing && (
          <button 
            className={styles.editBtn} 
            onClick={handleStartEdit}
            title="Edit Journey Details"
          >
            <Edit2 size={16} />
            <span>Edit Trip</span>
          </button>
        )}
      </div>

      {/* Trip Header Content */}
      <div className={`${styles.headerCard} glass-panel animate-slide-up`}>
        {isEditing ? (
          <form onSubmit={handleSaveEdit} className={styles.editForm}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Journey Destination / Title</label>
              <input
                type="text"
                required
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="input-field"
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Start Date</label>
                <input
                  type="date"
                  required
                  value={editStart}
                  onChange={(e) => setEditStart(e.target.value)}
                  className="input-field"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>End Date</label>
                <input
                  type="date"
                  required
                  value={editEnd}
                  onChange={(e) => setEditEnd(e.target.value)}
                  className="input-field"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Total Budget ($)</label>
                <input
                  type="number"
                  min="0"
                  required
                  value={editBudget}
                  onChange={(e) => setEditBudget(e.target.value)}
                  className="input-field"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Edit Color Theme</label>
              <div className={styles.colorPaletteGrid}>
                {colorPresets.map(preset => (
                  <button
                    key={preset.name}
                    type="button"
                    onClick={() => setEditColor(preset.name)}
                    className={`${styles.colorSwatch} ${editColor === preset.name ? styles.colorSwatchActive : ''}`}
                    style={{ background: preset.gradient }}
                    title={preset.label}
                  />
                ))}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Edit Emoji Icon</label>
              <div className={styles.emojiGrid}>
                {emojiPresets.map(emoji => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => setEditEmoji(emoji)}
                    className={`${styles.emojiButton} ${editEmoji === emoji ? styles.emojiButtonActive : ''}`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Trip Notes</label>
              <textarea
                value={editNotes}
                onChange={(e) => setEditNotes(e.target.value)}
                className="input-field"
                rows={2}
                style={{ resize: 'none' }}
              />
            </div>

            <div className={styles.editActions}>
              <button 
                type="button" 
                onClick={() => setIsEditing(false)}
                className={styles.cancelBtn}
              >
                <X size={16} />
                <span>Cancel</span>
              </button>
              <button 
                type="submit" 
                className="btn-primary"
              >
                <Save size={16} />
                <span>Save Changes</span>
              </button>
            </div>
          </form>
        ) : (
          <div className={styles.headerDetails}>
            <div className={styles.headerTitleRow}>
              <h1 className={styles.tripTitle}>{trip.title}</h1>
            </div>

            <div className={styles.headerGrid}>
              <div className={styles.headerInfoBlock}>
                <Calendar size={18} className={styles.headerIcon} />
                <div>
                  <span className={styles.blockLabel}>Travel Dates</span>
                  <p className={styles.blockValue}>{trip.startDate} to {trip.endDate}</p>
                </div>
              </div>

              <div className={styles.headerInfoBlock}>
                <DollarSign size={18} className={styles.headerIcon} />
                <div>
                  <span className={styles.blockLabel}>Total Trip Budget</span>
                  <p className={styles.blockValue}>${Number(trip.budget).toLocaleString()}</p>
                </div>
              </div>

              {trip.notes && (
                <div className={`${styles.headerInfoBlock} ${styles.notesBlock}`}>
                  <Notebook size={18} className={styles.headerIcon} />
                  <div>
                    <span className={styles.blockLabel}>Reminders / Notes</span>
                    <p className={styles.blockValueNotes}>{trip.notes}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Tab Navigation */}
      <div className={`${styles.tabNav} glass-panel animate-fade-in`}>
        <button
          onClick={() => setActiveTab('itinerary')}
          className={`${styles.tabBtn} ${activeTab === 'itinerary' ? styles.tabBtnActive : ''}`}
        >
          <Map size={18} />
          <span>Itinerary</span>
        </button>

        <button
          onClick={() => setActiveTab('budget')}
          className={`${styles.tabBtn} ${activeTab === 'budget' ? styles.tabBtnActive : ''}`}
        >
          <DollarSign size={18} />
          <span>Budget Tracker</span>
        </button>

        <button
          onClick={() => setActiveTab('packing')}
          className={`${styles.tabBtn} ${activeTab === 'packing' ? styles.tabBtnActive : ''}`}
        >
          <ClipboardList size={18} />
          <span>Packing List</span>
        </button>
      </div>

      {/* Render active sub-component */}
      <div className={styles.tabContent}>
        {activeTab === 'itinerary' && (
          <div className="animate-slide-up">
            <DestinationManager 
              trip={trip} 
              addDestination={addDestination} 
              deleteDestination={deleteDestination} 
            />
          </div>
        )}

        {activeTab === 'budget' && (
          <div className="animate-slide-up">
            <BudgetTracker 
              trip={trip} 
              addExpense={addExpense} 
              deleteExpense={deleteExpense} 
            />
          </div>
        )}

        {activeTab === 'packing' && (
          <div className="animate-slide-up">
            <PackingList 
              trip={trip} 
              addPackingItem={addPackingItem} 
              togglePackingItem={togglePackingItem} 
              deletePackingItem={deletePackingItem} 
            />
          </div>
        )}
      </div>
    </div>
  );
}
