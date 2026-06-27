import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TravelProvider } from './context/TravelContext';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import TripDetails from './pages/TripDetails/TripDetails';
import NotFound from './pages/NotFound/NotFound';

export default function App() {
  return (
    <TravelProvider>
      <Router>
        <Navbar />
        <main style={{ width: '90%', maxWidth: '1200px', margin: '0 auto', paddingBottom: '4rem' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/trip/:tripId" element={<TripDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </TravelProvider>
  );
}
