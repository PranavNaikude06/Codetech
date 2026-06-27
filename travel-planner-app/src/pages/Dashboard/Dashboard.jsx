import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, Search, Calendar, 
  MapPin, PlusCircle, Trash2, ArrowUpDown, X, CheckSquare, Sparkles 
} from 'lucide-react';
import { useTravel } from '../../context/TravelContext';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  const { trips, addTrip, deleteTrip } = useTravel();
  const navigate = useNavigate();

  // Search, filter & sorting state
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('startDate-asc'); // startDate-asc, startDate-desc, budget-desc, budget-asc, title-asc
  const [showAddModal, setShowAddModal] = useState(false);

  // Form states for new trip
  const [newTripTitle, setNewTripTitle] = useState('');
  const [newTripStart, setNewTripStart] = useState('');
  const [newTripEnd, setNewTripEnd] = useState('');
  const [newTripBudget, setNewTripBudget] = useState(1000);
  const [newTripNotes, setNewTripNotes] = useState('');
  const [newTripColor, setNewTripColor] = useState('teal');
  const [newTripEmoji, setNewTripEmoji] = useState('✈️');

  const colorPresets = [
    { name: 'teal', label: 'Teal Lagoon', gradient: 'linear-gradient(135deg, #0d9488 0%, #059669 100%)' },
    { name: 'blue', label: 'Ocean Blue', gradient: 'linear-gradient(135deg, #2563eb 0%, #0284c7 100%)' },
    { name: 'orange', label: 'Sunset Glow', gradient: 'linear-gradient(135deg, #ea580c 0%, #d97706 100%)' },
    { name: 'rose', label: 'Rose Garden', gradient: 'linear-gradient(135deg, #e11d48 0%, #db2777 100%)' },
    { name: 'purple', label: 'Mystic Night', gradient: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)' },
    { name: 'green', label: 'Alpine Meadow', gradient: 'linear-gradient(135deg, #16a34a 0%, #65a30d 100%)' }
  ];

  const emojiPresets = ['✈️', '🏖️', '🏔️', '🏰', '⛺', '🗺️', '🏨', '🍜', '🚂', '🎒', '🌴', '🍕'];

  const handleAddTrip = (e) => {
    e.preventDefault();
    if (!newTripTitle.trim()) return;

    const newTrip = addTrip({
      title: newTripTitle,
      startDate: newTripStart || new Date().toISOString().split('T')[0],
      endDate: newTripEnd || new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
      budget: Number(newTripBudget) || 0,
      notes: newTripNotes,
      color: newTripColor,
      emoji: newTripEmoji
    });

    // Reset form states
    setNewTripTitle('');
    setNewTripStart('');
    setNewTripEnd('');
    setNewTripBudget(1000);
    setNewTripNotes('');
    setNewTripColor('teal');
    setNewTripEmoji('✈️');
    setShowAddModal(false);

    // Route to new trip details page
    navigate(`/trip/${newTrip.id}`);
  };

  // Filter and sort trips
  const filteredTrips = trips.filter(t => 
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (t.notes || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedTrips = [...filteredTrips].sort((a, b) => {
    switch (sortBy) {
      case 'startDate-asc':
        return new Date(a.startDate) - new Date(b.startDate);
      case 'startDate-desc':
        return new Date(b.startDate) - new Date(a.startDate);
      case 'budget-desc':
        return (b.budget || 0) - (a.budget || 0);
      case 'budget-asc':
        return (a.budget || 0) - (b.budget || 0);
      case 'title-asc':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  // Calculate global summary stats
  const totalTrips = trips.length;
  const totalBudget = trips.reduce((acc, t) => acc + (Number(t.budget) || 0), 0);
  const totalSpent = trips.reduce((acc, t) => {
    const expensesSum = (t.expenses || []).reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
    return acc + expensesSum;
  }, 0);
  
  // Total packed percentage overall
  let totalItemsCount = 0;
  let packedItemsCount = 0;
  trips.forEach(t => {
    if (t.packingList) {
      totalItemsCount += t.packingList.length;
      packedItemsCount += t.packingList.filter(i => i.packed).length;
    }
  });
  const packingRatio = totalItemsCount > 0 ? Math.round((packedItemsCount / totalItemsCount) * 100) : 0;

  return (
    <div className={styles.dashboardContainer}>
      {/* Overview Dashboard Cards */}
      <div className={styles.statsOverview}>
        <div className={`${styles.overviewCard} glass-panel animate-slide-up`}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Total Trips</span>
            <MapPin className={styles.cardIconTeal} size={20} />
          </div>
          <div className={styles.cardValue}>{totalTrips}</div>
          <p className={styles.cardSubtext}>Active travel diaries</p>
        </div>
        
        <div className={`${styles.overviewCard} glass-panel animate-slide-up`} style={{ animationDelay: '0.1s' }}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Total Budget</span>
            <Sparkles className={styles.cardIconGold} size={20} />
          </div>
          <div className={styles.cardValue}>${totalBudget.toLocaleString()}</div>
          <p className={styles.cardSubtext}>Spent: ${totalSpent.toLocaleString()}</p>
        </div>

        <div className={`${styles.overviewCard} glass-panel animate-slide-up`} style={{ animationDelay: '0.2s' }}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Packing Progress</span>
            <CheckSquare className={styles.cardIconBlue} size={20} />
          </div>
          <div className={styles.cardValue}>{packingRatio}%</div>
          <p className={styles.cardSubtext}>
            {packedItemsCount} of {totalItemsCount} packed
          </p>
        </div>
      </div>

      {/* Control Bar */}
      <div className={`${styles.controlBar} glass-panel animate-fade-in`}>
        <div className={styles.searchWrapper}>
          <Search className={styles.searchIcon} size={18} />
          <input 
            type="text" 
            placeholder="Search trips..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.filtersWrapper}>
          <div className={styles.sortSelectWrapper}>
            <ArrowUpDown size={16} className={styles.sortIcon} />
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className={styles.sortSelect}
            >
              <option value="startDate-asc">Date: Earliest First</option>
              <option value="startDate-desc">Date: Latest First</option>
              <option value="budget-desc">Budget: High to Low</option>
              <option value="budget-asc">Budget: Low to High</option>
              <option value="title-asc">Alphabetical (A-Z)</option>
            </select>
          </div>

          <button 
            className="btn-primary" 
            onClick={() => setShowAddModal(true)}
          >
            <Plus size={18} />
            <span>Create Trip</span>
          </button>
        </div>
      </div>

      {/* Trips Grid */}
      <div className={styles.tripsGrid}>
        {sortedTrips.length > 0 ? (
          sortedTrips.map((trip, idx) => {
            const expensesSum = (trip.expenses || []).reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
            const budgetPercent = trip.budget > 0 ? Math.min(Math.round((expensesSum / trip.budget) * 100), 100) : 0;
            const packingTotal = (trip.packingList || []).length;
            const packingPacked = (trip.packingList || []).filter(i => i.packed).length;
            const tripColorPreset = colorPresets.find(c => c.name === trip.color) || colorPresets[0];

            return (
              <div 
                key={trip.id} 
                className={`${styles.tripCard} glass-panel animate-slide-up`}
                style={{ animationDelay: `${0.1 * (idx % 4)}s` }}
              >
                {/* Trip Card Cover Banner */}
                <div 
                  className={styles.tripCardCover} 
                  style={{ background: tripColorPreset.gradient }}
                >
                  <div className={styles.emojiBadge}>{trip.emoji || '✈️'}</div>
                  <button 
                    className={styles.deleteButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (window.confirm(`Are you sure you want to delete "${trip.title}"?`)) {
                        deleteTrip(trip.id);
                      }
                    }}
                    title="Delete Trip"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                {/* Card Content */}
                <div className={styles.tripCardContent}>
                  <h3 className={styles.tripTitle}>{trip.title}</h3>
                  <div className={styles.tripDateRow}>
                    <Calendar size={14} className={styles.tripCardIcon} />
                    <span>{trip.startDate} to {trip.endDate}</span>
                  </div>

                  {/* Budget Tracker Progress */}
                  <div className={styles.metricSection}>
                    <div className={styles.metricHeader}>
                      <span className={styles.metricLabel}>Budget spent</span>
                      <span className={styles.metricVal}>
                        ${expensesSum.toLocaleString()} / ${trip.budget.toLocaleString()}
                      </span>
                    </div>
                    <div className={styles.progressBarBg}>
                      <div 
                        className={`${styles.progressBarFill} ${expensesSum > trip.budget ? styles.barDanger : ''}`}
                        style={{ width: `${budgetPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Packing Progress */}
                  <div className={styles.metricSection}>
                    <div className={styles.metricHeader}>
                      <span className={styles.metricLabel}>Packing checklist</span>
                      <span className={styles.metricVal}>
                        {packingPacked} of {packingTotal} packed
                      </span>
                    </div>
                    <div className={styles.progressBarBg}>
                      <div 
                        className={styles.progressBarFillBlue}
                        style={{ width: `${packingTotal > 0 ? (packingPacked / packingTotal) * 100 : 0}%` }}
                      />
                    </div>
                  </div>

                  <button 
                    onClick={() => navigate(`/trip/${trip.id}`)}
                    className={styles.manageBtn}
                  >
                    Manage Plan
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className={`${styles.emptyState} glass-panel animate-fade-in`}>
            <MapPin size={48} className={styles.emptyIcon} />
            <h3>No trips found</h3>
            <p>Ready to start exploring? Create a new trip itinerary right now.</p>
            <button className="btn-primary" onClick={() => setShowAddModal(true)} style={{ marginTop: '1rem' }}>
              <PlusCircle size={18} />
              <span>Create New Trip</span>
            </button>
          </div>
        )}
      </div>

      {/* Add Trip Modal Overlay */}
      {showAddModal && (
        <div className={styles.modalOverlay}>
          <div className={`${styles.modalContent} glass-panel animate-slide-up`}>
            <div className={styles.modalHeader}>
              <h3>Create New Journey</h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className={styles.closeBtn}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleAddTrip} className={styles.modalForm}>
              <div className={styles.formGroup}>
                <label className={styles.modalLabel}>Trip Title / Destination</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Beach Vacation in Maldives"
                  value={newTripTitle}
                  onChange={(e) => setNewTripTitle(e.target.value)}
                  className="input-field"
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.modalLabel}>Start Date</label>
                  <input 
                    type="date" 
                    required 
                    value={newTripStart}
                    onChange={(e) => setNewTripStart(e.target.value)}
                    className="input-field"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.modalLabel}>End Date</label>
                  <input 
                    type="date" 
                    required 
                    value={newTripEnd}
                    onChange={(e) => setNewTripEnd(e.target.value)}
                    className="input-field"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.modalLabel}>Total Budget ($)</label>
                <input 
                  type="number" 
                  min="0" 
                  placeholder="e.g. 2000"
                  value={newTripBudget}
                  onChange={(e) => setNewTripBudget(e.target.value)}
                  className="input-field"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.modalLabel}>Choose Cover Theme</label>
                <div className={styles.colorPaletteGrid}>
                  {colorPresets.map(preset => (
                    <button
                      key={preset.name}
                      type="button"
                      onClick={() => setNewTripColor(preset.name)}
                      className={`${styles.colorSwatch} ${newTripColor === preset.name ? styles.colorSwatchActive : ''}`}
                      style={{ background: preset.gradient }}
                      title={preset.label}
                    />
                  ))}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.modalLabel}>Select Emoji Icon</label>
                <div className={styles.emojiGrid}>
                  {emojiPresets.map(emoji => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setNewTripEmoji(emoji)}
                      className={`${styles.emojiButton} ${newTripEmoji === emoji ? styles.emojiButtonActive : ''}`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.modalLabel}>Trip Notes (Optional)</label>
                <textarea 
                  placeholder="Add any reminders or packing notes..."
                  value={newTripNotes}
                  onChange={(e) => setNewTripNotes(e.target.value)}
                  className="input-field"
                  rows={3}
                  style={{ resize: 'none' }}
                />
              </div>

              <div className={styles.modalActions}>
                <button 
                  type="button" 
                  onClick={() => setShowAddModal(false)}
                  className={styles.cancelBtn}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn-primary"
                >
                  Plan Journey
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
