import React, { useState } from 'react';
import { CheckSquare, Plus, Trash2, ShoppingBag, Eye, EyeOff } from 'lucide-react';
import styles from './PackingList.module.css';

export default function PackingList({ trip, addPackingItem, togglePackingItem, deletePackingItem }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Clothing');
  const [filterCategory, setFilterCategory] = useState('All');
  const [hidePacked, setHidePacked] = useState(false);

  const categories = ['Clothing', 'Toiletries', 'Electronics', 'Documents', 'Miscellaneous'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    addPackingItem(trip.id, {
      name,
      category,
      packed: false
    });

    setName('');
    setCategory('Clothing');
  };

  const listItems = trip.packingList || [];
  const totalItems = listItems.length;
  const packedItems = listItems.filter(i => i.packed).length;
  const packedPercent = totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;

  // Filter items
  const filteredItems = listItems.filter(item => {
    const matchesCategory = filterCategory === 'All' || item.category === filterCategory;
    const matchesPacked = !hidePacked || !item.packed;
    return matchesCategory && matchesPacked;
  });

  return (
    <div className={styles.container}>
      {/* Packing Progress Stats */}
      <div className={`${styles.statsCard} glass-panel animate-fade-in`}>
        <div className={styles.statsHeader}>
          <div>
            <span className={styles.label}>Checklist Completeness</span>
            <h3 className={styles.value}>{packedPercent}%</h3>
          </div>
          <div className={styles.ratio}>
            <strong>{packedItems}</strong> of <strong>{totalItems}</strong> items packed
          </div>
        </div>

        <div className={styles.progressBarBg}>
          <div 
            className={styles.progressBarFill}
            style={{ width: `${packedPercent}%` }}
          />
        </div>
      </div>

      <div className={styles.grid}>
        {/* Add Item Form */}
        <div className={`${styles.formCard} glass-panel`}>
          <h3 className={styles.subHeading}>
            <Plus size={18} className={styles.headerIcon} />
            <span>Add Packing Item</span>
          </h3>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Item Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Swimwear / Passport"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="input-field"
                style={{ height: '46px', cursor: 'pointer' }}
              >
                {categories.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn-primary">
              <Plus size={16} />
              <span>Add to Checklist</span>
            </button>
          </form>
        </div>

        {/* Packing Items Ledger */}
        <div className={`${styles.listCard} glass-panel`}>
          <div className={styles.listHeaderWrapper}>
            <h3 className={styles.subHeading} style={{ borderBottom: 'none', marginBottom: 0, paddingBottom: 0 }}>
              <CheckSquare size={18} className={styles.headerIcon} />
              <span>Checklist</span>
            </h3>

            {/* Filter controls */}
            <div className={styles.controlsRow}>
              <button 
                type="button" 
                onClick={() => setHidePacked(prev => !prev)}
                className={`${styles.toggleFilterBtn} ${hidePacked ? styles.toggleFilterActive : ''}`}
                title={hidePacked ? "Show Packed Items" : "Hide Packed Items"}
              >
                {hidePacked ? <Eye size={16} /> : <EyeOff size={16} />}
                <span>{hidePacked ? "Showing Unpacked" : "Hide Packed"}</span>
              </button>

              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className={styles.filterSelect}
              >
                <option value="All">All Categories</option>
                {categories.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          <hr className={styles.divider} />

          {filteredItems.length > 0 ? (
            <div className={styles.itemsList}>
              {filteredItems.map(item => (
                <div 
                  key={item.id} 
                  className={`${styles.itemRow} ${item.packed ? styles.rowPacked : ''}`}
                  onClick={() => togglePackingItem(trip.id, item.id)}
                >
                  <div className={styles.itemMain}>
                    <input
                      type="checkbox"
                      checked={item.packed}
                      onChange={() => {}} // handled by row click
                      className={styles.checkbox}
                    />
                    <div className={styles.itemDetails}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={`${styles.categoryBadge} ${styles['badge-' + item.category.toLowerCase()]}`}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deletePackingItem(trip.id, item.id);
                    }}
                    className={styles.deleteBtn}
                    title="Remove item"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.emptyList}>
              <ShoppingBag size={32} className={styles.emptyIcon} />
              <h4>No items match criteria</h4>
              <p>Try changing your category filters or start packing new items.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
