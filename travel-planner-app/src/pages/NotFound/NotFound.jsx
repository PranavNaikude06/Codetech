import React from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="glass-panel animate-fade-in" style={{ maxWidth: '500px', margin: '4rem auto', padding: '3rem', textAlign: 'center' }}>
      <Compass size={64} style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', animation: 'spin 15s linear infinite' }} />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 800 }}>404</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Oops! It looks like you've wandered off the map. This destination doesn't exist.
      </p>
      <Link to="/" className="btn-primary">
        Back to Dashboard
      </Link>
    </div>
  );
}
