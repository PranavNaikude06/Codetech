import React, { useState } from 'react';
import { DollarSign, Plus, Trash2, Calendar, AlertTriangle, PieChart, Tag } from 'lucide-react';
import styles from './BudgetTracker.module.css';

export default function BudgetTracker({ trip, addExpense, deleteExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Transport');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const categories = ['Transport', 'Accommodation', 'Food', 'Activities', 'Shopping', 'Other'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim() || !amount) return;

    addExpense(trip.id, {
      description,
      amount: Number(amount) || 0,
      category,
      date: date || new Date().toISOString().split('T')[0]
    });

    setDescription('');
    setAmount('');
    setCategory('Transport');
    setDate(new Date().toISOString().split('T')[0]);
  };

  // Compute expenses sum
  const expensesList = trip.expenses || [];
  const totalSpent = expensesList.reduce((acc, e) => acc + (Number(e.amount) || 0), 0);
  const budgetLimit = Number(trip.budget) || 0;
  const budgetPercent = budgetLimit > 0 ? Math.min(Math.round((totalSpent / budgetLimit) * 100), 100) : 0;
  const isOverBudget = totalSpent > budgetLimit;
  const overAmount = totalSpent - budgetLimit;

  // Compute stats by category
  const categorySummary = categories.map(cat => {
    const sum = expensesList.filter(e => e.category === cat).reduce((acc, e) => acc + (Number(e.amount) || 0), 0);
    const percent = totalSpent > 0 ? Math.round((sum / totalSpent) * 100) : 0;
    return { name: cat, sum, percent };
  }).filter(c => c.sum > 0);

  // Sort expenses list (latest first)
  const sortedExpenses = [...expensesList].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className={styles.container}>
      {/* Visual Budget Progress Cards */}
      <div className={styles.statsGrid}>
        <div className={`${styles.progressCard} glass-panel animate-fade-in`}>
          <div className={styles.progressHeader}>
            <div>
              <span className={styles.label}>Total Budget Limit</span>
              <h3 className={styles.value}>${budgetLimit.toLocaleString()}</h3>
            </div>
            <div>
              <span className={styles.label}>Logged Expenses</span>
              <h3 className={`${styles.value} ${isOverBudget ? styles.textDanger : styles.textSuccess}`}>
                ${totalSpent.toLocaleString()}
              </h3>
            </div>
          </div>

          <div className={styles.progressBarBg}>
            <div 
              className={`${styles.progressBarFill} ${isOverBudget ? styles.barDanger : styles.barSuccess}`}
              style={{ width: `${budgetPercent}%` }}
            />
          </div>

          {isOverBudget ? (
            <div className={styles.warningMessage}>
              <AlertTriangle size={16} />
              <span>Over budget by <strong>${overAmount.toLocaleString()}</strong>!</span>
            </div>
          ) : (
            <p className={styles.remainingText}>
              You have <strong>${(budgetLimit - totalSpent).toLocaleString()}</strong> remaining.
            </p>
          )}
        </div>

        {/* Category breakdown summary */}
        <div className={`${styles.categoryCard} glass-panel animate-fade-in`}>
          <h4 className={styles.cardSubTitle}>
            <PieChart size={16} />
            <span>Category breakdown</span>
          </h4>
          {categorySummary.length > 0 ? (
            <div className={styles.categoryList}>
              {categorySummary.map(cat => (
                <div key={cat.name} className={styles.catItem}>
                  <div className={styles.catMeta}>
                    <span className={styles.catName}>{cat.name}</span>
                    <span className={styles.catVal}>
                      ${cat.sum.toLocaleString()} ({cat.percent}%)
                    </span>
                  </div>
                  <div className={styles.progressBarBgMini}>
                    <div 
                      className={styles.progressBarFillMini} 
                      style={{ width: `${cat.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className={styles.emptyCatText}>No expenses logged to categorize yet.</p>
          )}
        </div>
      </div>

      <div className={styles.grid}>
        {/* Log Expense Form */}
        <div className={`${styles.formCard} glass-panel`}>
          <h3 className={styles.subHeading}>
            <Plus size={18} className={styles.headerIcon} />
            <span>Add Expense</span>
          </h3>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Description</label>
              <input
                type="text"
                required
                placeholder="e.g. Dinner at bistro"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input-field"
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Amount ($)</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  required
                  placeholder="e.g. 45"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
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
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Date</label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="input-field"
              />
            </div>

            <button type="submit" className="btn-primary">
              <Plus size={16} />
              <span>Add Expense</span>
            </button>
          </form>
        </div>

        {/* Expenses List */}
        <div className={`${styles.listCard} glass-panel`}>
          <h3 className={styles.subHeading}>
            <Tag size={18} className={styles.headerIcon} />
            <span>Expense Ledger</span>
          </h3>

          {sortedExpenses.length > 0 ? (
            <div className={styles.expensesList}>
              {sortedExpenses.map(exp => (
                <div key={exp.id} className={styles.expenseItem}>
                  <div className={styles.expenseMain}>
                    <div className={styles.expenseInfo}>
                      <span className={styles.expenseDesc}>{exp.description}</span>
                      <div className={styles.expenseMeta}>
                        <span className={`${styles.categoryBadge} ${styles['badge-' + exp.category.toLowerCase()]}`}>
                          {exp.category}
                        </span>
                        <span className={styles.expenseDateRow}>
                          <Calendar size={12} />
                          {exp.date}
                        </span>
                      </div>
                    </div>
                    <span className={styles.expenseAmount}>
                      ${Number(exp.amount).toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => deleteExpense(trip.id, exp.id)}
                    className={styles.deleteBtn}
                    title="Remove expense"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.emptyList}>
              <DollarSign size={32} className={styles.emptyIcon} />
              <h4>No expenses logged</h4>
              <p>Start keeping track of your travel spending using the ledger log form.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
