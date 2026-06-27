import React, { useState } from 'react';
import { MapPin, Plus, Trash2, Calendar, Clock, BookOpen } from 'lucide-react';
import styles from './DestinationManager.module.css';

export default function DestinationManager({ trip, addDestination, deleteDestination }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    addDestination(trip.id, {
      name,
      date: date || new Date().toISOString().slice(0, 16),
      notes
    });

    setName('');
    setDate('');
    setNotes('');
  };

  // Sort destinations chronologically
  const sortedDestinations = [...(trip.destinations || [])].sort((a, b) => 
    new Date(a.date) - new Date(b.date)
  );

  const formatDateTime = (dtStr) => {
    if (!dtStr) return 'N/A';
    const dateObj = new Date(dtStr);
    return dateObj.toLocaleDateString(undefined, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* Form Column */}
        <div className={`${styles.formCard} glass-panel`}>
          <h3 className={styles.subHeading}>
            <MapPin size={18} className={styles.headerIcon} />
            <span>Add Itinerary Stop</span>
          </h3>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Destination / Attraction</label>
              <input
                type="text"
                required
                placeholder="e.g. Louvre Museum"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Date & Time</label>
              <input
                type="datetime-local"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="input-field"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Notes / Plans</label>
              <textarea
                placeholder="e.g. Guided tour at 10 AM, tickets pre-purchased."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="input-field"
                rows={3}
                style={{ resize: 'none' }}
              />
            </div>

            <button type="submit" className="btn-primary">
              <Plus size={16} />
              <span>Add to Schedule</span>
            </button>
          </form>
        </div>

        {/* Timeline Column */}
        <div className={styles.timelineWrapper}>
          {sortedDestinations.length > 0 ? (
            <div className={styles.timeline}>
              {sortedDestinations.map((dest, index) => (
                <div key={dest.id} className={styles.timelineItem}>
                  {/* Timeline point */}
                  <div className={styles.timelineMarker}>
                    <div className={styles.markerDot} />
                    {index < sortedDestinations.length - 1 && <div className={styles.markerLine} />}
                  </div>

                  {/* Timeline Content */}
                  <div className={`${styles.timelineContent} glass-panel animate-fade-in`}>
                    <div className={styles.timelineHeader}>
                      <h4 className={styles.destName}>{dest.name}</h4>
                      <button
                        onClick={() => deleteDestination(trip.id, dest.id)}
                        className={styles.deleteBtn}
                        title="Delete stop"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className={styles.timeRow}>
                      <Clock size={12} />
                      <span>{formatDateTime(dest.date)}</span>
                    </div>

                    {dest.notes && (
                      <p className={styles.notesText}>
                        <BookOpen size={12} className={styles.notesIcon} />
                        <span>{dest.notes}</span>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={`${styles.emptyTimeline} glass-panel`}>
              <Calendar size={32} className={styles.emptyIcon} />
              <h4>No stops scheduled yet</h4>
              <p>Start planning your itinerary by adding attractions, flights, or hotel check-ins using the form.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
